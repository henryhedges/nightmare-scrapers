module.exports = function (nightmare){
    console.log('checking epicurious ....');

    var url = 'https://www.epicurious.com/recipes/food/views/detroit-style-pizza';

    nightmare
        .goto(url)
        .wait(4000)
        .evaluate(function(){
            var ingArray = [], 
                dirArray = [],
                ingredients = document.querySelectorAll('.ingredient-group'),
                directions = document.querySelectorAll('.preparation-step'),
                i =  ingredients.length || 0,
                j = directions.length || 0;

            for(i; i--;){
                var ing = ingredients[i].querySelectorAll('.ingredient');
                var k = ing.length;
                var obj = {
                    title: ingredients[i].querySelector('strong').innerText,
                    ingredients: [] 
                };

                for (k;k--;){
                    obj.ingredients.push(ing[k].innerText);
                }

                ingArray.push(obj)
            }

            for(j; j--;){
                dirArray.push(directions[j].innerText)
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