// create object using object literal

const player = {};
player.name = 'Sajim'
player.speciality = 'Honest';
player.bat = function () { 
    console.log('Swing your bat');
}
//console.log(player);
//player.bat(); // Output : 'Swing your bat


/// Another example 
const student = {
    name : "sajim",
    study : 'CSE',
    job : function(){
        console.log('Currently i am not doing job');
    },
    Institution : 'DIU'    
}
//console.log(student);
//student.job() // Output: Currently i am not doing job

// Object constructor
const persons = new Object();
//console.log(persons);

// 3.Object create method
//const item = object.create(null);

const atel = Object.create(student);
console.log(atel.name);


class person {
    name = "sajim";
    study = 'CSE';
    constructor(age){
        this.age = age;
    }
    Institution ='DIU'    
}
const person1 = new person(23)
console.log(person1);

