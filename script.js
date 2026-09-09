// ========================================
// NOVA WELCOME SCREEN
// ========================================

window.addEventListener("load", function () {

    const welcomeScreen =
        document.getElementById("welcome-screen");

    if (welcomeScreen) {

        setTimeout(function () {

            welcomeScreen.classList.add("hide");

        }, 3500);

    }

});


// ========================================
// QUICK ADMISSION FORM
// ========================================

const quickForm =
    document.getElementById("quickAdmissionForm");

if (quickForm) {

    quickForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const message =
            document.getElementById("quickMessage");

        const data = {

            name:
                document.getElementById("quickName").value,

            email:
                document.getElementById("quickEmail").value,

            phone:
                document.getElementById("quickPhone").value,

            course:
                document.getElementById("quickCourse").value

        };


        message.textContent = "Submitting...";


        try {

            const response = await fetch("/api/admission", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });


            const result = await response.json();


            if (result.success) {

                message.textContent =
                    "Application submitted successfully!";

                quickForm.reset();

            } else {

                message.textContent =
                    result.message || "Something went wrong.";

            }

        } catch (error) {

            console.error(error);

            message.textContent =
                "Unable to connect to server.";

        }

    });

}


// ========================================
// FULL ADMISSION FORM
// ========================================

const admissionForm =
    document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const message =
            document.getElementById("admissionMessage");


        const data = {

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value,

            phone:
                document.getElementById("phone").value,

            course:
                document.getElementById("course").value,

            qualification:
                document.getElementById("qualification").value,

            address:
                document.getElementById("address").value

        };


        message.textContent = "Submitting application...";


        try {

            const response = await fetch(
                "/api/admission",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );


            const result = await response.json();


            if (result.success) {

                message.textContent =
                    "✓ Application submitted successfully!";

                admissionForm.reset();

            } else {

                message.textContent =
                    result.message ||
                    "Application failed.";

            }

        } catch (error) {

            console.error(error);

            message.textContent =
                "Unable to connect to server.";

        }

    });

}