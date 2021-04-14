//Solution for this problem https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
  //possible magicSquares
  const magicSquares = {
    1: [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    2: [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    3: [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
    4: [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    5: [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    6: [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    7: [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    8: [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
  };

  //compere input with every possible squere
  let minValue = Infinity;
  for (const key in magicSquares) {
    let acc = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        acc += Math.abs(s[i][j] - magicSquares[key][i][j]);
      }
    }
    if (minValue > acc) minValue = acc;
  }

  return minValue;
}
