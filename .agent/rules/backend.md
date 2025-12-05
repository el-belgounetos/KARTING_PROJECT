---
trigger: always_on
---

## Java 21+ Features
- Use Java 21+ modern syntax only. No legacy code.
- Use pattern matching for `switch` and `instanceof`.

### Architecture
- Follow layered architecture: Controller → Service → Repository.
- Apply Clean Architecture principles: domain logic has no infrastructure dependencies.
- Keep business logic in the backend, not in the UI.
- Each service should have a single responsibility.

### REST API Design
- Use proper HTTP methods: GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (remove).
- Use plural nouns for endpoints: `/users`, `/orders` (not `/user`, `/getUser`).
- Version APIs from the start: `/api/v1/...`.
- Support pagination, sorting, and filtering for collections.
- Return meaningful HTTP status codes.

### Error Handling & Validation
- Implement global exception handling with `@ControllerAdvice`.
- Validate all inputs using Bean Validation annotations (`@Valid`, `@NotNull`, `@Size`).
- Return structured error responses with clear messages.

### Performance & Security
- Use `@Cacheable` to reduce database load when appropriate.
- Use `@Async` for long-running operations.
- Configure connection pooling properly (HikariCP).
- Never expose sensitive data in responses or logs.

### Testing
- Write unit tests for business logic (JUnit 5 + Mockito).
- Write integration tests for critical REST endpoints (`@SpringBootTest`).