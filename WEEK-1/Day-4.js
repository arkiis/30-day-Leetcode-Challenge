var findComplement = function (num) {
  let binary = num.toString(2);

  let convert = [];

  for (let num of binary) {
    if (num == "1") {
      convert.push("0");
    } else {
      convert.push("1");
    }
  }
  console.log({ convert });
  if (convert[0] == "0") convert.shift();
  let digit = parseInt(convert.join(""), 2);
  if (digit) return digit;
  else {
    return 0;
  }
};
console.log(findComplement(1));
