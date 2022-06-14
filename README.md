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

## Collaborators
- VictorManduca <victor.manduca.rizo@gmail.com>
