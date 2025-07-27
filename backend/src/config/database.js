import 'dotenv/config'

// Configuração base que será aplicada sempre
const baseConfig = {
  dialectOptions: {
    ssl: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: console.log,
}

// Se POSTGRES_URL estiver disponível, use-a; caso contrário, use variáveis individuais
const config = process.env.POSTGRES_URL ? 
  {
    ...baseConfig,
    url: process.env.POSTGRES_URL,
    dialect: 'postgres',
  }
: {
  ...baseConfig,
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'POSTGRES',
  database: process.env.DB_NAME || 'blastburger',
  port: process.env.DB_PORT || 5436,
}

export default config