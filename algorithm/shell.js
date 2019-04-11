class ShellSorting {
    constructor() {
        this.gap = 0;
    }

    gapSort(arr, first, last) {
        const result = arr;
        let j;
        for (let i = first + this.gap; i < last; i += this.gap) {
            const key = arr[i];

            for (j = i - this.gap; j >= first && result[j] > key; j -= this.gap) {
                result[j + this.gap] = arr[j];
            }

            result[j + this.gap] = key;
        }
        console.log(result);
    }

    sort(arr) {
        const len = arr.length;
        for (this.gap = Math.floor(len / 2); this.gap > 0; this.gap = Math.floor(this.gap / 2)) {
            if (this.gap % 2 === 0) {
                this.gap++;
            }

            console.log(`gap : ${this.gap}`);

            for (let i = 0; i < this.gap; i++) {
                this.gapSort(arr, i, len - 1);
            }
        }
    }
}

const shellSorting = new ShellSorting();
shellSorting.sort([10, 8, 6, 20, 4, 3, 22, 1, 0, 15, 16]);
