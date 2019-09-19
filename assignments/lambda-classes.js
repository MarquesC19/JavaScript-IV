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

    class student extends Person{
    constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground=student.Attrs.perviousBackground;
    this.className = studentAttrs.className;
    this.favSubjects=StudentAttrs.FavSubjects;
    this.grade = studentsAttrs.grade;
    }
    
    class ProjectManager extends instructor{
        constructor(managerAttrs) {
    super(managerAttrs);
    this.gradClassName = managerAttrs.gradClassName;
    this.FavInstructor = managerAttrs.FavInstructor;
    }