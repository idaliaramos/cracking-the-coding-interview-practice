//i: string
//output: string with spaces substituted for %20
//solution one with replace method
function URLify(string) {
  //trim the string
  string = string.trim();
  //replace
  let url = string.replace(/\s/gi, "%20");

  return url;
}

//solution 2 not using a replace method

function URLify2(string) {
  string = string.trim();
  let newString = "";
  for (let x = 0; x < string.length; x++) {
    if (string.charAt(x) === " ") {
      newString += "%20";
    } else {
      newString += string.charAt(x);
    }
  }
  return newString;
}
