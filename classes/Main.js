
//Call Buttons
const btnAddStudent = document.getElementById('AddStudent');
const btnModifyStudent = document.getElementById('ModifyStudent');
const btnDeleteStudent = document.getElementById('DeleteStudent');
const btnAddSubject = document.getElementById('AddSubject');
const btnModifySubject = document.getElementById('ModifySubject');
const btnDeleteSubject = document.getElementById('DeleteSubject');
const btnAddCourse = document.getElementById('AddCourse');
const btnModifyCourse = document.getElementById('ModifyCourse');
const btnDeleteCourse = document.getElementById('DeleteCourse');

//Call Inputs Modals Student + Subjects + Courses
const NameStudent = document.getElementById('NameStudent');
const ProgramStudent = document.getElementById('ProgramStudent');
const CodeModify = document.getElementById('CodeModify');
const CodeDelete = document.getElementById('CodeDelete');
const SubjectName = document.getElementById('SubjectName');
const SubjectEsp = document.getElementById('SubjectEsp');
const SubjectDur = document.getElementById('SubjectDur');
const SubjectCre = document.getElementById('SubjectCre');
const CodeSubjectMd = document.getElementById('SubjectModify');
const CodeSubjectDt = document.getElementById('SubjectDelete');

//Call Inputs Modal Schedule
const SubjectReview = document.getElementById('Subjects');
const ShowNameC = document.getElementById('Subject');
const ShowEspC = document.getElementById('Especiality');
const ShowDurC = document.getElementById('Duration');
const ShowCreC = document.getElementById('Credits');
const TableStudents = document.getElementById('Table');


let Students = [];
let Subjects = [];
let Courses = [];
let cont = Students.length;

btnAddStudent.addEventListener('click', function(){
    if(NameStudent.value == '' || ProgramStudent.value == ''){
        alert('Fill all the blank spaces');
    }else{
        const student = new Student(cont.toString(), NameStudent.value.toUpperCase(), ProgramStudent.value.toUpperCase());    
        Students.push(student);
        console.log(Students);
        cont++;
        localStorage.setItem('Students', JSON.stringify(Students));
    }
});

btnModifyStudent.addEventListener('click', function(){
    const DivDatos = document.getElementById('DatesStd');
    if(CodeModify.value == ''){
        alert('Type a Student code');
    }else{
        Students.forEach(function(x){
            if(CodeModify.value == x.Code){
                DivDatos.innerHTML = '';
                const LblName = document.createElement('label');
                LblName.innerHTML = 'Name';
                const InpName = document.createElement('input');
                InpName.value = x.Name;
                const LblEsp = document.createElement('label');
                LblEsp.innerHTML = 'Career';
                const InpCar = document.createElement('input');
                InpCar.value = x.Career;
                const BtnMdf = document.createElement('button');
                BtnMdf.textContent = 'Modify';
                BtnMdf.addEventListener('click', function(){
                    x.modificar(InpName.value, InpCar.value);
                    alert('Estudiante Modificado');
                    console.log(x);
                    Students[parseInt(x.Code)] = x;
                    console.log(Students[parseInt(x.Code)]);
                })
                DivDatos.appendChild(LblName);
                DivDatos.appendChild(InpName);
                DivDatos.appendChild(LblEsp);
                DivDatos.appendChild(InpCar);
                DivDatos.appendChild(BtnMdf);
                localStorage.setItem('Students', JSON.stringify(Students));
            }
        });

    };
});

btnDeleteStudent.addEventListener('click', function(){
    if(CodeDelete.value == ''){
        alert('Type a Student code');
    }else{
        Students.forEach(function(x){
            if(CodeDelete.value == x.Code){
                x.eliminar();
                alert('Estudiante Eliminado');
                localStorage.setItem('Students', JSON.stringify(Students));
            }
        })
    }
});

let ContSubject = 0;
btnAddSubject.addEventListener('click', function(){
    if(SubjectName.value == '' || SubjectEsp.value == '' || SubjectDur.value == '' || SubjectCre.value == ''){
        alert('Fill all the blank spaces');
    }else{
        alert('Add Subject')
        const subject = new Subject(ContSubject.toString, SubjectName.value.toUpperCase(), SubjectEsp.value.toUpperCase(), SubjectDur.value.toUpperCase(), SubjectCre.value.toUpperCase());
        Subjects.push(subject);
        cont++;
        localStorage.setItem('Subjects', JSON.stringify(Subjects));
    }
})

btnModifySubject.addEventListener('click', function(x) {
    DivDatosSub.innerHTML = '';
    const LblName = document.createElement('label');
    LblName.innerHTML = 'Name';
    const InpName = document.createElement('input');
    InpName.value = x.Name;
    const LblEsp = document.createElement('label');
    LblEsp.innerHTML = 'Career';
    const InpCar = document.createElement('input');
    InpCar.value = x.Career;
    const BtnMdf = document.createElement('button');
    BtnMdf.textContent = 'Modify';
    BtnMdf.addEventListener('click', function(){
        x.modificar(InpName.value, InpCar.value);
        alert('Estudiante Modificado');
        console.log(x);
        Students[parseInt(x.Code)] = x;
        console.log(Students[parseInt(x.Code)]);
    })
    DivDatos.appendChild(LblName);
    DivDatos.appendChild(InpName);
    DivDatos.appendChild(LblEsp);
    DivDatos.appendChild(InpCar);
    DivDatos.appendChild(BtnMdf);
    localStorage.setItem('Students', JSON.stringify(Students));
})

function UpdatesSubjects() {
    Subjects.forEach(function(x) {
        CodeSubjectMd.innerHTML += `<option value="${x.Name}" selected>${x.Name}</option>`;
    })
    
}


window.addEventListener('load', function() {
    const LoadStd = JSON.parse(localStorage.getItem('Students'));
    if(LoadStd != null){
        cont = Students.length;
        LoadStd.forEach(function(x){
            const student = new Student(x.id, x.name, x.career)
            Students.push(student)
        })
    }else{
        Students = [];
    }
    const LoadSub = JSON.parse(localStorage.getItem('Subjects'));
    if(LoadSub != null){
        ContSubject = Students.length;
        LoadSub.forEach(function(x){
            const subject = new Subject(x.Code, x.name, x.especiality, x.time, x.credits)
            Subjects.push(subject)
        })
        UpdatesSubjects();
        console.log(Subjects);
    }else{
        Subjects = [];
    }
})
