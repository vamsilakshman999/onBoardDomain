FROM eclipse-temurin:17-jre as builder
WORKDIR /app
COPY . .
RUN ./mvnw -q -pl gym-fees-web -am package

FROM gcr.io/distroless/java17
WORKDIR /app
COPY --from=builder /app/gym-fees-web/target/gym-fees-web-*.jar app.jar
ENTRYPOINT ["/app/app.jar"]
