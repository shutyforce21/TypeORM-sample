const p = Promise.resolve('hello')

p.then(v => {
    console.log("this is then")
    console.log(v)
})
.catch(v => {
    console.log("this is catch")
    console.log(v)
})
.finally(v => {
    console.log("this is then")
    console.log(v)
})