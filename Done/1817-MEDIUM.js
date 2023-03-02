function findingUsersActiveMinutes(logs, k) {
    const logs_obj = {}
    const logs_len = logs.length
    const out = []
    for (let i = 0; i < k; i++) out[i] = 0
    for (let i = 0; i < logs_len; i++) {
        logs_obj[logs[i][0]] ? logs_obj[logs[i][0]].push(logs[i][1]) : (logs_obj[logs[i][0]] = [logs[i][1]])
    }
    const keys = Object.keys(logs_obj)
    for (let i = 0; i < keys.length; i++) {
        let uam = [...new Set(logs_obj[keys[i]])]
        console.log(uam)
        out[uam.length] = out[uam.length] + 1
    }
    return out
}

console.log(
    findingUsersActiveMinutes(
        [
            [0, 5],
            [1, 2],
            [0, 2],
            [0, 5],
            [1, 3],
        ],
        5
    )
)
