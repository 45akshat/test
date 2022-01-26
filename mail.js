const firebaseConfig = {
    //   copy your firebase config informations

    apiKey: "AIzaSyAovwjLBUwsPnIs5KIBIwPFwIR8sFxXt7o",
    authDomain: "contactform-7b800.firebaseapp.com",
    databaseURL: "https://contactform-7b800-default-rtdb.firebaseio.com",
    projectId: "contactform-7b800",
    storageBucket: "contactform-7b800.appspot.com",
    messagingSenderId: "523743012882",
    appId: "1:523743012882:web:c8e53ce5428bf1a5af50cb"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var country = getElementVal("country");
    var subject = getElementVal("subject");

    saveMessages(fname, lname, country, subject);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (fname, lname, country, subject) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        fname: fname,
        lname: lname,
        country: country,
        subject: subject,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};