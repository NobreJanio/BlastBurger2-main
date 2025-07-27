# BlastBurger Docker Management Script for Windows
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("start", "stop", "restart", "logs", "build", "clean", "status")]
    [string]$Action
)

Write-Host "🍔 BlastBurger Docker Management" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Yellow

switch ($Action) {
    "start" {
        Write-Host "🚀 Starting all services..." -ForegroundColor Green
        docker-compose up -d
        Write-Host "✅ Services started!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📊 Access URLs:" -ForegroundColor Cyan
        Write-Host "   Frontend: http://localhost:5175" -ForegroundColor White
        Write-Host "   Backend:  http://localhost:3003" -ForegroundColor White
        Write-Host "   API Docs: http://localhost:3003/api-docs" -ForegroundColor White
        Write-Host "   PostgreSQL: localhost:5436" -ForegroundColor White
        Write-Host "   MongoDB: localhost:27020" -ForegroundColor White
    }
    "stop" {
        Write-Host "🛑 Stopping all services..." -ForegroundColor Red
        docker-compose down
        Write-Host "✅ Services stopped!" -ForegroundColor Green
    }
    "restart" {
        Write-Host "🔄 Restarting all services..." -ForegroundColor Yellow
        docker-compose down
        docker-compose up -d
        Write-Host "✅ Services restarted!" -ForegroundColor Green
    }
    "logs" {
        Write-Host "📋 Showing logs..." -ForegroundColor Cyan
        docker-compose logs -f
    }
    "build" {
        Write-Host "🔨 Building all services..." -ForegroundColor Blue
        docker-compose build
        Write-Host "✅ Build completed!" -ForegroundColor Green
    }
    "clean" {
        Write-Host "🧹 Cleaning up..." -ForegroundColor Magenta
        docker-compose down -v
        docker system prune -f
        Write-Host "✅ Cleanup completed!" -ForegroundColor Green
    }
    "status" {
        Write-Host "📊 Service status:" -ForegroundColor Cyan
        docker-compose ps
    }
}

Write-Host ""
Write-Host "Usage examples:" -ForegroundColor Yellow
Write-Host "  .\docker-manager.ps1 start   - Start all services" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 stop    - Stop all services" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 restart - Restart all services" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 logs    - Show service logs" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 build   - Build all services" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 clean   - Clean up containers and volumes" -ForegroundColor Gray
Write-Host "  .\docker-manager.ps1 status  - Show service status" -ForegroundColor Gray