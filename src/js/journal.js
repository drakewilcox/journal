export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(){
  var titleWords = this.title.split(" ");
  var bodyWords = this.body.split(" ");
  totalWords = titleWords.length + bodyWords.length;
  return totalWords;
}

Entry.prototype.vowels = function(){
  var letters = this.title.split("").concat(this.body.split(""));
  var vowelCount = 0;
  var vowelArray = ["a", "e", "i" , "o", "u", "A", "E", "I", "O", "U"]
  letters.forEach(letter => {
      if (vowelArray.includes(letter)) {
        vowelCount++;
      }
    });
  return vowelCount;
}

Entry.prototype.cons = function(){
  var letters = this.title.concat(this.body);
  var letterArray = letters.match(/[A-Za-z]/g);
  var consCount = 0;
  var vowelArray = ["a", "e", "i" , "o", "u", "A", "E", "I", "O", "U"]
  letterArray.forEach(letter => {
    if (vowelArray.includes(letter) === false) {
      consCount++;
    }
  });
  return consCount;
}