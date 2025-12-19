console.log('first log')


// setTimeout(() => {
//     console.log('this is the second log')
// }, 1000);


// const greet =(a, b)=>{
// return a+b
// }

// const processUser=(callback)=>{
//     return callback(4, 6);
// }

// console.log(processUser(greet))

const doSomeThing = (callback)=>{
    console.log('doing something')
    callback()
}

doSomeThing(()=>{
    console.log('callback called')
})