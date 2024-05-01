function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    if (Math.pow(i, 2) === n) {
      answer = Math.pow(i + 1, 2);
      return answer;
    }
  }
  if (answer === 0) {
    answer = -1;
  }
  return answer;
}
