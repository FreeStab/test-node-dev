const rows = (str) => {
  return str.split('\n').map(row => {
      return row.split(' ').map(item => {
        return parseInt(item, 10)
    });
  });
}

const column = (rows) => {
    const length = rows.length;
  const res = [];
  let col = [];
  for (let i = 0; i < rows[0].length; i++) {
    for (let j = 0; j < length; j++) {
      col.push(rows[j][i])        
    }
      res.push(col);  
      col = [];
    }
  return res
}
  
class Matrix {
  constructor(matrix) {
    this.rows = rows(matrix);
    this.columns = column(rows(matrix));
  }
}
  
  
exports.Matrix = Matrix
  