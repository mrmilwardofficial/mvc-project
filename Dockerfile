# Use official Java runtime as a parent image
FROM eclipse-temurin:17-jdk

# Set the working directory
WORKDIR /app

# Copy Maven wrapper and project files
COPY . .

# Build the application
RUN ./mvnw clean install

# Run the application
CMD ["java", "-jar", "target/mvc-0.0.1-SNAPSHOT.jar"]
