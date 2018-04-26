function isPermutation(s1, s2) {
  //check that they are the same length, else return false
  if (s1.length !== s2.length) {
    return false;
  }

  let chars1 = {};

  //add chars to chars1 obj
  for (let x = 0; x < s1.length; x++) {
    if (!chars1[s1.charAt(x)]) {
      chars1[s1.charAt(x)] = 1;
    } else {
      chars1[s1.charAt(x)]++;
    }
  }
  //decrease the char when it matches
  for (let x = 0; x < s2.length; x++) {
    if (chars1[s2.charAt(x)]) {
      chars1[s2.charAt(x)]--;
    }
  }
  //iterate over the chars1object to find if the values are 0 or greater
  for (let x in chars1) {
    if (chars1[x] === 0) {
      continue;
    } else {
      return false;
    }
  }

  //if it gets out of the loop return true
  return true;
}
