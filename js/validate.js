//Simple Form Validation

//first I set the variables outside the function

var form = document.getElementById("formulario");

var name = document.getElementById("name");
var email = document.getElementById("email");
var check = document.getElementById("checkbox");
var message = document.getElementById("message");

//Here I declare a variable for the errors as they will be displayed in a list inside a div
var error = document.getElementById("error");

//Then I create an empty array where I can show the user what elements are missing directly in the document, without using an alert.
var errors=[];


//First of all I validate the letters
function validateLetters(x){
    
    expr = /^([a-zA-Z]{3,50})*$/; //This regular expression validates name, min 4 letters and max 50
    //This means that if the and it is valid, the function will return true. If not it will return false
    
    //I use the expression test when I want to find a match
    //Then, if it finds it it will return true. If not, false
    if(expr.test(x)){
        return true;
    }
    return false;
}


//In this function I will validate that the name of the user is not empty or invalid, as well as the comment
function validateName(e){ 
    
    /*
    Here I'm using a conditional to say that if the value of the name is empty or null (meaning that it doesn't have any type or value inside);
    a new <li> item will be added to the empty array errors. Then it will be shown in the webpage
    */
    
    if(name.value == "" || name.value == "null" ){
        console.log("The name is empty");
        errors.push("<li>Please log in with a valid name</li>");
        //With prevent default I make sure that the form will not submitted until it is validated
        e.preventDefault();
    }else {
        if (!validateLetters(name.value)) {
            console.log("Invalid name");
            errors.push("<li>Please log in with a valid name</li>");
            e.preventDefault();
        }else {
        return true;
        }
    }
		return false;
        
} //end validateName//


//In this function I validate the Email by using regular expressions 
function validateEmail(e) { 
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //This is a regular expression that help us validate e-mail format//
		if (email.value == "" || email.value == null) {
			console.log("Empty e-mail");
			errors.push("<li>Please write your email correctly</li>");
			e.preventDefault();
		}else {
			if (!expr.test(email.value)) {
				console.log("Invalid e-mail format");
				errors.push("<li>Please write your email correctly</li>");
				e.preventDefault();
			}else{
				return true;
			}
		}
		return false;
    
} //End validateEmail//



//Function to check the Terms & Conditions
function checkTerms(e) {
    //If  someone clicked on the checkbox, it will return true. 
	if (check.checked == true) {
		return true;
	} else {
		return false;
	}
} //End CheckTerms //


//This function validates the message written in the textarea
function validateMessage(e){
    if(message.value == "" || message.value == "null" ){
        console.log("The message is empty");
        errors.push("<li>Please write a comment</li>");
        //With prevent default I make sure that the form will not be submitted until it is validated
        e.preventDefault();
    }
}

//This function validates the whole form   
function validateForm(e){
    
        /*
        
        This is the most important part of the code because it shows the errors to the user in a listed div
        
        */
        
        /* Here, I am "inside" the HTML in the document and I'm going to add the <li> items according to the errors */
		error.innerHTML = "";
		errors = [];
        
        //Then I call the functions
		validateName(e);
		validateEmail(e);
        checkTerms(e);
		validateMessage(e);
    
        //This conditional means that if the array I created is empty (meaning there are no errors in the form), it will not show anything and the form will be submitted    
		if(errors.length == 0) {
			form.submit();
		} else{
            //But if it finds any error, they will be displayed as the result of an array 
			error.style.display = "block";
			for (i=0; i<errors.length; i++) {
				error.innerHTML += errors[i]; 
			}
		}
		
} //End validateForm//

//Here I'm using the addEventListener to register any kind of activity (for example, clicking the checkbox or the button)
check.addEventListener('click', checkbox);
form.addEventListener('submit', formulario);
