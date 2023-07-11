function getRickrolled(callback) {
    var promise = new Promise((resolve) => {
        setTimeout(() => resolve("http://www.youtube.com/watch?v=dQw4w9WgXcQ"), 1000)
    })
    promise.then(callback)
    return promise
}
