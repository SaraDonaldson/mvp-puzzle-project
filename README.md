# Music_Puzzle_MVP_Project
 ### MVP solo project for Codeop FS23 Bootcamp


# Installation 
Back End - Server folder (express), 
Front End - Client folder (react)


### Back End Server
Express JS

- cd Server
- npm install
- "npm run dev"
- local host is set to port 5002 - you might want to change this, it's in server.js

### Front end
React JS
- cd Client 
- npm install
- npm start

### mySQL DB
- npm run migrate 


# Structure

## Back end - server folder
- server.js - contains server start/setup and initial database connection
- app.js - server object, middlewares, routes

Routes 

Each route connects to a table in the database
- appRoutes - connects to the app game data table (game templates and solutions in the front end). We only need to get and post because we don't want to edit the initial games or their solutions
- gameDataRoutes - connects to the table where each played game is saved to (front end game and game menu)
- userRoutes - connects to the username table  (front end - login page)

### Authentication

## Front End - client folder
- Components
- FeatureTests - 
- Navigation - contains the router file
- Screens - The pages onto which we load the components
- App.js 
- Local browser storage
- API class with methods (request functions)


# What's functioning?

The mini sudoku test. 
- FeatureTests/PuzzleTest1
- components: FeatureTests/"NewTestGrid.jsx", Components/"TileComponent.jsx", Components/"Timer.jsx"
- Timer doesn't save data yet or have a callback to do so

Menu Map for mini sudoku
- maps however many puzzles are in the database to dynamically generate a game menu
- components: Menu item map
- screen: level menu
- The map produces a router button element for each "game" available in the database
- The button connects to the puzzle screen with the game id in the url
- the id is saved to use to fetch game data in order to load the puzzle
- I didn't have time to get the game working

### Useful Components
- menu map - can be reused for every menu (fetches by puzzle type, you can input via router from the button clicked on home screen).
- menu item component - formats the map and allows for a lot of custom css and click handler functions - not much there atm 
- New Test Grid - This is actually what I'm using for the grid right now - it's in the feature tests folder (sorry it's a bit chaotic!)
- Timer - basic timer - does nothing else atm
- Create user account - adds a user to the database. Doesn't save the data to state yet - not fully integrated
- Test puzzle buttons - Router buttons - I was reluctant to name it something good, then it was good. I will rename it eventually

## How the puzzle works - Puzzle Test 1
PuzzleTest1.jsx- Components: "NewTestGrid", "Timer", "TileComponent"




PuzzleTest1.jsx--

                    - "Timer"

                    - "NewTestGrid"-->    

                                   -  "TileComponent"

- Puzzle data format is an array of arrays. Each array is a row. (more for clarity when using data)
- I used X and Y to deal with rows and columns - both for styling and data manipulation. The X and Y of each tile are the arrays inside the puzzle array and the other axis is the index the tile/number has inside of its parent array. e.g. mini sudoku has 6 arrays inside with six numbers. You'll see this in lots of the functions
- You can use the exact same map for any number of tiles - e.g. 9x9 sudoku. You'll just need 9 arrays with 9 numbers
- The grid rows and columns is defined in the CSS (miniSudokuGrid.css)
- Blank spaces in the puzzles are zeros


Tile Component
- Lots of conditional CSS including -  a few states, props passed down to it and call backs
- "0" - conditionally styled to be " " empty



## Potential Feature Extensions

honestly, be creative and do whatever you like.

Add a new type of puzzle 
- you can base it on the puzzle there or a completely different one

 memedoku 
 replace the sounds with meme sounds and add images (css background image) to the buttons.
 next level: create this as an alternate "theme"
 bonus: multiple themes available - or a meme api with generate random

 Loading-Screen with random facts (from an API)

 Light-Darkmode Toggle (consistent throughout app)

 Back Office
 - add new puzzles to the app table in the database
 - create routes in appRoutes.js
 - create admin login on login page
 - route admin login to back office interface
    - create a form in react to add new puzzles
- Bonus - use game components to display preview of entered data
- Bonus 2 - create a function to generate new puzzles - you probably love maths 

Acessibility features 
- a great chance to learn about various levels of accessibility
- sizes and colors dependent on click on settings button
- settings can be a menu in "App" - visible at all times (prefereably drop down but go ahead and do a burger or even route to a settings page if you need to)
- create multiple accessibility settings for dyslexia, sight, hearing etc. (toggle)
- create conditional css for each accessibility type. You can modify current css or you can create a new CSS file to use for each accessibility "style"

 User Stats Dashboard on Home Screen 
 - using data from user dataase

 Tutorial - interactive pop-ups for first time users





### Intended Users
People who love puzzle games, especially sudoku or futoshiki games. This level of puzzle doesn't require any musical knowledge in order to enjoy the musical aspect. In fact, we can substitute the music for any sound.


## Futoshiki
Futoshiki was developed by Tamaki Seto in 2001. image and example



## Sudoku
Popularised in Japan in the 20th Century. Likely originated in the USA. 
image and example


