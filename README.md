<h1 align="center">clean-setup</h1>

<p align="center">A CLI to bootstrap new projects</p>

## About
This project was created to bootstrap new projects using Node.js with:
- Typescript
- Express
- Docker
- Swagger
- Jest

## Installation & Usage
```bash
npm install -g clean-setup

clean-setup
# or
clean-setup --name projects-name
```

Once you run the created project, you can run `docker-compose up`  
Then the project will start on `localhost:8080`

### Running without docker
To run without docker you need to copy and paste the content on `.env.example` file in `.env`. Then, inside the created project:
```bash
npm install && npm run start

# or to run with Nodemon
npm install && npm run start:dev
```

### Routes
- Health checker (return status code 200):`localhost:8080/api/health-check`
- Swagger docs: `localhost:8080/api-docs`

### Tests
Once the project was created, you can simply run  
```bash
npm install && npm run test
```

## What the project created with this package contains
```bash
./docker-compose.yml
./src/main/routes/health-check-routes.ts
./src/main/config/env.ts
./src/main/config/swagger.ts
./src/main/config/app.ts
./src/main/config/routes.ts
./src/main/middlewares/no-cache.ts
./src/main/middlewares/index.ts
./src/main/factory/controllers/health-check-controller-factory.ts
./src/main/factory/controllers/index.ts
./src/main/factory/index.ts
./src/main/server.ts
./src/main/adapters/express-route-adapter.ts
./src/main/adapters/index.ts
./src/main/docs/paths/health-check-path.ts
./src/main/docs/paths/index.ts
./src/main/docs/path.ts
./src/main/docs/index.ts
./src/presentation/protocols/http.ts
./src/presentation/protocols/controller.ts
./src/presentation/protocols/index.ts
./src/presentation/controllers/health-check-controller.ts
./src/presentation/controllers/index.ts
./src/presentation/helpers/http-helper.ts
./src/presentation/helpers/index.ts
./nodemon.json
./.env.example
./.gitignore
./.editorconfig
./Dockerfile
./jest.config.js
./package.json
./.eslintrc.json
./tsconfig.json
./.dockerignore
./__tests__/health-check.spec.ts
```

## Collaborators
- VictorManduca <victor.manduca.rizo@gmail.com>
