function solution(left, right) {
  let answer = 0;

  for (i = left; i <= right; i++) {
    let count = 0;
    for (s = 0; s <= i; s++) {
      if (i % s === 0) {
        count++;
      }
    }
    count % 2 ? (answer -= i) : (answer += i);
  }
  return answer;
}
