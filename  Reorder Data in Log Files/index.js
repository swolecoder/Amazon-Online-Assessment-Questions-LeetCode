/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs) {

    let logData = [];
    let digitData = [];

    for (let i = 0; i < logs.length; i++) {
        let data = logs[i].split(" ")[1];

        if (!isNaN(data)) {
            digitData.push(logs[i])
        } else {
            logData.push(logs[i])
        }
    }

    logData.sort((a, b)=>{
        let aRest = a.split(" ")[1];
        let bRest = b.split(" ")[1];


        return aRest == bRest ? a.localeCompare(b) : aRest.localeCompare(bRest)
    })

    return [...logData, ...digitData]

};


let logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
console.log(reorderLogFiles(logs))