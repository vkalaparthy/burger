# burger
Create your own burgers and eat them too...
This is a burger logger with MySQL, Node, Express, Handlebars and handmade ORM. used MVC design pattern to break the application into 3 parts.

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [How to Use](#usage)
* [Application Demo](#application-demo)
* [Contact](#contact)

## General Info
A fun application that runs in a browser or mobile to create and devour the burgers of your choice.

## Technologies
* MySQL
* Node.js
* Express
* Handlebars
* custome ORM
* MVC Design Pattern

## Installation
This application is deployed at [Heroku](https://burgerstodevour.herokuapp.com/). For this application, schema.sql & seed.sql is provided to explain the schema and table used.  Anyone can clone this application from GitHub and install all the necessary packages from npm, as provided in package.json

## How to Use
Create the database and tables and fill in the rows, schema.sql and seed.sql have been provided. Install the required mysql, express & express-handlebars NPM packages. In connection.js file, enter your password to your database. In the terminal run the command "nodemon server.js". Open the application in user browser at localhost and provide the port number as specified in server.js file. 

When you run the application, based on the Table rows, you will see the screen with Burgers what are not yet eaten like this:

![screenshot1](./public/assets/img/Capture1.JPG)

If you click on the **Devour it!** button, the devoued Burgers move to the right side of the screen as shown here:

![screenshot1](./public/assets/img/Capture2.JPG)

## Application Demo

![burgerDemo](./public/assets/img/MVC-With-Yummy-Burgers!.gif)


## Contact
* Vani Kalaparthy
  * https://github.com/vkalaparthy
  * kalaparthy.vani@gmail.com
