export class Student {
    studentId : Number;
    firstName: String;
    lastName : String;
    age : number;
    studyField : String;
    university : String;
    phone : number ;
    constructor(  firstName: String, lastName : String,  age : number,  studyField : String, university : String, phone : number )
    {
      this.firstName= firstName,
      this.lastName= lastName,
      this.age= age;
      this.studyField= studyField;
      this.university= university;
      this.phone = phone;
    }
  }