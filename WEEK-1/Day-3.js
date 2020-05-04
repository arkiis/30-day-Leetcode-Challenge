//Searching
var canConstruct = function (ransomNote, magazine) {
  let ransom = [...ransomNote];
  let stack = [];

  for (let char of magazine) {
    if (ransom.includes(char)) {
      let pop = ransom.splice(ransom.indexOf(char), 1);

      stack.push(pop);
    }
  }

  return [...ransomNote].length === stack.length;
};
console.log(canConstruct("aa", "ab"));
