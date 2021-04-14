//Solution for this problem https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

//My first solution. Brute force solution. Don't solves for every test case. The complexity is too high.
function climbingLeaderboard(scores, alice) {
  let currentRecordScore;
  let currentPlayerScore;
  let ranks = [];
  let result = [];
  let playerScores = alice.reverse();
  let scoreIndex = 0;
  let playerIndex = 0;
  let counter = 0;
  let n = 0;

  //Add the current unique score to the ranks array
  function setCurrentRecordScore() {
    if (!ranks.includes(scores[scoreIndex])) {
      ranks.push(scores[scoreIndex]);
    }
    scoreIndex++;
    currentRecordScore = ranks[ranks.length - 1];
  }

  function setCurrentPlayerScore() {
    currentPlayerScore = playerScores[playerIndex];
    playerIndex++;
  }

  function getResult() {
    //Run the function until a result if found
    while (counter <= Infinity) {
      if (currentPlayerScore >= currentRecordScore) {
        result.unshift(ranks.length);
        setCurrentPlayerScore();
        counter++;
        break;
      }
      //add the result when the last player score is smaller than the last record score
      if (currentRecordScore === undefined) {
        result.unshift(ranks.length);
        setCurrentPlayerScore();
        counter++;
        break;
      }
      setCurrentRecordScore();
      counter++;
    }
  }

  //Initial setup
  setCurrentRecordScore();
  setCurrentPlayerScore();

  //call the getResult function for every player score
  while (n < playerScores.length) {
    getResult();
    n++;
  }

  return result;
}
