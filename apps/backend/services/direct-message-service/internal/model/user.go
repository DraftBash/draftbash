package model

// User represents the user entity in the database
type User struct {
    ID    int
    Name  string
    Email string
	Password string
}