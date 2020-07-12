//Min  Heap
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  class MinHeap {
    constructor(items){
      this.arr = [];
      for(let item of items){
        this.push(item);
      }
    }
    push(item){
      const { arr } = this;
      arr.push(item);
      let len = arr.length;
      let child = len - 1;
      let parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;

      while(parent >= 0 && arr[child] < arr[parent]){
        swap(arr, child, parent);
        child = parent;
        parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;
      }
    }
    pop(){
      const { arr } = this
      if (!arr.length) return null;
      const result = arr[0];
      arr[0] = arr[arr.length - 1];
      arr.pop();
      if (arr.length) this.heapify(0);
      return result;
    }
    heapify(parent){
      const { arr } = this;
      if (!arr.length) return null;
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;

      if (arr[left] && arr[right]){
        if (arr[parent] > arr[left] && arr[left] < arr[right]){
          swap(arr, left, parent);
          this.heapify(left);
          return;
        }
        if (arr[parent] > arr[right] && arr[right] < arr[left]){
          swap(arr, right, parent);
          this.heapify(right);
          return;
        }
      }
      if (arr[right] && arr[parent] > arr[right]){
        swap(arr, right, parent);
        this.heapify(right);
        return;
      }
      if (arr[left] && arr[parent] > arr[left]) {
        swap(arr, left, parent);
        this.heapify(left);
        return;
      }
    }
    size(){
      return this.arr.length;
    }
    peek(){
      return this.arr[0];
    }
  }

const minCost = (ropes)=>{

    let minHeap = new MinHeap(ropes);

    let res = 0;
    while(minHeap.size() > 1){
        let nextTwoRopes = minHeap.pop() + minHeap.pop();
        res += nextTwoRopes;
        minHeap.push(nextTwoRopes)
    }

    return res;
}

let ropes = [8, 4, 6, 12];
console.log(minCost(ropes));

ropes = [20, 4, 8, 2];
console.log(minCost(ropes));

ropes = [1, 2, 5, 10, 35, 89];
console.log(minCost(ropes));

ropes = [2, 2, 3, 3];
console.log(minCost(ropes));