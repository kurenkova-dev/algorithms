function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while(low < high){
    let mid = Math.round((low + high)/2);
    let guess = list[mid];
    if(guess == item){
      return mid;
    } else if (guess > item){
      high = mid -1;
    } else{
    low = mid +1;
    }
  };
};

let list = [3, 5, 7, 9, 11];
let item = 7;

binarySearch(list, item);
