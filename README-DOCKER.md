# 🍔 BlastBurger - Docker Setup

Este projeto agora está totalmente containerizado com Docker, incluindo frontend, backend e bancos de dados.

## 🚀 Portas Utilizadas

### Novas Portas (Docker)
- **Frontend**: http://localhost:5175
- **Backend**: http://localhost:3003
- **PostgreSQL**: localhost:5436
- **MongoDB**: localhost:27020

### Portas Antigas (Desenvolvimento Local)
- **Frontend**: http://localhost:5174
- **Backend**: http://localhost:3002
- **PostgreSQL**: localhost:5435
- **MongoDB**: localhost:27019

## 📋 Pré-requisitos

- Docker Desktop instalado
- Docker Compose instalado

## 🛠️ Como Usar

### Opção 1: Scripts de Gerenciamento

#### Windows (PowerShell)
```powershell
# Iniciar todos os serviços
.\docker-manager.ps1 start

# Parar todos os serviços
.\docker-manager.ps1 stop

# Reiniciar todos os serviços
.\docker-manager.ps1 restart

# Ver logs
.\docker-manager.ps1 logs

# Construir imagens
.\docker-manager.ps1 build

# Limpar containers e volumes
.\docker-manager.ps1 clean

# Ver status dos serviços
.\docker-manager.ps1 status
```

#### Linux/Mac (Bash)
```bash
# Dar permissão de execução
chmod +x docker-manager.sh

# Iniciar todos os serviços
./docker-manager.sh start

# Parar todos os serviços
./docker-manager.sh stop

# Ver outros comandos
./docker-manager.sh
```

### Opção 2: Docker Compose Direto

```bash
# Iniciar todos os serviços
docker-compose up -d

# Parar todos os serviços
docker-compose down

# Ver logs
docker-compose logs -f

# Construir imagens
docker-compose build

# Reiniciar um serviço específico
docker-compose restart backend
```

## 🏗️ Estrutura dos Containers

### 1. PostgreSQL
- **Container**: `blastburger-postgres-new`
- **Porta Externa**: 5436
- **Porta Interna**: 5432
- **Volume**: `postgres_data_new`

### 2. MongoDB
- **Container**: `blastburger-mongodb-new`
- **Porta Externa**: 27020
- **Porta Interna**: 27017
- **Volume**: `mongodb_data_new`

### 3. Backend (Node.js/Express)
- **Container**: `blastburger-backend`
- **Porta Externa**: 3003
- **Porta Interna**: 3003
- **Volume**: Código sincronizado + uploads

### 4. Frontend (React/Vite)
- **Container**: `blastburger-frontend`
- **Porta Externa**: 5175
- **Porta Interna**: 5175
- **Volume**: Código sincronizado

## 🔧 Configurações de Ambiente

### Backend (.env)
```env
# Database Configuration
POSTGRES_URL=postgres://postgres:POSTGRES@localhost:5436/blastburger
MONGODB_URL=mongodb://localhost:27020/blastburger
DB_HOST=localhost
DB_PORT=5436
PORT=3003
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3003
```

## 🔄 Hot Reload

Ambos frontend e backend estão configurados com hot reload:
- **Frontend**: Vite com hot reload ativo
- **Backend**: Nodemon para reinicialização automática

## 📊 Monitoramento

### Ver logs de todos os serviços
```bash
docker-compose logs -f
```

### Ver logs de um serviço específico
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
docker-compose logs -f mongodb
```

### Ver status dos containers
```bash
docker-compose ps
```

## 🗄️ Banco de Dados

### Conectar ao PostgreSQL
```bash
# Via Docker
docker exec -it blastburger-postgres-new psql -U postgres -d blastburger

# Via cliente externo
psql -h localhost -p 5436 -U postgres -d blastburger
```

### Conectar ao MongoDB
```bash
# Via Docker
docker exec -it blastburger-mongodb-new mongosh blastburger

# Via cliente externo
mongosh mongodb://localhost:27020/blastburger
```

## 🧹 Limpeza

### Parar e remover containers
```bash
docker-compose down
```

### Remover volumes (⚠️ Apaga dados do banco)
```bash
docker-compose down -v
```

### Limpeza completa do sistema
```bash
docker system prune -f
```

## 🚨 Troubleshooting

### Porta já em uso
Se alguma porta estiver em uso, você pode:
1. Parar o serviço que está usando a porta
2. Alterar a porta no `docker-compose.yml`

### Problemas de permissão (Linux/Mac)
```bash
sudo chown -R $USER:$USER .
```

### Reconstruir imagens
```bash
docker-compose build --no-cache
```

### Verificar logs de erro
```bash
docker-compose logs backend
docker-compose logs frontend
```

## 📝 Notas Importantes

1. **Volumes**: Os dados dos bancos são persistidos em volumes Docker
2. **Hot Reload**: Mudanças no código são refletidas automaticamente
3. **Rede**: Todos os containers estão na mesma rede Docker
4. **Health Checks**: PostgreSQL e MongoDB têm verificações de saúde
5. **Dependências**: O backend aguarda os bancos estarem prontos

## 🔗 URLs de Acesso

Após iniciar os containers:

- **Aplicação Frontend**: http://localhost:5175
- **API Backend**: http://localhost:3003
- **Documentação da API**: http://localhost:3003/api-docs
- **PostgreSQL**: localhost:5436
- **MongoDB**: localhost:27020