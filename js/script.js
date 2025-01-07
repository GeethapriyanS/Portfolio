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


    //php-code 

    // document.getElementById('contactForm').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the default form submission
    
    //     var email = this.email.value; // Get the email input value
    //     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
    
    //     // Validate the email format
    //     if (!emailPattern.test(email)) {
    //         alert('Please enter a valid email address.'); // Alert if invalid
    //         return; // Stop the form submission if the email is invalid
    //     }
    
    //     var formData = new FormData(this); // Create a FormData object
    
    //     fetch('send_email.php', {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json(); // Parse the JSON response
    //     })
    //     .then(data => {
    //         if (data.status === 'success') {
    //             alert(data.message); // Show success message
    //         } else {
    //             alert(data.message); // Show error message
    //         }
    //     })
    //     .catch(error => {
    //         alert('An error occurred. Please try again later.');
    //         console.error('Error:', error);
    //     });
    // });
    

//     <?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = "geethapriyansanmugam@gmail.com"; // Your email address
//     $subject = "New Contact Form Submission";
//     $body = "Name: $name\nEmail: $email\nMessage: $message";

//     if (mail($to, $subject, $body)) {
//         echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
//     } else {
//         echo json_encode(["status" => "error", "message" => "Email sending failed."]);
//     }
// } else {
//     http_response_code(405);
//     echo json_encode(["status" => "error", "message" => "Method not allowed."]);
// }
// ?>
