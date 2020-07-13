const mostCommonWord = function (paragraph, banned) {
    let paragraphText = paragraph.toLowerCase().split(/\W+/);

    let map = new Map();

    for (let i = 0; i < paragraphText.length; i++) {
        let checker = banned.indexOf(paragraphText[i]) < 0;

        let data = paragraphText[i].toLowerCase();
        if (checker) {
            if (!map.has(data)) {
                map.set(data, 1)
            } else {
                let val = map.get(data);
                map.set(data, val + 1)
            }
        }
    }

    let max = -1;
    let returnResult = "";

    map.forEach((val, key) => {

        if (val > max) {
            max = val;
            returnResult = key
        }
    })

    return returnResult;

}

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
    banned = ["hit"];
console.log(mostCommonWord(paragraph, banned))