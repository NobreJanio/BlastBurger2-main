#!/bin/bash

# BlastBurger Docker Management Script

echo "🍔 BlastBurger Docker Management"
echo "================================"

case "$1" in
  "start")
    echo "🚀 Starting all services..."
    docker-compose up -d
    echo "✅ Services started!"
    echo ""
    echo "📊 Access URLs:"
    echo "   Frontend: http://localhost:5175"
    echo "   Backend:  http://localhost:3003"
    echo "   API Docs: http://localhost:3003/api-docs"
    echo "   PostgreSQL: localhost:5436"
    echo "   MongoDB: localhost:27020"
    ;;
  "stop")
    echo "🛑 Stopping all services..."
    docker-compose down
    echo "✅ Services stopped!"
    ;;
  "restart")
    echo "🔄 Restarting all services..."
    docker-compose down
    docker-compose up -d
    echo "✅ Services restarted!"
    ;;
  "logs")
    echo "📋 Showing logs..."
    docker-compose logs -f
    ;;
  "build")
    echo "🔨 Building all services..."
    docker-compose build
    echo "✅ Build completed!"
    ;;
  "clean")
    echo "🧹 Cleaning up..."
    docker-compose down -v
    docker system prune -f
    echo "✅ Cleanup completed!"
    ;;
  "status")
    echo "📊 Service status:"
    docker-compose ps
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|logs|build|clean|status}"
    echo ""
    echo "Commands:"
    echo "  start   - Start all services"
    echo "  stop    - Stop all services"
    echo "  restart - Restart all services"
    echo "  logs    - Show service logs"
    echo "  build   - Build all services"
    echo "  clean   - Clean up containers and volumes"
    echo "  status  - Show service status"
    exit 1
    ;;
esac