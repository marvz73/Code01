# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Summary of set up ###

* Clone the [repository](https://ricxsar@bitbucket.org/ricxsar/poi.git)

* Install nodejs dependencies (modules)

```
#!nodejs

npm install
```

* Database configuration (config/dbmodel.js)

```
#!nodejs

var knex = require('knex')({
  client: 'mysql',
    connection: {
      host     : 'host',
      user     : 'user',
      password : 'pass',
      database : 'poi'
    }
});
```


### Migration ###
* Install knex

```
#!nodejs
npm install knex -g

```


* Migrate database

```
#!nodejs
 knex migrate:latest

```
* Migration Configuration (knexfile.js)

```
#!nodejs

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : 'host',
      user     : 'user',
      password : 'pass',
      database : 'poi'
    }
  }
};
```

### API ###

Please take a look on [socket.io documentation](http://socket.io/docs/)

*  Server Side File (config/socket.js)

```
#!nodejs

socket.on('getBootstrap', function (callback) {
       ...	
 });
```


* Client Side File (public/socket.js)

```
#!nodejs

socket.emit('getBootstrap', function(data){
    ...
})
```

### If Redis server is unavailable, comment the following files ###

* bin/www

```
#!nodejs

io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,       // the same middleware you registrer in express
    key:          'connect.sid',       // the name of the cookie where express/connect stores its session_id
    secret:       'mySecretKey',    // the session_secret to parse the cookie
    store:        app.locals.store,        // we NEED to use a sessionstore. no memorystore please
    success:      onAuthorizeSuccess,  // *optional* callback on success - read more below
    fail:         onAuthorizeFail,     // *optional* callback on fail/error - read more below
  }));
```

* app.js

```
#!nodejs

app.locals.store = new RedisStore(
  {
    host: 'host',
    port: 'port',
    pass: 'pass'
  }
);

...

    store: app.locals.store,

```

### Locales ###

Please take a look on [nodejs i18n documentation](https://github.com/mashpie/i18n-node)


* Add your custom locales to ```./locales``` folder location

* Usage

```
#!nodejs

__('hello', 'hello');

```


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact