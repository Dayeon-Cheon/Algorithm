function solution(n) {
  let numberArr = Array.from(String(n), Number);

  for (i = 0; i < numberArr.length; i++) {
    for (s = i + 1; s < numberArr.length; s++) {
      if (numberArr[i] < numberArr[s]) {
        let temp = numberArr[i];
        numberArr[i] = numberArr[s];
        numberArr[s] = temp;
      }
    }
  }

  numberArr = Number(numberArr.join(""));

  return numberArr;
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN.split("").sort().reverse().join("");

//   return +newArr;
// }
