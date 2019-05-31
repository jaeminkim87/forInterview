class InsertSorting {
  constructor(arr, printStepBoolean = false) {
    this.arr = arr;
    this.printStepBoolean = printStepBoolean;
  }

  sort() {
    let i;
    let j;
    let key;
    for (i = 1; i < this.arr.length; i += 1) {
      key = this.arr[i];
      for (j = i - 1; j >= 0 && this.arr[j] > key; j -= 1) {
        this.arr[j + 1] = this.arr[j];
      }
      this.arr[j + 1] = key;
      if (this.printStepBoolean) {
        this.printStep();
      }
    }
  }

  printStep() {
    console.log(this.arr);
  }

  printArray() {
    return this.arr;
  }
}

const sortingTest = new InsertSorting([8, 5, 6, 2, 4], true);
sortingTest.sort();
console.log(`result : ${sortingTest.printArray()}`);
