
function GetTopKeywords(K, keywords, reviews) {

    let map = new Map();
    for (let keyword of keywords) {
        map.set(keyword.toLowerCase(), 0)
    }

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i].split(" ");
        for (let i = 0; i < review.length; i++) {
            let reviewData = review[i].toLowerCase();
            if (map.has(reviewData)) {
                let getVal = map.get(reviewData)
                map.set(reviewData, getVal + 1)
            }
        }
    }

    let sortedData = new Map([...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])))


    let returTopKData = [];

    let index = 0;

    sortedData.forEach((val, key) => {
        if (index < K) {
            returTopKData.push(key);
        }
        index++

    })

    return returTopKData
}





let k = 2,
    keywords = ["anacell", "cetracular", "betacellular"],
    reviews = [
        "Anacell provides the best services in the city",
        "betacellular has awesome services",
        "Best services provided by anacell, everyone should use anacell",
    ];

console.log(GetTopKeywords(k, keywords, reviews));


k = 2
keywords = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]
console.log(GetTopKeywords(k, keywords, reviews));

