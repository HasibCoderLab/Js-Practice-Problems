// ============|Practice Problem 01|=============
let DATA = "Secret Data";

class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    };
    viewData(){
        console.log("Data =  " , DATA);
        
    };

}
let student1 = new User ("Coder" , "coder@gmail.com");
let student2 = new User ("Rifat" , "Rifat.01@gmail.com");

let teacher1 = new User ("Adam" , "adamTeach@gmail.com");