'use strict';
import { Person } from "./person";

export class Sponsor extends Person {
  private company: string; 
  private hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google'){
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }
  
  introduce() {
    console.log(`${this.getIntroText()} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents++;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
