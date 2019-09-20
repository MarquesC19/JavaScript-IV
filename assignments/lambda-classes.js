// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak() {
return( `Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }

  class Instructor extends Person{
        constructor(instructorAttrs){
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
    this.student = instructorAttrs.student;
    }
    demo(subject) {
        return(`Today we are learning about ${subject}`)
      }
      grade(student, subject) {
        return(`${this.name} receives a perfect score on ${subject}`);
      }
    }
    class Student extends Person{
    constructor(StudentAttrs) {
    super(StudentAttrs);
    this.previousBackground=StudentAttrs.perviousBackground;
    this.className = StudentAttrs.className;
    this.favSubjects=StudentAttrs.favSubjects;
    this.grade = StudentAttrs.grade;
    this.sprintSubject = StudentAttrs.sprintSubject
    }
    

    listSubjects() {
        return (this.favSubjects);
    }
    PRAssignment(subject) {
      return (`${this.name} has submitted a PR for ${this.favSubjects}`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${this.favSubjects}`);
      }
    }

    class ProjectManager extends Instructor {
        constructor(managerAttrs) {
    super(managerAttrs);
    this.gradClassName = managerAttrs.gradClassName;
    this.FavInstructor = managerAttrs.FavInstructor;
    }
standUp(channel) {
  return (`${this.name} announces to ${this.channel}, @channel standy times!`);
}
debugsCode(student, subject) {
  return (`${this.name} debugs ${this.student}'s code on ${this.subject}`);
};
}
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
console.log(fred.speak())

const jeffery = new Student({
  name:'jeffery',
  age:25,
  location:'Tennessee',
  favLanguage:'french',
  className:"web24",
  favSubjects:'English ,science, history',
  prSubject:'JavaScript IV',
  sprintSubject:'JavaScript',
  previousBackground:'gym teacher'
});
console.log(jeffery.favSubjects)
console.log(jeffery.sprintChallenge())
console.log(jeffery.sprintSubject)

const henry = new ProjectManager({
  name:'Henry',
  FavInstructor:'Britt',
  gradClassName:'web24',
});
console.log(henry.FavInstructor)
console.log(henry.gradClassName)
console.log(henry.name)

const george = new Instructor({
name:'george',
age:35,
location:'California',
catchPhrase:'Be Greatful not Hateful',
favLanguage:'spanish',
specialty:'debugging code',
student:'jeffery'
});
console.log(george.favLanguage)
console.log(george.catchPhrase)
console.log(george.specialty)
console.log(george.student)