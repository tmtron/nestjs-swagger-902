# NxSwagger

Repo to reproduce [902: Typescript Enum array raises CircularDependencyError](https://github.com/nestjs/swagger/issues/902)

## init nestjs swagger
* https://docs.nestjs.com/openapi/introduction

`npm install --save @nestjs/swagger swagger-ui-express`

## use nestjs swagger cli plugin
* https://docs.nestjs.com/openapi/cli-plugin#using-the-cli-plugin
* update `nest-cli.json`
```
{
  "compilerOptions": {
    "plugins": ["@nestjs/swagger/plugin"]
  }
```

## nest-cli vs. webpack
Note, that the issue does not occur in this repo (with nest-cli).  
It only occurs when we use webpack: 
see https://github.com/tmtron/nx-swagger

## example
example code from: https://github.com/nestjs/nest/tree/master/sample/11-swagger/src

## start
* start the server: `npm run start`
* open the swagger-ui: http://localhost:3000/api/
