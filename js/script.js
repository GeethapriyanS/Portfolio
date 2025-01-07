    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    let darkmode = document.querySelector('#darkmode');
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration
const appSetting = { 
    databaseURL: "https://portfolio-9504c-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const messagesRef = ref(database, "Messages");

// Form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Capture form data
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Create an object to store the data
    const messageData = {
        name,
        email,
        message,
        timestamp: Date.now() // Optional: Add a timestamp
    };

    // Push the data to Firebase
    push(messagesRef, messageData)
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset(); // Reset the form
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        });
});
