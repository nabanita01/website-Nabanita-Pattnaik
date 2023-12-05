document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('registration-form').addEventListener('submit', function (event) {
	  event.preventDefault();
  
	  // Get user input
	  const name = document.getElementById('t1').value;
	  const email = document.getElementById('t2').value;
	  const uname = document.getElementById('t3').value;
	  const pwd = document.getElementById('t4').value;
	  const cpwd = document.getElementById('t5').value;
  
	  // Validate user input
	  if (name === '') {
		alert('Please enter your name');
		return;
	  }
  
	  if (!/[A-Za-z]/.test(name)) {
		alert('Name field required only alphabet characters');
		return;
	  }
  
	  if (email === '') {
		alert('Please enter your user email id');
		return;
	  }
  
	  if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
		alert('Invalid email');
		return;
	  }
  
	  if (uname === '') {
		alert('Please enter the user name.');
		return;
	  }
  
	  if (!/[A-Za-z]/.test(uname)) {
		alert('User name field required only alphabet characters');
		return;
	  }
  
	  if (pwd === '') {
		alert('Please enter Password');
		return;
	  }
  
	  if (cpwd === '') {
		alert('Enter Confirm Password');
		return;
	  }
  
	  if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(pwd)) {
		alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		return;
	  }
  
	  if (pwd !== cpwd) {
		alert('Password not Matched');
		return;
	  }
  
	  if (document.getElementById('t5').value.length < 6) {
		alert('Password minimum length is 6');
		return;
	  }
  
	  if (document.getElementById('t5').value.length > 12) {
		alert('Password max length is 12');
		return;
	  }
  
	  // Send email using EmailJS
	  emailjs.send('service_ebaanco', 'template_wdrukyj', {
		to_email: email,
		from_name: 'Facon 4 you Registration',
		message: 'Thank you for registering on Facon 4 you! Your account has been successfully created.'
	  })
		.then(function (response) {
		  console.log('Email sent successfully:', response);
  
		  // Redirect to Campuslife website
		  window.location = 'one time password.html';
		})
		.catch(function (error) {
		  console.error('Email sending failed:', error);
  
		  // Handle the error, e.g., show an error message to the user.
		});
    });
});
  