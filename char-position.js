function characterPosition(word, character) {
  let characterIndexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == character) characterIndexes.push({ character, i });
  }
  if (characterIndexes.length == 0)
    return `No index found for character ${character}`;
  return characterIndexes;
}

console.log(characterPosition("school", "x"));
