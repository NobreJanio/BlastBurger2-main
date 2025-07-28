# Guia para Containers de Banco de Dados (Versão Simplificada)

Este arquivo contém instruções para gerenciar os containers PostgreSQL e MongoDB essenciais.

## Portas Configuradas

### Containers Existentes:
- **PostgreSQL Principal**: porta 5450
- **PostgreSQL Backend**: porta 5435
- **MongoDB Principal**: porta 27030
- **MongoDB Backend**: porta 27019

### Novos Containers (Essenciais):
- **PostgreSQL Novo**: porta 5460
- **MongoDB Novo**: porta 27040

## Como usar

### Iniciar os containers essenciais:
```bash
docker-compose -f docker-compose-databases-simple.yml up -d
```

### Parar os containers:
```bash
docker-compose -f docker-compose-databases-simple.yml down
```

### Ver logs:
```bash
docker-compose -f docker-compose-databases-simple.yml logs -f
```

### Conectar aos bancos:

#### PostgreSQL (porta 5460):
- **Host**: localhost
- **Porta**: 5460
- **Usuário**: postgres
- **Senha**: POSTGRES
- **Database**: blastburger_new

#### MongoDB (porta 27040):
- **Host**: localhost
- **Porta**: 27040
- **Database**: blastburger_new

## Strings de Conexão

### PostgreSQL:
```
postgresql://postgres:POSTGRES@localhost:5460/blastburger_new
```

### MongoDB:
```
mongodb://localhost:27040/blastburger_new
```

## Volumes

Os dados são persistidos nos volumes:
- `postgres_data_additional`: dados do PostgreSQL
- `mongodb_data_additional`: dados do MongoDB

## Rede

Os containers usam a rede `blastburger-databases-network` para comunicação interna.

## Interfaces de Administração (Opcional)

Se precisar de interfaces web para administrar os bancos, use:
```bash
docker-compose -f docker-compose-databases.yml up -d
```

Isso incluirá:
- **Adminer (PostgreSQL)**: http://localhost:9090
- **Mongo Express (MongoDB)**: http://localhost:9091