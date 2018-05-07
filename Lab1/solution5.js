function Person(name) {
    this.name = name;
}

let TeacherA = new Person("Asaad"), TeacherB = new Person("Sulav");
Person.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

TeacherA.teach("MWA");
TeacherB.teach("Android");