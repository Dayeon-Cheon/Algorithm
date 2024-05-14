// This new ride at an amusement park is very popular and runs nonstop. The original fee of this ride is price, but it is determined that when using the ride for the Nth time, the fee will increase as N times of the original fee. That is, if the original fee is 100, it will be 200 for the second time, and 300 for the third time.
// Write a function solution to return the insufficient money when the ride is used count times.
// However, return 0 when the owed amount is sufficient.

function solution(price, money, count) {
  let answer = 0;
  let sum = 0;

  for (i = 1; i <= count; i++) {
    sum += price * i;
  }

  if (money < sum) {
    answer = sum - money;
  } else {
    answer = 0;
  }

  return answer;
}
