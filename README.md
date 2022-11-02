# Social-Network-API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
API for a social network that uses a NoSQL database  to allow website to handle large amounts of unstructured data

## Table of Content
- [Purpose](#purpose)
- [Installation](#installation)
- Routes
  - [Users](#users)
  - [Friends](#friends)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [License](#license)
- [demo video link](https://drive.google.com/file/d/10QTfcD69THOEslE7FeXGsrXj6E-9eeps/view)
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
- ![image](https://user-images.githubusercontent.com/104241247/199159397-7d3b620c-31fa-4ca5-b4ae-ade3f6e2918a.png)
- Step 2: Install dependencies by running the ``` npm install ``` command in the command line
- Step 3: Open your code editor by running the command ``` code . ```
- step 4: Start the server by running ``` npm start ``` in the terminal
- step 5: - Open any application that simplifies the interaction and design of HTTP-based APIs like [insomnia](https://insomnia.rest/download), [postman](https://www.postman.com/) etc.
- step 6: Create, read, update, and delete Users, thoughts, and reactions using these urls:

### Users: 

| HTTP Method 	| Route                                   	| Description                                                                                                                                                         	|
|-------------	|-----------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| GET         	| http://localhost:3001/api/users         	| To `GET` all users                                                                                                                                                  	|
| GET         	| http://localhost:3001/api/users/:userId 	| To `GET` a single user with that `userId`                                                                                                                           	|
| POST        	| http://localhost:3001/api/users         	| To create a new user. <br> sample Data:  <pre>{  <br>"username": "lernantino",  <br>"email": "lernantino@gmail.com"  <br>}</pre>                                    	|
| PUT         	| http://localhost:3001/api/users/:userId 	| To update an existing user `userId` details. <br> sample Data:  <pre>{  <br>"username": "lernantinoUpdate",  <br>"email": "lernantinoUpdate@gmail.com"  <br>}</pre> 	|
| DELETE      	| http://localhost:3001/api/users/:userId 	| To delete an existing user `userId`  and all thoughts related to the user `userId`                                                                                                                                	|                                                                                                                                	|


### Friends:

| HTTP Method 	|                           Route                           	| Description                                                                                                                                                         	|
|:-----------:	|:---------------------------------------------------------:	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|     POST    	| http://localhost:3001/api/users/:userId/friends/:friendId 	| To add a friend `friendId` to a user `userId`                                                                                                                       	|
|    DELETE   	| http://localhost:3001/api/users/:userId/friends/:friendId 	| To remove a friend `friendId` from a user `userId`  friend list                                                                                                     	|

### Thoughts:

| HTTP Method 	| Route                                         	| Description                                                                                                                                                                                                                                                     	|
|:-----------:	|-----------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|     GET     	| http://localhost:3001/api/thoughts            	| To get all thoughts                                                                                                                                                                                                                                             	|
|     GET     	| http://localhost:3001/api/thoughts/:thoughtId 	| To get a single thought by its _id `thoughtId`                                                                                                                                                                                                                  	|
|     POST    	| http://localhost:3001/api/thoughts            	| Creates new thought and push the created thought's _id to the associated user's thoughts array field). <br>Sample Data:  <pre>  { <br>  "thought_text": "here's a cool thought", <br>  "username": "testUser",<br>  "userId" : "5dfghsgfhghjk435"  <br>} </pre> 	|
|     PUT     	| http://localhost:3001/api/thoughts/:thoughtId 	| To update a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|
|    DELETE   	| http://localhost:3001/api/thoughts/:thoughtId 	| To delete a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|

### Reactions:
| HTTP Method 	| Route                                                                               	| Description                                                             	|
|-------------	|-------------------------------------------------------------------------------------	|-------------------------------------------------------------------------	|
| POST        	| http://localhost:3001/api/thoughts/:thoughtId/reactions                             	| To create a reaction stored in a single thought's reactions array field 	|
| DELETE      	| http://localhost:3001/api/thoughts/:thoughtId/reactions?reactionId=6fdsgsgnhfdmhfdf 	| To pull and remove a reaction by the reaction's `reactionId` value      	|

## License
### MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Built With
- NodeJs
- ExpressJs
- MongoDB
- Mongoose

## Screenshots
- ![image](https://user-images.githubusercontent.com/104241247/199159120-5007ec83-8d0d-435e-b69d-02c8ad9ad073.png)
- ![image](https://user-images.githubusercontent.com/104241247/199159217-17d95199-cafc-44a3-86d0-1331cdd37340.png)






## Video Demo Link
https://drive.google.com/file/d/10QTfcD69THOEslE7FeXGsrXj6E-9eeps/view

## Contribution
Made with ❤️ by Timi
