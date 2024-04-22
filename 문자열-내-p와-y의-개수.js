function solution(s) {
  let count1 = 0;
  let count2 = 0;
  s = s.toUpperCase();

  for (i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      count1++;
    }
    if (s[i] === "Y") {
      count2++;
    }
  }

  if (count1 === count2) {
    return true;
  } else {
    return false;
  }
}
