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
재귀를 이용한 분할정복 알고리즘이다.`);

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


// insertion sort

// selection sort

// shell sort

// change sort


// array vs linkedlist

// stack and queue

// tree
// binary tree
console.log(`binary tree`, `한개의 노드에 최대 2개 이하의
자식을 소유하고 있는 트리`);
// full binary tree
console.log(`full binary tree`, `모든 노드가 2개의 자식 노드를
가지며 모든 레벨이 꽉 찬 트리이다.`);
// complete binary tree
console.log(`complete binary tree`, `포화 이진 트리같이
모든 레벨이 꽉 찬 트리는 아니지만 모든 노드가 2개의 자식 노드를 가지는
트리이다.`);
console.log(`http://minsone.github.io/programming/binary-tree`);
// bst (binary search tree)

// binary heep

// graph
