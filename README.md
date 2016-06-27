Users
=====

Este es el servidor de usuarios y motor de la aplicación de VWL.

***
* [Componentes](#componentes)
* [Arquitectura](#arquitectura)
* [Plataformas](#plataformas)
  * [Windows](#windows)
  * [Mac OS X](#mac-os-x)
  * [Ubuntu Linux](#ubuntu-linux)
* [Uso](#uso)
* [Aclaraciones](#aclaraciones)

***

## Componentes

Los componentes necesarios son:

- Node.JS versión 4.4.5
- NPM versión 3.3.6
- MongoDB versión 2.6.4

## Arquitectura

MVC, basado en NodeJS y Express.
```
users
  bin
    www
  helper
    index.js
  middleware
    passport.js
  models
    index.js
  public
    assets
    dist
    font-awesome
    fonts
    img
    javascripts
    less
    stylesheets
  routes
    index.js
    users.js
  serial-socket
    index.js
    socketioPlc.js
    tcp.js
  views
    admin.jade
    dashes.jade
    error.jade
    flots.jade
    index.jade
    layout.jade
    layoutAdmin.jade
    login.jade
    oleohidraulica.jade
    panelcontrol.jade
    refrigeracion.jade
    userTable.jade
  app.js
  package.json
  README.md
```

## Plataformas

#### Windows
```
# Win
# Proyecto VWL Modo Servidor
  git clone https://github.com/virtualweblab/users.git
# Instalacion de paquetes
  npm install
# Correr aplicacion
  node app.js
```

#### Mac OS X

Para iniciar MongoDB, abrir otra terminar y ejecutar el siguiente comando:
```
mongod
```
Clonar el repositorio y correr la aplicación.
```
# Mac
# Proyecto VWL Modo Servidor
  git clone https://github.com/virtualweblab/users.git
# Instalacion de paquetes
  npm install
# Correr aplicacion
  node app.js
```
#### Ubuntu Linux
Clonar el repositorio y correr la aplicación.
```
# Ubuntu
# Proyecto VWL Modo Servidor
  git clone https://github.com/virtualweblab/users.git
# Instalacion de paquetes
  npm install
# Correr aplicacion
  node app.js
```
***Nota:*** En Ubuntu Linux no es necesario iniciar MongoDB.

## Uso

Primero debes registrate en la siguiente URL:

[Registro](http://190.15.141.74:8080/register)
[Autenticacion](http://190.15.141.74:8080/login)

Uso de la plataforma:

[Panel de Control](http://190.15.141.74:8080/panelcontrol)

## Aclaraciones


- Para cualquier error por favor consultar o informar a: [Issues](https://github.com/virtualweblab/users/issues)
