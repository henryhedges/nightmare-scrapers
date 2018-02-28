var app = require('express')();
var Nightmare = require('nightmare');
var Xray = require('x-ray');
var readline = require('readline');
var scraperFunctions = require('./scraper-functions/scraper-functions.js');

var nightmare = Nightmare();
var xray = Xray();

var rl = readline.createInterface({
  input: process.stdin
});

rl.question("Scrape what site? ", function(answer) {
  // TODO: Log the answer in a database
  switch(answer){
    case '1':
        scraperFunctions.runFoodNetwork(nightmare);
        break;
    case '2':
        scraperFunctions.runAllRecipes(nightmare);
        break;
    case '3':
        scraperFunctions.runEpicurious(nightmare);
        break;
    case '4':
        scraperFunctions.runPioneerWoman(nightmare);
        break;
    case '5':
        scraperFunctions.runNourishingHome(nightmare);
        break;
    case '6':
        scraperFunctions.runFoodDotCom(nightmare);
        break;
    default:
        break;
  }

  rl.close();
});