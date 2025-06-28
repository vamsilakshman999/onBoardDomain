# Gym Fees Backend

Simple Spring Boot multi-module project with basic member CRUD example.

The repository omits the Maven wrapper JAR to avoid binary files in version control.
Generate it before building:
```
mvn -N io.takari:maven:wrapper
```

## Modules
- **gym-fees-domain** – JPA entities and domain model
- **gym-fees-application** – service interfaces
- **gym-fees-infrastructure** – Spring Data JPA implementation
- **gym-fees-web** – REST controllers and application entry point

## Running with H2
```
./mvnw spring-boot:run -pl gym-fees-web
```
Swagger UI is available at `http://localhost:8080/swagger-ui.html` and the H2 console at `/h2-console`.

## PostgreSQL Profile
Create a database and run with:
```
SPRING_PROFILES_ACTIVE=pgsql ./mvnw spring-boot:run -pl gym-fees-web
```
Flyway will apply migrations from `gym-fees-infrastructure/src/main/resources/db/migration`.

## Docker Compose (Dev)
```
docker compose -f docker-compose-dev.yml up
```
