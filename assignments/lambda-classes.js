// CODE here for your Lambda Classes

class Person {
    constructor(PersonAttributes){
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(InstructorAttributes){
        super(InstructorAttributes);
        this.favLanguage = InstructorAttributes.favLanguage;
        this.specialty = InstructorAttributes.specialty;
        this.catchPhrase = InstructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    percentage(Student) {
        return Student.grade = Math.ceil((Math.random() * 100) + 1);
    }
}

class Student extends Person {
    constructor(StudentAttributes){
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
        this.grade = StudentAttributes.grade;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject} `;
    }
    graduate() {
        if (this.grade > 70){
            return `${this.name} can graduate with a ${this.grade}! `;
        } else {
            return `${this.name} can NOT graduate with a ${this.grade}!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes);
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`;
    }
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const josh = new Instructor ({
    name: 'Josh',
    location: 'Boston',
    age: 40,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Im your Huckleberry.',
})

const shawn = new Student ({
    name: 'Shawn',
    location: 'Boise',
    age: 27,
    previousBackground: 'Sales',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 93,
})

const miguel = new Student ({
    name: 'Miguel',
    location: 'Philadelphia',
    age: 25,
    previousBackground: 'Truck Driving',
    className: 'Web21',
    favSubjects: [' Html ', ' CSS ', ' JavaScript '],
    grade: 70,
})

const bob = new ProjectManager ({
    name: 'Bob',
    location: 'Detroit',
    age: 32,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: 'Hello, my name is Inigo Montoya. You killed my father. Prepare to die.',
    gradClassName: 'CS5',
    favInstructor: 'Josh', 
})

const sean = new ProjectManager ({
    name: 'Sean',
    location: 'Orlando',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Bueller….Bueller…Bueller?',
    gradClassName: 'CS19',
    favInstructor: 'fred',
})


console.log(miguel.speak());
console.log(fred.demo('JavaScript'));
console.log(josh.grade(shawn, 'Html'));
console.log(miguel.listSubjects());
console.log(shawn.PRAssignment(miguel, 'CSS'));
console.log(shawn.sprintChallenge(shawn,'JavaScript'));
console.log(sean.standUp('Web21'));
console.log(bob.debugsCode(miguel, 'JavaScript'));
console.log(bob.percentage(shawn));
console.log(bob.percentage(shawn.graduate()));