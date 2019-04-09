class MergeSorting {
    merge(arr, left, mid, right) {
        let i = left;
        let j = mid + 1;
        let k = left;
        const result = [];

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                result[k++] = arr[i++];
            } else {
                result[k++] = arr[j++];
            }
            console.log(result);
        }

        if (i > mid) {
            for (let l = j; l <= right; l++) {
                result[k++] = arr[l];
            }
            console.log(result);
        } else {
            for (let l = i; l <= mid; l++) {
                result[k++] = arr[l];
            }
            console.log(result);
        }
        for (let l = left; l <= right; l++) {
            arr[l] = result[l];
        }
        console.log(`finish : ${arr}`);
    }

    divide(arr, left, right) {
        let mid;
        if (left < right) {
            mid = Math.floor((left + right) / 2);
            console.log(`left : ${left}`);
            console.log(`mid : ${mid}`);
            console.log(`right : ${right}`);
            this.divide(arr, left, mid);
            this.divide(arr, mid + 1, right);
            this.merge(arr, left, mid, right);
        }
    }
}

const arr = [21, 10, 12, 20, 25, 13, 15, 22];
const mergeSorting = new MergeSorting();
mergeSorting.divide(arr, 0, arr.length - 1);
