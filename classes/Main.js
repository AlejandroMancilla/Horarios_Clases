
//Call Buttons
const btnAddStudent = document.getElementById('AddStudent');
const btnModifyStudent = document.getElementById('ModifyStudent');
const btnDeleteStudent = document.getElementById('DeleteStudent');
const btnAddCourse = document.getElementById('AddCourse');
const btnModifyCourse = document.getElementById('ModifyCourse');
const btnDeleteCourse = document.getElementById('DeleteCourse');

//Call Inputs Modals Student + Courses
const NameStudent = document.getElementById('NameStudent');
const ProgramStudent = document.getElementById('ProgramStudent');
const CodeModify = document.getElementById('CodeModify');
const CodeDelete = document.getElementById('CodeDelete');
const CourseName = document.getElementById('CourseName');
const CourseEsp = document.getElementById('CourseEsp');
const CourseDur = document.getElementById('CourseDur');
const CourseCre = document.getElementById('CourseCre');
const CodeCourseMd = document.getElementById('CourseModify');
const CodeCourseDt = document.getElementById('CourseDelete');

//Call Inputs Modal Schedule
const CourseReview = document.getElementById('Courses');
const ShowNameC = document.getElementById('Course');
const ShowEspC = document.getElementById('Especiality');
const ShowDurC = document.getElementById('Duration');
const ShowCreC = document.getElementById('Credits');
const TableStudents = document.getElementById('Table');


let Students = [];
let cont = Students.length;

btnAddStudent.addEventListener('click', function(){
    if(NameStudent.value == '' || ProgramStudent.value == ''){
        alert('Fill all the blank spaces');
    }else{
        const student = new Student(cont.toString(), NameStudent.value, ProgramStudent.value);    
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


window.addEventListener('load', function() {
    const Load = JSON.parse(localStorage.getItem('Students'));
    console.log(Students);
    if(Load != null){
        cont = Students.length;
        Load.forEach(function(x){
            const student = new Student(x.id, x.name, x.career)
            Students.push(student)
        })
    }else{
        Students = [];
    }
})
