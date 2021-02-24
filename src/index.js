// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];

    let result = [];

    matrix.forEach((arr, i) => {
        if (i % 2 == 0) {
            arr.forEach((k) => result.push(k));
        } else {
            for (k = arr.length - 1; k >= 0; k--) {
                result.push(arr[k]);
            }
        }
    });

    return result;
};
