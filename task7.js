var line = "The quick brown fox jumps over the lazy dog.";
var letter = line.split(" ");
var  count = 0;

for (let i = 0; i < line.length; i++) {
    if (letter[i] == "The" || letter[i] == "the") {
        count = count + 1;
    } 
}
console.log(count);