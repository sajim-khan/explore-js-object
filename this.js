// console.log('jh');

const kodomAli = {
    name : 'Kodom Ali',
    money: 5000,
    study: 'CSE',
    subject: ['calculus', 'web engineering', 'Data structure'],
    exam: function (){
        console.log(this);
        return this.name + ' ' + 'is participate in exam';
    },
    improveExam: function (){
        this.exam()
        return `${this.name} is taking improvement exam on ${this.subject}`
    },
    treatDey: function (amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

kodomAli.exam();
