//JEWELS AND STONES
//return number of jewels in the stone string
//Test case should return 3

var numJewelsInStones = function (J, S) {
  let match = 0;
  let set = new Set(); //new set only adds values to it no keys

  let arr = J.split(""); //splits Jewel into an array so I can loop thru

  for (let val of arr) {
    //iterating thru arr
    set.add(val);
  }

  let sArr = S.split(""); //repeat steps from J

  for (let val of sArr) {
    if (set.has(val)) {
      match += 1;
    }
  }

  return match;
};
console.log("func", numJewelsInStones("aA", "aAAbbbb"));
//Time and Space Complexity is O(n)
