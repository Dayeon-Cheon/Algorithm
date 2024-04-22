function solution(strings, n) {
  for (i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }

  strings.sort();
  let newStrings = strings.map((s) => s.slice(1));

  return newStrings;
}
