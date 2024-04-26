function solution(n) {
  let answer = 0;
  let arr = n.toString().split("");

  for (i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }

  return answer;
}
