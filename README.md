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
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── nodemon.json
├── package.json
├── src
│   ├── main
│   │   ├── adapters
│   │   │   ├── express-route-adapter.ts
│   │   │   └── index.ts
│   │   ├── config
│   │   │   ├── app.ts
│   │   │   ├── env.ts
│   │   │   ├── routes.ts
│   │   │   └── swagger.ts
│   │   ├── docs
│   │   │   ├── index.ts
│   │   │   ├── paths
│   │   │   │   ├── health-check-path.ts
│   │   │   │   └── index.ts
│   │   │   └── path.ts
│   │   ├── factory
│   │   │   ├── controllers
│   │   │   │   ├── health-check-controller-factory.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── middlewares
│   │   │   ├── index.ts
│   │   │   └── no-cache.ts
│   │   ├── routes
│   │   │   └── health-check-routes.ts
│   │   └── server.ts
│   └── presentation
│       ├── controllers
│       │   ├── health-check-controller.ts
│       │   └── index.ts
│       ├── helpers
│       │   ├── http-helper.ts
│       │   └── index.ts
│       └── protocols
│           ├── controller.ts
│           ├── http.ts
│           └── index.ts
├── __tests__
│   └── health-check.spec.ts
└── tsconfig.json

15 directories, 31 files
```

## Collaborators
- VictorManduca <victor.manduca.rizo@gmail.com>
