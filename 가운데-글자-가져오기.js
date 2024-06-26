// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  let answer = "";
  let indexArr = [];
  let index = 0;

  index = s.length / 2;

  if (index % 1 === 0 || index === 1) {
    indexArr = [index - 1, index];
  } else {
    indexArr = [Math.floor(index)];
  }

  for (i = 0; i < indexArr.length; i++) {
    answer += s[indexArr[i]];
  }

  return answer;
}

// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }
