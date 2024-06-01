// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  const isUpperCase = (str) => str === str.toUpperCase();
  const isLowerCase = (str) => str === str.toLowerCase();

  const upperCases = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCases = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let index;
  let answer = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer = answer + " ";
    } else if (isUpperCase(s[i])) {
      index = upperCases.findIndex((alp) => alp === s[i]);
      answer += upperCases[(index + n) % 26];
    } else if (isLowerCase(s[i])) {
      index = lowerCases.findIndex((alp) => alp === s[i]);
      answer += lowerCases[(index + n) % 26];
    }
  }

  return answer;
}
