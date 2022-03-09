// Next statement is the same as: const items = ['item1', 'item2'];
// but you export it at the same time
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}

// Next statement exports and renames the person object
module.exports.singlePerson = person

// Gotta remember that **both** items and singlePerson will be
// included in module.export object