function generateRandomWords(wordsList, count) {
    const shuffledWords = wordsList.sort(() => 0.5 - Math.random());
    const selectedWords = shuffledWords.slice(0, count);
    return selectedWords;
  }
  function calculateRank(scoresList, score) {
    const scoresBelowGivenScore = scoresList.filter((s) => s < score).length;
    const rank = (scoresBelowGivenScore / scoresList.length) * 100;
    return parseFloat(rank.toFixed(2));
  }


  module.exports = {generateRandomWords,calculateRank}