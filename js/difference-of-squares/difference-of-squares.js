const squareOfSum = (number) => {
  let res = 0;
  for (let index = 0; index <= number; index++) {
    res += index;
  }
  return res * res;
}

const sumOfSquares = (number) => {
    let res = 0;
    for (let index = 0; index <= number; index++) {
        res += index * index;
    }
  return res;
}

class Squares {
    constructor(number) {
      this.squareOfSum = squareOfSum(number);
      this.sumOfSquares = sumOfSquares(number);
      this.difference = this.squareOfSum - this.sumOfSquares;
    }
  }


exports.Squares = Squares
