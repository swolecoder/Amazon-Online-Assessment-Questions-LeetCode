const findPairs = (a, b, target) => {

    a.sort((a, b) => a[1] - b[1]);
    b.sort((a, b) => a[1] - b[1]);

    let aIndex = 0;
    let bIndex = b.length - 1;
    let max = -1

    while (aIndex < a.length && bIndex >= 0) {
        let sum = a[aIndex][1] + b[bIndex][1];

        if (sum <= target) {
            max = Math.max(sum, max);
            aIndex++
        } else {
            bIndex--
        }
    }

    aIndex = 0;
    bIndex = b.length-1;
    let result = [];

    while( aIndex < a.length && bIndex >=0){

        let s = a[aIndex][1] + b[bIndex][1];

        if(s === max){
            result.push([a[aIndex][0], b[bIndex][0]]);
            aIndex++;
            bIndex--
        }else if( s > max){
            bIndex--
        }else{
            aIndex++
        }
    }

    return result;
}



let a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7;
console.log(findPairs(a, b, target));


a = [[1, 3], [2, 5], [3, 7], [4, 10]]
b = [[1, 2], [2, 3], [3, 4], [4, 5]]
target = 10;
console.log(findPairs(a, b, target));

a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 10], [3, 14]]
target = 20;
console.log(findPairs(a, b, target));

a = [[1, 8], [2, 15], [3, 9]]
b = [[1, 8], [2, 11], [3, 12]]
target = 20;
console.log(findPairs(a, b, target));