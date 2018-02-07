console.log('test');

// Randomize array
Array.prototype.shuffle = function() {
  var i = this.length;
  var j = null;
  var temp = null;
  if (i === 0) return this;
  while ( --i ) {
    j = Math.floor( Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

console.log([4,5,6,9].shuffle());

// merge sort

