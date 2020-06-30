//Return user email
let loggedEmail= document.getElementById("modalLRInput10");
//Return user email
let loggedPassword= document.getElementById("modalLRInput11");
//New user Name
let name = document.getElementById("modalLRInput12");

//New user Email
let email = document.getElementById("modalLRInput13");

//New user Mobile Number
let mob = document.getElementById("modalLRInput14");

//New user Password
let pass = document.getElementById("modalLRInput15");

// Modal close
let modal = document.getElementById("modalLRForm");

// form All field validation
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
function validationAll()
{
 if(name.value >=1 || email.value.match(mailformat)  || mob.value.match(phoneno) || pass.value.match(passw))
 {
    submitForm();  

 }else{
    alert("Please Fill All the fiels Correctly")
 }
}

function validateName(){

    if(name.value.length>0){
        name.style.borderColor = "green";
    }
    else if(name.value.length==0){
        name.style.borderColor = "red";
    }     
}
function validateEmail(){
    
    if(email.value.match(mailformat))
    {
        email.style.borderColor = "green";
    }
    else
    {
        email.style.borderColor = "red";
    }
    
}
function validateMob(){
    
    if(mob.value.match(phoneno))
        {
            mob.style.borderColor = "green";
        }
      else
        {
            mob.style.borderColor = "red";
        }
}
function validatePass(){
   
    if(pass.value.match(passw)) 
    { 
    pass.style.borderColor = "green";
    }
    else
    { 
    pass.style.borderColor = "red";
    }
}

//Submit Button

function submitForm(){
    
//  main.js 
   
// POST request using fetch() 
fetch("https://5ef0e77d1faf160016b4d198.mockapi.io/signupData", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        Name: name.value, 
        Email: email.value, 
        Mobile: mob.value,
        password: pass.value,
        id: mob.value
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json));
alert("Hi "+ name.value+" Welcome to HUNGER");

document.getElementById("modalLRForm").style.modal="hide";
localStorage.setItem("userName", name.value);
            location.reload();
sendEmail();

}


// get method
function loginForm(){
    //  GET request using fetch() 
fetch("https://5ef0e77d1faf160016b4d198.mockapi.io/signupData") 
    
// Converting received data to JSON 
.then(response => response.json()) 
.then(json => { 
   
    // Loop through each data and add a table row 
    // json.forEach(user => { 
        for(let i=0;i<= json.length;i++)
        {
         if(loggedEmail.value == json[i].Email && loggedPassword.value == json[i].password)
        {
            localStorage.setItem("userName", json[i].Name);
            location.reload();
            document.getElementById("modalLRInput10").style.borderColor="green";
            document.getElementById("modalLRInput11").style.borderColor="green";
            document.getElementById("ErrorMessage").style.display="none";
            document.getElementById("modalLRForm").style.modal="hide";
            document.getElementById("successMessage").style.display="block";
            document.getElementById("successMessage").innerHTML="Hi <b>"+json[i].Name+"</b> You have logged in successFully";
            console.log("succ");
            break;
            // return console.log("Hi "+ user.Name+ " You have logged in successFully");
        }
        else{
            console.log("Pleae Enter the valid Password");
            document.getElementById("modalLRInput10").style.borderColor="red";
            document.getElementById("modalLRInput11").style.borderColor="red";
            document.getElementById("ErrorMessage").style.display="block";
            document.getElementById("ErrorMessage").innerHTML="Please Enter the valid <b>Username</b> and <b>Password</b>";
            console.log("fail");
        }


// if(user.Email=== loggedEmail && user.password=== loggedPassword)
// {
//     alert("loggedIn Sucessfully");
// } 
    //  logInData= user;
    } 
    }); 

}
function setUserName() {
    let setUser = localStorage.getItem("userName");
    document.getElementById("myLoginInfo").innerText= "Hi "+setUser;
    document.getElementById("myLoginInfo").style.cursor="not-allowed";
    // document.getElementById("logoutID").style.display="none";
}

function logOutID(){
    console.log("logout called");
    localStorage.removeItem("userName");
    location.reload();
    document.getElementById("myLoginInfo").innerText= "Login Signup";
    
}

//Send Email

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "wehungerfoods@gmail.com",
	Password : "Ankur@12345",
	To : email.value,
	From : "wehungerfoods@gmail.com",
	Subject : "Welcome to HUNGER",
    Body : "Hi "+name.value+",<br> Welcome to Hunger.<br> We look forward to sharing our food and services with you and your family.<br> <b>Note:</b> We  have exciting <b>80%</b> off for your 1st 5 order.<br><br> We would like to assure you that our food and services<br> will meet you high standards and suit your personal tastes.<br> For more Information you can reachout to us<br> <b>Email:</b> <a href='#'>wehungerfoods@gmail.com</a><br> <b>Contact No:</b> <a href='#'>+91 8109961022</a> <br><br> Warm Welcome<br>HUNGER" ,
	})
}
function getLocalStrorageValue()
{
    
    let localValue= localStorage.getItem("userName");
    if(localValue!=null)
    {
        document.getElementById("logoutID").style.display="block";
        setUserName();
    }else
    {
        document.getElementById("myLoginInfo").innerText= "Login Signup"; 
        document.getElementById("logoutID").style.display="none";
    }
}
getLocalStrorageValue();
