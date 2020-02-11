# reshetCallTest starting project
Before started:
  1) Install nodejs 
  2) Install npm
  3) Create mongoDb free account and remember username & password in order to connect to db
  
  
Start
  1) Create local folder for project
  2) Clone from this repository
  3) Enter server folder & run `npm i`
  4) Create `.env file` put there line `databaseConn = mongodb+srv://USERNAME:PASS@cluster0-fz6u7.mongodb.net/test?retryWrites=true&w=majority`
  5) Change USERNAME & PASS with credentials  from 3) of 'Before started'
  6) Open one more terminal screen and enter client folder
  7) In server folder run `npm run dev`
  8) In client folder  run `npm run dev`
  9) Open browser and hit `http://localhost:8080/`
