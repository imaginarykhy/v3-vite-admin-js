export function getUserInfoApi() {
    return new Promise((resolve, reject) => {
        resolve({
           username:'testName',
           roles:[0]
        })
    })
}
export function loginApi(data) {
    return new Promise((resolve, reject) => {
        resolve({
            token: 'test token'
        })
    })
}