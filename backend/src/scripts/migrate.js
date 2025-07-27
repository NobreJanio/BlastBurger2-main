import Sequelize from 'sequelize'
import databaseConfig from '../config/database.js'

// Importar as migrações
import * as createUsersTable from '../database/migrations/20240307000000-create-users-table.js'
import * as createCategoriesTable from '../database/migrations/20240307000001-create-categories-table.js'
import * as createProductsTable from '../database/migrations/20240307000002-create-products-table.js'
import * as addPathColumn from '../database/migrations/20240307000003-add-path-column.js'
import * as addOfferColumn from '../database/migrations/20240307000004-add-offer-column.js'

const migrations = [
  { name: '20240307000000-create-users-table', migration: createUsersTable },
  { name: '20240307000001-create-categories-table', migration: createCategoriesTable },
  { name: '20240307000002-create-products-table', migration: createProductsTable },
  { name: '20240307000003-add-path-column', migration: addPathColumn },
  { name: '20240307000004-add-offer-column', migration: addOfferColumn },
]

async function runMigrations() {
  // Usar a mesma lógica de conexão do database/index.js
  let sequelize
  if (databaseConfig.url) {
    sequelize = new Sequelize(databaseConfig.url, {
      dialect: databaseConfig.dialect,
      dialectOptions: databaseConfig.dialectOptions,
      pool: databaseConfig.pool,
      define: databaseConfig.define,
      logging: databaseConfig.logging,
    })
  } else {
    sequelize = new Sequelize(databaseConfig)
  }
  
  try {
    // Testar conexão
    await sequelize.authenticate()
    console.log('✅ Conexão com o banco estabelecida com sucesso.')
    
    // Criar tabela SequelizeMeta se não existir
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS "SequelizeMeta" (
        "name" VARCHAR(255) NOT NULL PRIMARY KEY
      );
    `)
    
    // Verificar quais migrações já foram executadas
    const [executedMigrations] = await sequelize.query(
      'SELECT name FROM "SequelizeMeta" ORDER BY name ASC'
    )
    
    const executedNames = executedMigrations.map(row => row.name)
    
    // Executar migrações pendentes
    for (const { name, migration } of migrations) {
      if (!executedNames.includes(name)) {
        console.log(`🔄 Executando migração: ${name}`)
        
        await migration.up(sequelize.getQueryInterface(), Sequelize)
        
        // Registrar migração como executada
        await sequelize.query(
          'INSERT INTO "SequelizeMeta" (name) VALUES (?)',
          { replacements: [name] }
        )
        
        console.log(`✅ Migração ${name} executada com sucesso.`)
      } else {
        console.log(`⏭️  Migração ${name} já foi executada.`)
      }
    }
    
    console.log('🎉 Todas as migrações foram executadas com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro ao executar migrações:', error)
    process.exit(1)
  } finally {
    await sequelize.close()
  }
}

runMigrations()