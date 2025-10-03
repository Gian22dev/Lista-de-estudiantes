let studentList = []

let HTMLstudentList = document.getElementById("studentOutput")

let HTMLstudentName = document.getElementById("studentName")
let HTMLstudentAge = document.getElementById("studentAge")
let HTMLstudentLikes = document.getElementById("studentLikes")

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
        let studentLikes = document.createElement("h4")
        studentLikes.textContent = `Gustos: ${value.likes}`
        student.appendChild(studentLikes)
        HTMLstudentList.appendChild(student)
    })
}

function addStudent() {
    let studentName = HTMLstudentName.value
    let studentAge = Number(HTMLstudentAge.value)
    let studentLikes = HTMLstudentLikes.value
    if (studentName.trim() != "" && studentLikes.trim() != "" && isNaN(studentName) == true && isNaN(studentLikes) == true){
        studentList.push({
            name: studentName,
            age: studentAge,
            likes: studentLikes
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