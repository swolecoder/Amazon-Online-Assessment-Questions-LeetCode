const substringk = (s, k) => {

    let start = 0;
    let end = 0;
    let len = s.length;
    let set = new Set();

    let result = [];

    while (start < len && end < len) {

        while (end <= len) {
            if (helper(s.slice(start, end))) {
                if (s.slice(start, end).length == k && !set.has(s.slice(start, end))) {
                    set.add(s.slice(start, end))
                    result.push(s.slice(start, end))
                }
            }
            end++
        }
        start++;
        end = start;

    }

    return result;

}

function helper(s) {
    return new Set(s).size == s.length
}




let s = "abcabc", k = 3;
console.log(substringk(s, k));

s = "abacab", k = 3
console.log(substringk(s, k));

s = "awaglknagawunagwkwagl", k = 4
console.log(substringk(s, k));