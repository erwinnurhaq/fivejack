// function solution(N, users) {
//     var answer = [];
//     return answer;
// }

function solution(relation) {
    let answer = 0;
    let colIndex = [0, 1, 2, 3, 4, 5, 6, 7]
    const relLength = relation.length
    const rowLength = relation[0].length

    for (i = 0; i < rowLength; i++) {
        if ([...new Set(relation.map(x => x[i]))].length === relLength) {
            answer += 1
            colIndex.splice(i, 1)
        }
    }

    for (i = 0; i < colIndex.length; i++) {
        for (j = i + 1; j < colIndex.length; j++) {
            if ([...new Set(relation.map(x => x[colIndex[i]] + x[colIndex[j]]))].length === relLength && i !== j) {
                answer += 1
            }
        }
    }

    return answer;
}

const db = [
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2']
]

console.log('answer', solution(db))