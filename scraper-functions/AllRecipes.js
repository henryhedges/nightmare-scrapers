module.exports = function (nightmare){
    console.log('checking allrecipes.... ')

    var url = 'http://allrecipes.com/recipe/15486/mediterranean-chicken/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%203';

    nightmare
        .goto(url)
        .wait(4000)
        .evaluate(function(){
            var ingArray = [], 
                dirArray = [],
                ingredients = document.querySelectorAll('.checklist .recipe-ingred_txt'),
                directions = document.querySelectorAll('.recipe-directions__list .recipe-directions__list--item'),
                i =  ingredients.length || 0,
                j = directions.length || 0;

            for(i; i--;){
                ingArray.push(ingredients[i].innerText)
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