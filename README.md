

# NxextDemo

This is a simple demo application using Angular and Stencil. Angular uses the Stencil generated components to render this.


To run this completely, some steps are needed: 

You need to start a postgres with docker (optional):
> docker-compose up (Terminal 1)

and run (optional)

> yarn start (Terminal 2)

to start the NestJS backend. (If the backend isn't there, a static list will be used.)

To run the application, start the build of the Stencil library:

> nx build core --watch (Terminal 3)

and start the application:

> nx serve angular-client (Terminal 4)
