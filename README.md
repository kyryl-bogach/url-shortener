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
`make build` to build containers
`make run` to run containers with docker-compose

---

**NOTE:** This is a development configuration where the react app is being served by a separate container. We would also want to create a production version where we build a static version of the react site and serve it with something like nginx.
