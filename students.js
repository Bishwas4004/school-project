document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const studentInfo = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
        contact: document.getElementById('contact').value,
        otherInfo: document.getElementById('otherInfo').value
    };
    console.log(studentInfo)

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentInfo);
    localStorage.setItem('students', JSON.stringify(students));

    window.location.href = '/';
});
