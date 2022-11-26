// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// validate email and password function start
var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate() {
  var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var psr = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


  if (res.test(mail.value) != "1") {
    window.alert("Email Is Invalid");
    return false;
  }
  else if (psr.test(pswd.value) != "1") {
    window.alert("Password Is Invalid, try again");
    window.alert("password should contain atleast one number and one special character");

    return false;
  }
  else {
    window.alert("validation Success");
    return true;
  }

};
// validate email and password function end

// phone no validate function start
var smail = document.getElementById("semail");
var spswd = document.getElementById("password1");
var spswd2 = document.getElementById("password2");
var phone = document.getElementById("phone");

function svalidate() {
  var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  if (res.test(smail.value) != "1") {

    window.alert("Email Is Invalid");
    return false;
  }
  else if (phoneno.test(phone.value) != "1") {
    window.alert("Please enter a valid phone number :");
    return false;
  }
  else if (psr.test(spswd.value) != "1") {
    window.alert("Password Is Invalid");
    window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
    window.alert("try again");
    return false;
  }
  else if (spswd.value != spswd2.value) {
    window.alert("Passwords Doesnt Match, Please Re-enter :");
    return false;
  }
  else {
    window.alert("validation Success");
    return true;
  }

};// phone no validate function end

// password stregth function start
$(document).ready(function () {

  $('#password1').on('keyup', function () {

    let textElement = $(this).val()
    let strength = 0

    $('#typepass').find('h4').html(`Your Password: ${textElement}`)

    if (textElement.length > 0) {
      let sizeElements = textElement.length

      if (sizeElements > 10) {

        strength += 30

      } else {
        let calcMath = (sizeElements * 2)

        strength += calcMath

      }

    }

    let lowerCase = new RegExp(/[a-z]/)
    if (lowerCase.test(textElement)) {
      strength += 16
    }

    let upperCase = new RegExp(/[A-Z]/)
    if (upperCase.test(textElement)) {
      strength += 18
    }

    let regularNumber = new RegExp(/[0-9]/i)
    if (regularNumber.test(textElement)) {
      strength += 16
    }

    let specialChars = new RegExp(/[^a-z0-9]/i)
    if (specialChars.test(textElement)) {
      strength += 20
    }

    //Function to produce result
    let renderResult = (strengthData, color) => {
      return $('#strengthResult').html(
        `
                          
            <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
            </div>`
      )
    }

    if (strength < 21) {
      renderResult(strength, 'danger')//red very weak password
    } else
      if (strength > 20 && strength < 41) {
        renderResult(strength, 'warning')//orange weak password
      } else
        if (strength > 40 && strength < 61) {
          renderResult(strength, 'secondary')//medium password
        } else
          if (strength > 60 && strength < 81) {
            renderResult(strength, 'info')// strong password
          } else {
            renderResult(strength, 'success')//very strong password
          }



  });

});
// password stregth function end