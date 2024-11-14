document.addEventListener('DOMContentLoaded', function () {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentsList = document.getElementById('studentsList');

    if (students.length === 0) {
        document.getElementById('no_record').style.display = 'block';
        document.getElementById('no_record').style.backgroundColor='#368475';
    } else {
        document.getElementById('no_record').style.display = 'none';

        for (let i = 0; i < students.length; i++) {
            let student=students[i];
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';

            studentCard.innerHTML = `
                <div class="student-info">
                    <div>
                        <p><strong>Name:</strong> ${student.fullName}</p>
                        <p><strong>Age:</strong> ${student.age}</p>
                        <p><strong>Gender:</strong> ${student.gender}</p>
                        <p><strong>Address:</strong> ${student.address}</p>
                        <p><strong>Contact:</strong> ${student.contact}</p>
                        <p><strong>Other Info:</strong> ${student.otherInfo}</p>
                    </div>
                </div>
                <div class="actions">
                    <button class="btn btn-edit">Edit</button>
                    <button class="btn btn-delete" onclick="deleteStudent(${i})">Delete</button>
                </div>
            `;

            studentsList.appendChild(studentCard);
            }
    }
});

function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index,1);
    localStorage.setItem('students', JSON.stringify(students));
    location.reload();
}
