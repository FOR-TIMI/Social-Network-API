# Social-Network-API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
API for a social network that uses a NoSQL database  to allow website to handle large amounts of unstructured data

## Table of Content
- [Purpose](#purpose)
- [Installation](#installation)
- [License](#license)
- [demo video link](https://bloggersintech.herokuapp.com/login)
- [Contributions](#contribution)

## Purpose
With this social network api,
- when you enter the command to invoke the application, your server is started and the Mongoose models are synced to the MongoDB database
- Application deletes a user's associated thoughts when the user is deleted.
- when you open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON
- when you test API POST, PUT, and DELETE routes in Insomnia, you are able to successfully create, update, and delete users and thoughts in my database
- when you test API POST and DELETE routes in Insomnia, you are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
To set up and utilise this project. Take the following steps.

Note: you must have mongoDb installed on your local machine to run this api. 
To install mongoDb, follow this installation guide <br>
[windows Installation](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514) | [mac Installation](https://www.geeksforgeeks.org/how-to-install-mongodb-on-macos/)

- Step 1: Clone this repository. you can do this by running ``` git clone https://github.com/FOR-TIMI/Social-Network-API.git``` in your terminal
- image.png
- Step 2: Install dependencies by running the ``` npm install ``` command in the command line
- Step 3: Open your code editor by running the command ``` code . ```
- step 4: Start the server by running ``` npm start ``` in the terminal


## Licenses
### MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Built With
- NodeJs
- ExpressJs
- MongoDB
- Mongoose

## Screenshot







## Video Demo Link
https://drive.google.com/file/d/10QTfcD69THOEslE7FeXGsrXj6E-9eeps/view

## Contribution
Made with ❤️ by Timi