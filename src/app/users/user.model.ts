export class User {
    id: Number;
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    userName: String;
    password: String;
    role: String;

   constructor(obj:any = {}){
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.email = obj.email;
    this.phone = obj.phone;
    this.userName = obj.userName;
    this.password = obj.password;
    this.role = obj.role;
   } 
}