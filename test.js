document.addEventListener('DOMContentLoaded', function () {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    // console.log(localStorage.getItem('students'))
    const studentsTableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    

    if(students.length==0){
        const row = studentsTableBody.insertRow();
        document.getElementById('no_record').style.display ='block'
        document.getElementById('studentsTable').style ='display :none'
    }else{

    document.getElementById('no_record').style.display = 'none';
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const row = studentsTableBody.insertRow();
        
        
        row.insertCell(0).innerText = student.fullName;
        row.insertCell(1).innerText = student.age;
        row.insertCell(2).innerText = student.gender;
        row.insertCell(3).innerText = student.address;
        row.insertCell(4).innerText = student.contact;
        row.insertCell(5).innerText = student.otherInfo;
    }
    }

});
