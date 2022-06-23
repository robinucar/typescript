enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Robin',
    age: 30,
    hobbies: ['Watching', 'Reading'],
    role: Role.ADMIN
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}

export {}