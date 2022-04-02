# task-server-sample

Simple Task Server Sample

Composed by Apollo Server(fastify) + GraphQL(Nexus?) + Prisma

## Description

use postgreSQL DB

## Getting Started

### Installing

* install pkg

```cmd
npm i
```

* make `.env` file, and write connection string on your env

```
touch .env
```

(see) https://pris.ly/d/connection-strings

* run prisma migrate, seeds

```
npx prisma migrate dev
npx prisma db seed
```

### Executing program

```
npm run start
```
