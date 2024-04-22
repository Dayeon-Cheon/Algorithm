function solution(absolutes, signs) {
  let answer = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }
  return answer;
}
