#!/usr/bin/env pwsh

Write-Host "🍔 Iniciando BlastBurger Application..." -ForegroundColor Green

# Verificar se o Docker está rodando
Write-Host "🐳 Verificando Docker..." -ForegroundColor Yellow
try {
    docker --version | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker não encontrado"
    }
} catch {
    Write-Host "❌ Docker não está instalado ou não está rodando!" -ForegroundColor Red
    Write-Host "Por favor, instale e inicie o Docker Desktop primeiro." -ForegroundColor Red
    exit 1
}

# Navegar para o diretório do backend
Set-Location "backend"

Write-Host "🗄️ Iniciando bancos de dados..." -ForegroundColor Yellow
docker-compose up -d

# Aguardar os containers iniciarem
Write-Host "⏳ Aguardando bancos de dados iniciarem..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Verificar se os containers estão rodando
$postgresRunning = docker ps --filter "name=blastburger-postgres" --filter "status=running" -q
$mongoRunning = docker ps --filter "name=blastburger-mongodb" --filter "status=running" -q

if (-not $postgresRunning) {
    Write-Host "❌ PostgreSQL não está rodando!" -ForegroundColor Red
    exit 1
}

if (-not $mongoRunning) {
    Write-Host "❌ MongoDB não está rodando!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Bancos de dados iniciados com sucesso!" -ForegroundColor Green
Write-Host "📊 PostgreSQL: localhost:5435" -ForegroundColor Cyan
Write-Host "📊 MongoDB: localhost:27019" -ForegroundColor Cyan

# Instalar dependências do backend se necessário
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências do backend..." -ForegroundColor Yellow
    npm install
}

# Iniciar o backend em background
Write-Host "🚀 Iniciando servidor backend na porta 3002..." -ForegroundColor Yellow
Start-Process -FilePath "npm" -ArgumentList "run", "dev" -WindowStyle Hidden

# Navegar para o frontend
Set-Location "../frontend"

# Instalar dependências do frontend se necessário
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências do frontend..." -ForegroundColor Yellow
    npm install
}

# Aguardar um pouco para o backend iniciar
Start-Sleep -Seconds 5

# Iniciar o frontend
Write-Host "🎨 Iniciando frontend na porta 5174..." -ForegroundColor Yellow
Write-Host "🌐 A aplicação será aberta automaticamente no navegador!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "📱 URLs da aplicação:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:5174" -ForegroundColor White
Write-Host "   Backend:  http://localhost:3002" -ForegroundColor White
Write-Host "   API Docs: http://localhost:3002/api-docs" -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "🛑 Para parar a aplicação, pressione Ctrl+C" -ForegroundColor Yellow

npm run dev