class SelectionSorting {
    constructor(arr, printStepBoolean = false) {
        this.arr = arr;
        this.printStepBoolean = printStepBoolean;
    }

    sort() {
        for (let i = 0; i < this.arr.length - 1; i += 1) {
            let least = i;
            for (let j = i + 1; j < this.arr.length; j += 1) {
                if (this.arr[least] > this.arr[j]) {
                    least = j;
                }
            }

            if (least !== i) {
                this.swap(i, least);
            }
            if (this.printStepBoolean) {
                this.printStep();
            }
        }
    }

    swap(source, dest) {
        const term = this.arr[source];
        this.arr[source] = this.arr[dest];
        this.arr[dest] = term;
    }

    printStep() {
        console.log(this.arr);
    }
}

const selectSort = new SelectionSorting([9, 6, 7, 3, 5], true);
selectSort.sort();