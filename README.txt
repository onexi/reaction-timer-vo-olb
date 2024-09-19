[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/e__G6ZpK)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15809432)
Starter Code for Reaction Timer 
Run npm install to install all dependencies 
The above uses package.json to build the project
Note .gitignore is set to ignore node_modules

--------------------------------------------------

Usage: Please refer to the Instructions on the page
How the system works:
- First, the startButton detects clicking, after which the startButton will become unavailable, the stopButton will become available to click, and a random delay will start. The state of the stopButton will change after the delay
- Second, the stopButton detects clicking after it becomes available. The detected click will either be regarded as penalty (if it is red) or stop the timer and fetch the data (if it is green).
- Third, the data including name, reactionTime and penalty will be sent to the server, and the server will send back the whole list of different tests, which will be injected into the html.