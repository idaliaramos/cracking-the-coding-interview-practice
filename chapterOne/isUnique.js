function isUnique(s) {
  let chars = {};

  for (let x = 0; x < s.length; x++) {
    if (!chars[s.charAt(x)]) {
      chars[s.charAt(x)] = 1;
    } else {
      return false;
    }
  }
  return true;
}
