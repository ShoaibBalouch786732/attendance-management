function searchSpecific() {
    
    console.log("Searching specific students...");
    window.location.href = "./adminaccess/searchall.html";
}

function searchAll() {
    window.location.href = "./adminaccess/allstudent.html";
    console.log("Searching all students...");
   }   

function viewLoggedIn() {
    window.location.href = "./adminaccess/viewlogged.html";
    console.log("Viewing all logged-in students...");
}

function viewAttendance() {
    window.location.href = "./adminaccess/student.html";
    console.log("Viewing students attendance...");
}

function viewLeaves() {
    window.location.href = "./adminaccess/leave.html";
    console.log("Viewing leave applications...");
}
