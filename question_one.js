// function solution(record) {
//     var answer = [];
//     return answer;
// }

function solution(record) {
    let answer = [];
    let split = record.map(i => i.split(' '))
    for (i = 0; i < record.length; i++) {
        let find = answer.map((e, idx) => e[1] === split[i][1] ? idx : '').filter(String)

        if (split[i][0] === 'Enter' && find.length === 0) {
            answer.push(split[i])

        } else if (split[i][0] === 'Enter' && find.length > 0) {
            for (j = 0; j < find.length; j++) {
                answer[find[j]][2] = split[i][2]
            }
            answer.push(split[i])

        } else if (split[i][0] === 'Leave' && find.length > 0) {
            answer.push([...split[i], answer[find[0]][2]])

        } else {
            for (j = 0; j < find.length; j++) {
                answer[find[j]][2] = split[i][2]
            }
        }
    }


    return answer.map(i => i[0] === 'Enter' ? `${i[2]} came in.` : `${i[2]} has left.`);
}

console.log('answer', solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))

// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
