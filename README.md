# Lightweight URL Shortener
Simple `Link` CRUD API where you can fetch all links, redirect, update and delete links.

There is a admin panel build with React that allows uses the API.

## Use case
For example, if I want to share my CV, I can have a *profesional* link such as [link.bogach.es/cv](https://link.bogach.es/cv)

## Demo
- API: [link.bogach.es](https://link.bogach.es)
- Admin panel: [link.admin.bogach.es](https://link.admin.bogach.es)
- Swagger documentation: [link.bogach.es/swagger](https://link.bogach.es/swagger)
- Swagger json file: [link.bogach.es/swagger.json](https://link.bogach.es/swagger.json)

## Run
- `make build` to build containers
- `make run` to run containers with docker-compose
- You should edit `docker-compose.yml` to specify the ports you need because every container uses `expose` by default.

---

**NOTE:** The default configuration is a development environment. Use `client/Dockerfile.production` to a production environment. Bear in mind that, in order to do this, the ports of the `react-app` image of the `docker-compose.yml` should be `80:80`.
