//Searching
var canConstruct = function (ransomNote, magazine) {
  let ransom = [...ransomNote]; //splitting string into an array
  let stack = []; //pushing matched letters

  for (let char of magazine) {
    //looping thru magazine
    if (ransom.includes(char)) {
      //searching for a match
      let pop = ransom.splice(ransom.indexOf(char), 1); //store matched value in a var

      stack.push(pop);
    }
  }

  return [...ransomNote].length === stack.length;
};
console.log(canConstruct("aa", "ab"));
