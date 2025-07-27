# BlastBurger Application

## 🚀 Início Rápido

Para iniciar a aplicação completa com bancos de dados Docker:

```powershell
.\start-app.ps1
```

## 📋 Configuração Manual

### 1. Bancos de Dados (Docker)

```bash
cd backend
docker-compose up -d
```

### 2. Backend (Porta 3002)

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend (Porta 5174)

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Configurações

### Portas Utilizadas:
- **Frontend**: http://localhost:5174
- **Backend**: http://localhost:3002
- **PostgreSQL**: localhost:5435
- **MongoDB**: localhost:27019

### Bancos de Dados:
- **PostgreSQL**: `blastburger` database
- **MongoDB**: `blastburger` database

### Volumes Docker:
- `postgres_data`: Dados persistentes do PostgreSQL
- `mongodb_data`: Dados persistentes do MongoDB

## 🛑 Parar a Aplicação

Para parar os containers Docker:

```bash
cd backend
docker-compose down
```

## 📊 Monitoramento

Verificar status dos containers:

```bash
docker ps
```

Logs dos containers:

```bash
docker logs blastburger-postgres
docker logs blastburger-mongodb
```