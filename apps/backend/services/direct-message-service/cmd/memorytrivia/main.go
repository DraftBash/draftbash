package main

import (
	"log"
	"net/http"

	"github.com/DraftBash/draftbash/apps/backend/services/direct-message-service/internal/api/router"
	"github.com/DraftBash/draftbash/apps/backend/services/direct-message-service/internal/database"
	"github.com/go-chi/chi"
	"github.com/joho/godotenv"
)
func main() {
    if err := godotenv.Load(); err != nil {
        log.Fatalf("Error loading .env file: %v", err)
    }
	if err := database.RunMigrations(); err != nil {
		log.Fatalf("Failed to run migrations: %v", err)
	}
    if err := database.InitializePostgresDB(); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	userRouter := router.NewUserRouter()

	r := chi.NewRouter()

	r.Mount("/api/v1", userRouter)

	log.Println("Starting server on port 8080")
    if err := http.ListenAndServe(":8080", r); err != nil {
        log.Fatalf("could not start server: %v", err)
    }
}