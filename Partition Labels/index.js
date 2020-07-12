const partitionLabels = function (S) {
    let map = new Array(26).fill(-1);


    //store the last index of each char
    for (let i = 0; i < S.length; i++) {
        let char = S[i].charCodeAt() - 97;
        map[char] = i
    }

    let start = 0;
    let max = -1;
    let result = [];
    for (let i = 0; i < S.length; i++) {
        max = Math.max(max, map[S[i].charCodeAt() - 97]);
        if (i === max) {
           result.push(i-start +1);
           start = i+1
        }
    }

    return result;

}

let S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S))