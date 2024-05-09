function markAttendance() {
    console.log("Attendance marked!");
    const button = document.getElementById('button1');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Attendance Marked';
    button.parentNode.replaceChild(paragraph, button);
  
}


function writeLeave() {
    window.location.href = "write.html";
}

function viewAttendance() {
    let username = "shoaib balouch";
    let password = "104150";

    
    let url = `view.html?username=${username}&password=${password}`;

   
    window.location.href = url;
}
