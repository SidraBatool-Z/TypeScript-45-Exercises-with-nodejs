//No Users

let userNames:string[]=["Dave","Fizz","Admin","Taha","Bella"];
userNames=[];


if(userNames.length===0){
    console.log("We need to find some users!");
}
else{
   //using for of loop
    for(let username of userNames){
        if(username==="Admin"){
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
};