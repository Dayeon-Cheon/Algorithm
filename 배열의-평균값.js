function solution(numbers) {
  sum = 0;
  let answer = numbers.forEach((element) => (sum += element)) / numbers.length;

  answer = sum / numbers.length;
  return answer;
}
