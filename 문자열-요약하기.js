// 문제 2. 주어진 문자열을 요약하는 함수를 작성해주세요!
// 예를 들어, 문자열 ‘aaabbbc’가 주어지면 결과는 다음과 같아야 합니다: ‘a3/b3/c1’
// 또한, 문자열 ‘ahhhhz’가 주어지면 결과는 다음과 같아야 합니다: ‘a1/h4/z1’

function countAlphabet(word) {
  let answer = "";
  let array = {};

  for (i = 0; i < word.length; i++) {
    if (word[i] in array) {
      array[word[i]]++;
    } else {
      array[word[i]] = 1;
    }
  }

  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      answer += `${key}${array[key]}/`;
    }
  }

  return answer.slice(0, -1);
}
