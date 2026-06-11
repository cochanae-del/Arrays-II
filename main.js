// Write your code below
var words = [ "Apple", "Berry", "Cherry", "Banana"]
function findElement(words,word) {
   for (var i = 0; i < words.length; i = i + 1); {

        if (words[i] === word)
        return true;
}  
        return false;
}  
   
       console.log(findElement(words, "Orange"));
       