// 문제 1. 주어진 문자열을 뒤집어서 반환하는 함수를 작성해주세요!
// 예를 들어, 문자열 'spartan'이 주어지면, 결과는 다음과 같아야 합니다: 'natraps'*

function reverseText(word) {
  let answer = "";
  for (i = word.length - 1; i >= 0; i--) {
    answer += word[i];
  }
  return answer;
}
