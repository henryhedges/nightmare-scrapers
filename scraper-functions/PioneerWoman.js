module.exports = function(nightmare){
    console.log('checking pioneer woman ....');

    var url = 'http://thepioneerwoman.com/cooking/hawaiian-burger/';

    nightmare
        .goto(url)
        .wait(2000)
        .evaluate(function(){
            var ingArray = [], 
                dirArray = [],
                ingredients = document.querySelector('.list-ingredients').querySelectorAll('li'),
                directions = document.querySelector('[id^="recipe-instructions-"].panel-collapse .panel-body').innerText,
                i, j, jlen = directions.length || 0, ilen = ingredients.length || 0;

            for(i = 0; i < ilen; i++){
                var itemText, items = ingredients[i].children;

                itemText = items[0].innerText;

                if (items[1]) itemText = itemText + items[1].innerText;

                ingArray.push(itemText);
            }

            return {
                ingredients: ingArray,
                directions: directions
            };
        })
        .end()
        .then((item)=>{
            console.log('item', item);
        })
}
