// 문제 정의:
// 주어진 문자열 배열에서 가장 긴 팰린드롬을 찾아 반환하라. 만약 팰린드롬이 없다면 빈 문자열을 반환한다.

// 조건:
// 팰린드롬은 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때 동일한 문자열을 의미한다.
// 대소문자를 구분하지 않으며, 공백과 특수 문자는 무시한다.
// reverse 함수를 사용하지 않는다.

// 예시:

// 입력: ["abc","car","ada","racecar","cool"]
// 출력: "racecar" (길이가 같은 팰린드롬이 여러 개라면 사전 순서대로 가장 앞에 있는 것을 선택)

// 입력: ["notapalindrome","racecar"]
// 출력: "racecar"

// 입력: ["def","ghi"]
// 출력: "" (팰린드롬이 없으므로 빈 문자열 반환)

function findLongestPalindrome(words) {
  let answer = "";

  function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const strs = str.split("");
    const reversedStr = [];
    for (let i = strs.length - 1; i >= 0; i--) {
      reversedStr.push(strs[i]);
    }
    return reversedStr.join("") === str ? true : false;
  }

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i]) && answer.length < words[i].length) {
      answer = words[i];
    }
  }

  return answer;
}
