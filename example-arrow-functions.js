var names = ['JTA', 'Nick', 'Dan', 'Janick', 'Julie'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// })

//names.forEach((name) => { console.log('arrowFunc', name)});

// var returnMe = (name) => name + '!';

// console.log(returnMe('Michael'));,


// var person = {
//     name: 'Ryan',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says Hi to ' + name);
//         });
//     }
// }

// person.greet();

// Challenge Area

function add (a, b) {
    return a + b;
}

// addStatement

var addStatement = (a, b) => {
    return a + b;
}

console.log('addStatement ', addStatement(4, 7));


// addExpression

var addExpression = (a, b) => a + b;

console.log('addExpression ', addExpression(6, 9));

