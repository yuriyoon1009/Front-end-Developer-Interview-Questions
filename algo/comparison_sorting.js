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
console.log(`merge sort`, `(정렬의 과정) 나누기 > 계속 쪼개기 >
다시 맞춰 올라가기 > 병합. n log n의 시간보잡도를 보장한다(32 * log 32 = 32 * 6).
즉, 최악의 경우에도 성능 보장. `)
// bubble sort
console.log(`bubble sort`, `두개의 자료를 비교하고
전체적인 순서에 맞게 자료를 맞바꿔서 정렬을 하게 된다.`);
console.log(`pros`, `이미 정렬된 데이터를 정렬할때 가장 빠르다 `)
console.log(`cons`, `다를 정렬에 비해 정렬 속도가 느리다.`)

function bubbleSort(arr) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    arr.forEach(function(ele, i){
      if(ele > arr[i + 1]){
        arr[i] = arr[i + 1];
        arr[i + 1] = ele;
        sorted = false;
      }
    })
  }
  return arr;
}

console.log(`https: //stackoverflow.com/questions/37817334/javascript-bubble-sort`);

// quick sort
console.log(`quick sort`, `기준이 되는 숫자를 정해서
그것보다 큰 원소들과 작은 원들로 편을 갈라놓고 정렬하자는 것이다.
재귀를 이용한 분할정복 알고리즘이다. 메모리도 적게 쓰고 빠르다.`);

function quickSort(arr) {
  if(!arr.length){
    return arr;
  }
  var pivot = arr[0];

  var left = [];
  var right = [];
  for(var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  };
  return quickSort(left).concat(pivot, quickSort(right));
}


