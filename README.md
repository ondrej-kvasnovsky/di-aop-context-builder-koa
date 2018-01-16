# DI & AOP Context build - Koa

Example how DI AOP Context build can be used with Koa to create REST API.

More about the context builder is written [here](https://ondrej-kvasnovsky.gitbooks.io/nodejs-handbook/content/chapter1/dependency-injection-and-aop.html).

## Requirements

* npm
* mongodb

## Start REST API server

Start service and use the REST API endpoints to test functionality.

```
$ npm start
```

## REST API

Create new item in MongoDB.

```
curl -X "POST" "http://localhost:3000/items/mylogin?login=mylogin"
```

Obtain an item in MongoDB.

```
curl "http://localhost:3000/items/mylogin"
```

After you execute a REST API call, check the console to see output of AOP configuration. 
