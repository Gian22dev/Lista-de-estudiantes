let studentList = []

let HTMLstudentList = document.getElementById("studentOutput")

let HTMLstudentName = document.getElementById("studentName")
let HTMLstudentAge = document.getElementById("studentAge")

function actualizarHTML() {
    HTMLstudentList.innerHTML = ""

    studentList.forEach((value, index) => {
        let student = document.createElement("div")
        student.className = "student"
        student.onclick = () => {
            deleteStudent(index)
        }
        let studentName = document.createElement("h4")
        studentName.textContent = `Nombre: ${value.name}`
        student.appendChild(studentName)
        let studentAge = document.createElement("h4")
        studentAge.textContent = `Edad: ${value.age}`
        student.appendChild(studentAge)
        HTMLstudentList.appendChild(student)
    })
}

function addStudent() {
    let studentName = HTMLstudentName.value
    let studentAge = Number(HTMLstudentAge.value)
    if (studentName.trim() != "") {
        studentList.push({
            name: studentName,
            age: studentAge
        })
        actualizarHTML()
    }
    console.log(studentList)
}

function deleteStudent(index) {
    studentList.splice(index, 1)
    actualizarHTML()
    console.log(studentList)
}