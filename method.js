const student = {
    name : "sajim",
    study : 'CSE',
    job : function(){
        //console.log(this.name ,'Currently i am not doing job');
        return this.name +' '+ 'Currently not doing job'
    },
    Institution : 'DIU'
}
//student.job()  // Its called method calling
// or another way of function calling 
const result = student.job() 
console.log(result);