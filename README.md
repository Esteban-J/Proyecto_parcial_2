# Proyecto del Segundo Parcial

Owr project is a website called ¨Automax¨ which offers car rental services. The website consist of 4 webpages containing diverse information like contact information and the cars available for rent.

## Getting Started

To get the source code files from this project in your local machine you can click the following link https://github.com/Esteban-J/Proyecto_parcial_2/archive/refs/heads/main.zip

### Prerequisites

To be able to run and test the code above you'll need to have NodeJs already install in your system as this code is interpreted by the Node run-time enviorement. Or alternatibly, you may install docker to run an image of the app in your system.

### Installing

#### Installing Node

For Linux (using apt package manager, for Ubuntu/Debian):
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

For macOS (using Homebrew):
```
brew update
brew install node
```

For Windows (using Chocolatey):
```
choco install nodejs
```

#### Intalling Docker

Follow this tutorial to install docker in your system:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es, 

## Running the tests

### Whit Node


To run a test of the website you should execute the following command in a terminal:

```
node app.js
```
From this moment you can enter localhost:8888 and start browsing the project.

### With the docker image

Having correctly installed docker you'll need to download the app's docker image by executing the following commands on a terminal:
```
docker pull ericktati11/test1:v1
```
and the project is executed as follows:
```
docker run -p 8888:8888 ericktati11/test1:v1
```
From that moment you can enter localhost:8888 and start browsing the project.

**Link of the Docker Image:** https://hub.docker.com/repository/docker/ericktati11/prueba_1/general

## Built With

* Nodejs
* JavaSctipt
* HTML
* css

## Authors

* **Erick Fernando Nevarez Ávila** - *contact info page and about page, stylizing* -
* **Alan Fernando Gallo Guerrero** - *stylizing, car images, car info page* -
* **Gerardo Esteban Jurado Carrera** - *landing page, server extra settings, contact submit form, stylizing* -


## Acknowledgments

* Luis Antonio Ramírez Martínez for providing the server source code.


