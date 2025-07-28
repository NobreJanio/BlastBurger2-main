# Script para gerenciar containers de banco de dados
# Uso: .\database-manager.ps1 [start|stop|restart|logs|status]

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("start", "stop", "restart", "logs", "status", "help")]
    [string]$Action = "help"
)

$ComposeFile = "docker-compose-databases-simple.yml"

function Show-Help {
    Write-Host "=== Gerenciador de Containers de Banco de Dados ===" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Uso: .\database-manager.ps1 [acao]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ações disponíveis:" -ForegroundColor Green
    Write-Host "  start    - Inicia os containers de banco de dados"
    Write-Host "  stop     - Para os containers de banco de dados"
    Write-Host "  restart  - Reinicia os containers de banco de dados"
    Write-Host "  logs     - Mostra os logs dos containers"
    Write-Host "  status   - Mostra o status dos containers"
    Write-Host "  help     - Mostra esta ajuda"
    Write-Host ""
    Write-Host "Containers incluídos:" -ForegroundColor Magenta
    Write-Host "  - PostgreSQL (porta 5460)"
    Write-Host "  - MongoDB (porta 27040)"
    Write-Host ""
}

function Start-Databases {
    Write-Host "🚀 Iniciando containers de banco de dados..." -ForegroundColor Green
    docker-compose -f $ComposeFile up -d
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Containers iniciados com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "❌ Erro ao iniciar containers!" -ForegroundColor Red
    }
}

function Stop-Databases {
    Write-Host "🛑 Parando containers de banco de dados..." -ForegroundColor Yellow
    docker-compose -f $ComposeFile down
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Containers parados com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "❌ Erro ao parar containers!" -ForegroundColor Red
    }
}

function Restart-Databases {
    Write-Host "🔄 Reiniciando containers de banco de dados..." -ForegroundColor Blue
    docker-compose -f $ComposeFile restart
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Containers reiniciados com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "❌ Erro ao reiniciar containers!" -ForegroundColor Red
    }
}

function Show-Logs {
    Write-Host "📋 Mostrando logs dos containers..." -ForegroundColor Blue
    docker-compose -f $ComposeFile logs -f
}

function Show-Status {
    Write-Host "📊 Status dos containers:" -ForegroundColor Blue
    docker-compose -f $ComposeFile ps
}

# Verificar se Docker está rodando
try {
    docker version | Out-Null
} catch {
    Write-Host "❌ Docker não está rodando ou não está instalado!" -ForegroundColor Red
    exit 1
}

# Verificar se o arquivo docker-compose existe
if (-not (Test-Path $ComposeFile)) {
    Write-Host "❌ Arquivo $ComposeFile não encontrado!" -ForegroundColor Red
    exit 1
}

# Executar ação
switch ($Action) {
    "start" { Start-Databases }
    "stop" { Stop-Databases }
    "restart" { Restart-Databases }
    "logs" { Show-Logs }
    "status" { Show-Status }
    "help" { Show-Help }
    default { Show-Help }
}