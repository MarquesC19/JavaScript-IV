// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak() {
console.log( `Hello my name is ${this.name}, I am from ${this.location}`);
    }

    class Intructor extends Person{
        constructor(instructionAttrs){
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
      }
      grade(student, subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`);
      }
    }

    class student extends Person{
    constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground=student.Attrs.perviousBackground;
    this.className = studentAttrs.className;
    this.favSubjects=StudentAttrs.FavSubjects;
    this.grade = studentsAttrs.grade;
    }
    

    listSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
      }
    }

    class ProjectManager extends instructor{
        constructor(managerAttrs) {
    super(managerAttrs);
    this.gradClassName = managerAttrs.gradClassName;
    this.FavInstructor = managerAttrs.FavInstructor;
    }
}
standUp(channel) {
  console.log(`${this.name} announces to ${channel}, @channel standy times!`);
}
debugsCode(student, subject) {
  console.log(`${this.name} debugs ${student}'s code on ${subject}`);
}
}