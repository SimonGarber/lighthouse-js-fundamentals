var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var wList = 0
while (wList < ingredients.length){
  console.log(ingredients[wList]);
  wList++;
}

// Write a for loop that prints out the contents of ingredients:
for (var flist = 0; flist < ingredients.length; flist++) {
  console.log(ingredients[flist]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

var results = ingredients.reverse()
for (var rlist = 0; rlist < ingredients.length; rlist++) {
console.log(results[rlist]);
}


