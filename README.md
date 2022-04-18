# task-server-sample

Simple Task Server Sample

## Description

Apollo Server(fastify) + GraphQL(Nexus) + Prisma

## Prerequisites

This program use postgreSQL. Please get ready to some postgreSQL env.

## Getting Started

### Installing

* Install pkg

```cmd
npm i
```

* Make `.env` file, and write connection string on your env

```
touch .env
```

(see) https://pris.ly/d/connection-strings

* Run prisma migrate, seeds (below command create db if not exists)

```
npx prisma migrate dev
npx prisma db seed
```

* Run codegen

```
npx prisma generate
```

### Executing program

```
npm run start
```

open some browser

http://localhost:4000/graphql