# NxSwagger

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

## example
example code from: https://github.com/nestjs/nest/tree/master/sample/11-swagger/src

## start
* start the server: `npm run start`
* open the swagger-ui: http://localhost:3000/api/
