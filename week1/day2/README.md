# week 1 - day2: Node.js modules

## Objectives
Learning node.js modules using common js (module.exports and require)

## what i built 
i created 3 files
- greet.js which has a function that greet me
- math.js which has 2 functions to add and to subtract two values
- index.js which is the main file that runs all the functions in the other files

## key concepts learned 
- module.exports
- require()

## How module works in my own words 
when we write our code into multiple files another file can not read the variables of the other file so using module.exports we make the function of that file public to other files to use then to be able to use that exported file we need to use the require module that takes that function exported and "import it"

## how to run the code 
```bash
node index.js