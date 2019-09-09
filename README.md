# spring-angular-starter project

Based off

`https://github.com/dsyer/spring-boot-angular`

## Additions

Angular HttpInterceptor and CORS configuration so that the angular app running on localhost:4200 can connect to the java spring api running on localhost:8080, for development.

This way you can serve the java spring app on localhost:8080 like so

`mvn spring-boot:run` from the root dir

and you can serve the angular app on localhost:4200 like so

`ng serve` from the src dir

Now, when you make changes to the angular app, the changes are reloaded and you can continue with the development cycle without having to restart the java spring app.



