var foodnetwork = require('./FoodNetwork.js');
var allrecipes = require('./AllRecipes.js');
var epicurious = require('./Epicurious.js');
var pioneerwoman = require('./PioneerWoman.js');
var nourishinghome = require('./NourishingHome.js');
var fooddotcom = require('./FoodDotCom.js');


module.exports = {
    runFoodNetwork: foodnetwork,
    runAllRecipes: allrecipes,
    runEpicurious: epicurious,
    runPioneerWoman: pioneerwoman,
    runNourishingHome: nourishinghome,
    runFoodDotCom: fooddotcom
}