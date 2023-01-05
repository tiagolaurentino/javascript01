 
let tiago = { 
    name: 'Tiago',
    age: 37,
    Weight: 97.8,
    isSubscribed: true,
}
 
const john = {
    name: 'John',
    age: 45,
    Weight: 91.8,
    isSubscribed: true,
}
let student = {
    name: 'Mayk',
    age: 25,
    Weight: 74.8,
    isSubscribed: true,
    
    engordar(p=0){
        console.log('caracteristica')
        this.age += p
    }
}
    student.engordar()
    console.log(`${student.name}  pesa ${student.Weight} kg, tem a idade ${student.age} anos.`)



//console.log(`${student.name} de idade ${student.age} pesa ${student.Weight} kg.`)

students = [
    student,
    tiago,
    john,
    
]

console.log(students)