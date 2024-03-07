// const t = [1, -1, 3]

// t.push(5)

// console.log(t.length) // 4 is printed
// console.log(t[1])     // -1 is printed

// t.forEach(value => {
//     console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
// })



// const t = [1, -1, 3]

// const t2 = t.concat(5)  // creates new array

// console.log(t)  // [1, -1, 3] is printed
// console.log(t2) // [1, -1, 3, 5] is printed


// const t = [1, 2, 3]

// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] is printed

// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed


// const t = [1, 2, 3, 4, 5]

// const [first, second, ...rest] = t

// console.log(first, second)  // 1, 2 is printed
// console.log(rest)          // [3, 4, 5] is printed

// *****************************
// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
// }

// const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
// }

// const object3 = {
//     name: {
//         first: 'Dan',
//         last: 'Abramov',
//     },
//     grades: [2, 3, 5, 3],
//     department: 'Stanford University',
// }
// console.log(object1.name)         // Arto Hellas is printed
// const fieldName = 'age'
// console.log(object1[fieldName])    // 35 is printed


// *******************************************


// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',

//     greet: function () {
//         console.log('hello, my name is ' + this.name)
//     },
// }

// arto.greet()  // "hello, my name is Arto Hellas" gets printed

// *******************************************************

// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function () {
//         console.log('hello, my name is ' + this.name)
//     },
// }


// arto.growOlder = function () {
//     this.age += 1
// }

// console.log(arto.age)   // 35 is printed
// arto.growOlder()
// console.log(arto.age)   // 36 is printed

// *********************************************************

// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function () {
//         console.log('hello, my name is ' + this.name)
//     },

//     doAddition: function (a, b) {
//         console.log(a + b)
//     },
// }

// arto.doAddition(1, 4)        // 5 is printed

// const referenceToAddition = arto.doAddition
// referenceToAddition(10, 15)   // 25 is printed


// ***********************************************

const arto = {
    name: 'Arto Hellas',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
}


setTimeout(arto.greet, 1000)