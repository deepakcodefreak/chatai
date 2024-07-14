export const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Times up')
        }, ms);
    })
}