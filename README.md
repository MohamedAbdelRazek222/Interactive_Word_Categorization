# Interactive_Word_Categorization
# Description
In this project, we have created an interactive activity using React.js, node.js, and Express.js that helps students practice categorizing a set of words according to their part of speech. Words can be categorized into different parts of speech, such as nouns, verbs, adjectives, and more.
# Technologies Used
React.js: Used for building the front-end user interface and components for the interactive activity.
Node.js: Used for creating the Express.js server to handle API requests and responses.
Express.js: Used as the backend framework to handle server-side logic and endpoints.
# Project Structure
1-`clientsIDE`: Contains the React.js front-end code.
src: Holds all React components and main application files.
components: Contains specific components for the interactive activity : PracticeScreen and RankScreen.
main.js: The main entry point for the React application.
index.js: Responsible for rendering the React app into the DOM.

2-`serverSide`: Contains the nodejs,mongodb and  Express.js back-end code.
server: Holds all server connections.
DB : testData.jsonJSON file containing testing data for the activity and connection of mongodb.
app.js: The main entry point for the Express application.
controllers: Contains the controllers for the "words" and "rank" endpoints.
Routes: Contains the Routes for the "words" and "rank" .
utilities: Contains the functions which calulate the  generateRandomWords and calculateRank
config.end: conatins NODE_ENV=development , PORT=4000 ,DB =mongodb ://localhost/NameOfDataBase

# images
correct
![correct](https://github.com/MohamedAbdelRazek222/Interactive_Word_Categorization/assets/118555438/7de7c315-ffc4-4711-9115-a820745b5d03)
incorrect
![incorrect](https://github.com/MohamedAbdelRazek222/Interactive_Word_Categorization/assets/118555438/08edd9c9-0926-4e24-9aa4-ddd7b7eda28e)
try again
![tryAgain](https://github.com/MohamedAbdelRazek222/Interactive_Word_Categorization/assets/118555438/4d8e3559-0da5-4ce2-9231-ad5517183380)

