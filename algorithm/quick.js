class Quick {
    partition(arr, left, right) {
        let low;
        let high;
        const pivot = arr[left];
        low = left;
        high = right + 1;
        do {
            do {
                low++;
            } while (low <= right && arr[low] < pivot);
            do {
                high--;
            } while (high >= left && arr[high] > pivot);
            if (low < high) {
                this.swap(arr, low, high);
            }
            console.log(arr);
        } while (low < high);

        this.swap(arr, left, high);
        console.log(arr);
        return high;
    }

    swap(arr, source, dest) {
        const list = arr;
        const term = list[source];
        list[source] = list[dest];
        list[dest] = term;
    }

    sort(arr, left, right) {
        if (left < right) {
            const q = this.partition(arr, left, right);
            this.sort(arr, left, q - 1);
            this.sort(arr, q + 1, right);
        }
    }
}

const quickSort = new Quick();
const arr = [5, 3, 8, 4, 9, 1, 6, 2, 7];
console.log(arr);
quickSort.sort(arr, 0, arr.length - 1);
