// function solution(N, users) {
//     var answer = [];
//     return answer;
// }

function solution(N, users) {
    let answer = [];

    for (i = 1; i < N + 1; i++) {
        let find = users.filter(e => e === i)
        let newArr = users.filter(e => e !== i)
        answer.push([i, find.length / users.length])
        users = newArr
    }

    return answer.sort((a, b) => b[1] - a[1]).map(i => i[0]);
}

console.log('answer', solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
//answer [ 3, 4, 2, 1, 5 ]

console.log('answer', solution(4, [4, 4, 4, 4, 4]))
//answer [ 4, 1, 2, 3 ]