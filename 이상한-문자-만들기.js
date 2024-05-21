// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
  let answer = "";
  let evenNum = true;
  let array = s.split("");

  // 공백이 아닌 숫자 중 짝수번째는 대문자로, 홀수번째는 소문자로 변경
  for (i = 0; i < array.length; i++) {
    // 공백일 경우 패스
    if (array[i] === " ") {
      evenNum = true;
      continue;
    }
    // 짝수일 경우
    if (evenNum) {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
    evenNum = !evenNum;
  }
  answer = array.join("");
  return answer;
}
