const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const  password2= document.getElementById('password2');



function checkInputs() {
	// sget the values from the inputs
	const usernamevalue = username.value;
	const emailvalue = email.value.trim();
	const passwordvalue = password.value.trim();
	const password2value = password2.value.trim();
}

form.addEventListener('click',function(e){
	e.preventDefault();
	
	console.log("Hey");
})