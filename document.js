document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {

        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        } else {
            thumbnailElement.className = "";
        }
    });

    function validateForm() {
        let isValid = true;

	const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

	
        document.getElementById("nameError").style.display = "none";
        document.getElementById("emailError").style.display = "none";

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            document.getElementById("nameError").style.display = "block";
            isValid = false;
	}

	
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required.";
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        }

	return isValid;
    }

});


