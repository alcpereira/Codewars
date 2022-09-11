// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.split('').reduce((acc, v) => ['a', 'e', 'i', 'o', 'u'].includes(String(v)) ? acc += 1 : acc, 0);
  }


// Nice solution: Could have use regex 