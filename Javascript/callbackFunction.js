function registerStudent(studentName, callback) {
  console.log(`Registering ${studentName}...`);

  // Simulate registration process
  setTimeout(() => {
    console.log(`${studentName} has been registered successfully.`);
    callback();
  }, 2000);
}

function sendWelcomeEmail() {
  console.log("Welcome email sent!");
}

registerStudent("Nahid", sendWelcomeEmail);