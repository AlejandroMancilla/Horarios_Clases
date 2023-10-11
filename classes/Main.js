// Import Classes from Files
import {Student} from "classes\Student.js";
import {Course} from "classes\Course.js";

const oprimeme = document.getElementById('oprimeme')
const modal = document.getElementById('modal')
const modal_editar = document.getElementById('modal-editar')
const modal_eliminar = document.getElementById('modal-eliminar')

const input_1 = document.getElementById('input-1')
const input_2 = document.getElementById('input-2')
const input_1_m = document.getElementById('input-1-m')
const input_2_m = document.getElementById('input-2-m')
const add_button = document.getElementById('add-button')
const update_button = document.getElementById('update-button')
const delete_button = document.getElementById('delete-button')

let cont = 0;

add_button.addEventListener('click', () =>{
    if(input_1.value == '' || input_2.value == ''){
        alert('Fill all the blank spaces');
    }else{
        const student = new Student(cont,input_1.value,input_2.value);    
        console.log(student);
        cont++;
    }
    
    })


/* new_course_button.addEventListener('click', () =>{
    modal_añadir.style.display='block'
    }) */

oprimeme.addEventListener('click', () =>{
    modal.style.display='flex'
    })

function close_modal1() {
    modal.style.display='none'
}




update_button.addEventListener('click', () =>{
    student.modificar(cont,input_1_m,input_2_m)
    clean_inputs()
    console.log(student);
    })

delete_buttonaddEventListener('click', () =>{

    })


















