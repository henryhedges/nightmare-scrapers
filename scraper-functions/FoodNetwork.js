module.exports = function(nightmare){
        console.log('checking foodnetwork...');

        var url = 'http://www.foodnetwork.com/recipes/giada-de-laurentiis/turkey-meatloaf-with-feta-and-sun-dried-tomatoes-recipe-2014108';
        var itemSelector = '.o-Ingredients__a-ListItem';
        var bodySelector = '.o-Ingredients__m-Body';

        nightmare
          .goto(url)
          .wait(bodySelector)
          .evaluate(function(){
            var ingArray = [], 
                dirArray = [],
                ingredients = document.querySelectorAll('.o-Ingredients__m-Body .o-Ingredients__a-ListItem'),
                directions = document.querySelectorAll('.o-Method__m-Body p'),
                i =  ingredients.length;

            for(i; i--;){
                array.push(ingredients[i].innerText)
            }

            for (j; j--;){
                dirArray.push(directions[i].innerText)
            }

            return {
                ingredients: ingArray,
                directions: dirArray
            };
          })
          .end()
          .then((item)=>{
            console.log('item', item);
          })
    }