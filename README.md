# AngularGitApp

Note - Before starting you should have **node.js** environment and **mongoDB** database installed on your system.

Generate Your Github Token by following the steps -  
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## Backend Installation
1. Install the dependencies and start the server.

    ```sh
    cd Backend
    npm install
    ```
2. Configure the environment file by renaming 
.env.example file into .env
Open the .env file and configure your mongodb environment variables and github token.

3. Start the backend server
    ```sh
    node server.js
    ```
    
## Frontend Installation
1. Install the dependencies and start the server.

    ```sh
    cd Frontend
    npm install
    ```
2. Configure the environment. src/environements/environment.ts file
    The environment file contains the backend url so if you have changed the server port then you have to give same port in baseUrl 

3. Start the frontend server
    ```sh
    ng serve
    ```
