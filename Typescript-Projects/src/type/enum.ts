enum Day{
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,

}

let offDay = Day.Friday

console.log(offDay)

enum Roles{
    Admin = 'Admin',
    Moderator = 'Moderator',
    Guest = 'Guest'
}

console.log(Roles.Admin)

const nandu = {
    name : 'Chandu',
    role : Roles.Moderator
}

console.log(nandu)