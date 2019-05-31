class MergeSorting {
  static merge(arr, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;
    const sortArr = arr;
    const result = [];

    while (i <= mid && j <= right) {
      if (sortArr[i] <= sortArr[j]) {
        result[k++] = sortArr[i++];
      } else {
        result[k++] = sortArr[j++];
      }
      console.log(result);
    }

    if (i > mid) {
      for (let l = j; l <= right; l++) {
        result[k++] = sortArr[l];
      }
      console.log(result);
    } else {
      for (let l = i; l <= mid; l++) {
        result[k++] = sortArr[l];
      }
      console.log(result);
    }
    for (let l = left; l <= right; l++) {
      sortArr[l] = result[l];
    }
    console.log(`finish : ${sortArr}`);
  }

  divide(sortArr, left, right) {
    let mid;
    if (left < right) {
      mid = Math.floor((left + right) / 2);
      this.divide(sortArr, left, mid);
      this.divide(sortArr, mid + 1, right);
      this.merge(sortArr, left, mid, right);
    }
  }
}

const arr = [21, 10, 12, 20, 25, 13, 15, 22];
const mergeSorting = new MergeSorting();
mergeSorting.divide(arr, 0, arr.length - 1);
