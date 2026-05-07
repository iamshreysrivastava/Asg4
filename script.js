let students = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const address = document.getElementById('studentAddress').value;
    const batch = document.getElementById('studentBatch').value;

    if (name && address && batch) {
        
        const newStudent = { name, address, batch };
        students.push(newStudent);
        
        
        document.getElementById('studentName').value = "";
        document.getElementById('studentAddress').value = "";
        document.getElementById('studentBatch').value = "";

        updateUI();
    } else {
        alert("Please fill all fields!");
    }
}

function deleteLastRecord() {
    if (students.length === 0) return;

    const confirmDelete = confirm("Are you sure you want to delete the last record?");
    if (confirmDelete) {
        students.pop();
        updateUI();
    }
}

function updateUI() {
    const listElement = document.getElementById('studentList');
    listElement.innerHTML = "";

    let b002Count = 0;

    students.forEach((student) => {
        const li = document.createElement('li');
        li.textContent = `${student.name} (${student.batch})`;
        listElement.appendChild(li);

        if (student.batch.toUpperCase() === "B002") {
            b002Count++;
        }
    });

    document.getElementById('totalCount').textContent = students.length;
    document.getElementById('batchCount').textContent = b002Count;
}

document.getElementById('studentBatch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addStudent();
    }
});