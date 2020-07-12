const substringsWithKDistinctChars = (str, k)=>{


    let start = 0;
    let end = 0;
    let result = [];

    let len = str.length;

    while (start < len && end < len) {

        while (end <= len) {
            if(str.slice(start, end).length > 1){
                let set = new Set(str.slice(start, end));
                if ( set.size == k) {
                    result.push(str.slice(start, end))
                }
            }
            end++
        }
        start++;
        end = start
    }

    return result

}


let s = "pqpqs", k = 2;
console.log(substringsWithKDistinctChars(s,k))