module.exports = function(nightmare){
    console.log('checking food.com ....');

    var url = 'http://thenourishinghome.com/2012/03/almond-flour-biscuits/';

    nightmare
        .goto(url)
        .wait(1000)
        .evaluate(function(){
            var i, j, 
                ingArray = [], 
                dirArray = [],
                ingredients = document.querySelectorAll('#zlrecipe-ingredients-list li'),
                directions = document.querySelectorAll('#zlrecipe-instructions-list li'),
                ilen = ingredients.length || 0,
                jlen = directions.length || 0;

            for(i = 0; i < ilen; i++){
                ingArray.push(ingredients[i].innerText);
            }

            for(j = 0; j < jlen; j++){
                dirArray.push(directions[j].innerText);
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