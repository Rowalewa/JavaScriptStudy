let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        firstName: "Akira",
        lastName: "Laine",
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin']
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes']
    },
];
function profileLookUp(name, prop) {
    for (let i=0; i<contacts.length; i++) {
        if (contacts[i].firstName === name){
            return contacts[i][prop] || 'No Such Property';
        }
    }
    return 'No Such Contact';
}

let data = profileLookUp('Akira', 'likes')
console.log(data)