function diagonalDifference(arr) {
    const mappedArr = {};
    let left = 0;
    let right = 0;
    arr.forEach((ar, index) => (mappedArr[index] = ar));

    Object.size = (obj) => {
        let size = 0;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    let size = Object.size(mappedArr);
    let count = 1;

    for (let i = 0; i < size; i++) {
        left += mappedArr[i][i];
        mappedArr[i][size - count];
        right += mappedArr[i][size - count];
        count++;
    }
    return Math.abs(left - right);
}
