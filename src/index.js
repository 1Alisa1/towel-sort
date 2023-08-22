
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix && matrix.length > 0) {
    return matrix.map((el, i) => i % 2 === 0 ? el : el.reverse()).flat(1);
  } else {
    return [];
  }
  
}
