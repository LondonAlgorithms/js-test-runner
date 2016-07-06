var count = 0;
function pathfinder(n, m, matrix, x1, y1, x2, y2) {
  var toVisit = [[x1, y1]];
  var nextToVisit, i, length;
  while(toVisit.length) {
    count++;
    for(i = 0, length = toVisit.length; i < length; i++) {
      nextToVisit = addNextToVisits(toVisit, n, m, matrix, x1, y1, x2, y2);
      toVisit.unshift.apply(toVisit, nextToVisit);
    }
  }
  return matrix[x2][y2];
}
function addNextToVisits(toVisit, n, m, matrix, x1, y1, x2, y2) {
  var nextToVisit = [];

  if (toVisit.length === 0) {
    return;
  }
  var coord = toVisit.pop();
  var nextArray = [];
  nextArray.push([coord[0] - 1, coord[1]]);
  nextArray.push([coord[0], coord[1] - 1]);
  nextArray.push([coord[0] + 1, coord[1]]);
  nextArray.push([coord[0], coord[1] + 1]);
  nextArray.forEach(function(next) {
    if (next[0] < 0 || next[1] < 0 || next[0] >= n || next[1] >= m) {
      return false;
    }
    if (matrix[next[0]] [next[1]] > 0 || (next[0] === x1 && next[1] === y1) || matrix[next[0]] [next[1]] === -1) {
      return false;
    }
    if (next[0] === x2 && next[1] === y2) {
      matrix[x2] [y2] = count;
      return;
    }
    matrix[next[0]] [next[1]] = count;
    nextToVisit.push(next);
  });
  return nextToVisit;
}
var matrix = [
  [0,0,0,0,0],
  [0,-1,-1,0,-1],
  [0,0,0,-1,0],
  [0,-1,0,0,0]
];