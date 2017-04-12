```
Usage
    - sudo bower install
Minify
    - grunt minify

Local Server
    - grunt serve

Testing
    - sudo npm install -g grunt-cli
    - sudo npm install
    - sudo bower install
    - grunt serve

Usage
    - sudo npm install

Local Server
    -node www
    -DEBUG=express:* node www.js
```

# Volunteer-Service-Master
Ronald McDonald House Volunteer Service Project Red0x

![Bombarding](http://orig11.deviantart.net/8b6e/f/2015/242/a/d/rickmortyfalling_by_kcday-d97tysp.jpg)

Clone or download repository: https://github.com/Bombarding/volunteer-service-master.git


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation


```
> *** Front End ***

> Install Node.js: sudo npm install

Download | Install MongoDB:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
brew update
curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz
tar -zxvf mongodb-osx-x86_64-3.4.2.tgz
mkdir -p mongodb
cp -R -n mongodb-osx-x86_64-3.4.2/ mongodb
mkdir -p /mongodb/data/db

> Run:
sudo ./mongod (server)
sudo ./mongo (client) (in new terminal)

> Find Previous Repository Here: https://github.com/chrismcdonald0111/volunteer-service

> Install Node.js

> Install Packages: sudo npm install

> Install bower: sudo npm install -g bower

> Grunt install: npm install -g grunt-cli

> Launch localhost@8000: grunt serve

> *** Back End ***

> Enter nodejs/com.ronaldmcdonaldhouse/ directory and run: sudo npm install

> Enter Server Directory and run:
    - node www (For Standard Web Server)
    - DEBUG=express:* node www.js (For Debug Web Server)

Server should be running on port 3000
```

Install Calendar
```
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
bower install --save material-calendar
npm install --save angular-material-calendar
npm install angular-i18n
bower install angular-i18n
```

Node.js Confirmation
```
Node.js was installed at

   /usr/local/bin/node

npm was installed at

   /usr/local/bin/npm

Make sure that /usr/local/bin is in your $PATH.
```

## Usage
```
Front End:
HTML5 (Markup), CSS3 (Sytling), Javascript (Language), JQuery (Dependancy)
Bootstrap (Lib), AngularJS (Routing Framework), Grunt (Server), Bower (Dependancy Install)
NPM (Node pkg Manager)

Back End:
Node.js (Language for API), Express (Node.js Lib), Mongoose (ORM to database), NPM (Node pkg Manager)
```

## Contributing
```
> To get started...

- 🍴 Fork this repo [here](https://github.com/Bombarding/readme#fork-destination-box)
- 🔨 Hack away
- 😊 Add yourself as a contributor
- 🔧 Make a pull request [here](https://github.com/Bombarding/readme/compare)

> Or just create an issue - any little bit of help counts! 😊

- 😯 Create an issue [here](https://github.com/Bombarding/readme/issues)!
```

## Credits
```
Author Beta Phase:
- Alex Steel (https://github.com/Bombarding)
```

## ToDo
```
Further implementations that need to be tackled include:
•	Automatic email confirmation sent to client and volunteer when an appointment is made
    •	Email Works, In Process of Debugging *

```

## License
[![Github Issues](http://githubbadges.herokuapp.com/Bombarding/readme/issues.svg?style=flat-square)](https://github.com/Bombarding/readme/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/Bombarding/readme/pulls.svg?style=flat-square)](https://github.com/Bombarding/readme/pulls) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
