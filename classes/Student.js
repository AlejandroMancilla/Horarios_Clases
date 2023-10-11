class Student{
    id;
    name;
    career;

    constructor(id,name,career){
        this.id = id;
        this.name = name
        this.career = career
    }

    agregar(id,name,career){
        this.id = id;
        this.name = name
        this.career = career
    }

    modificar(name,career){
        this.name = name
        this.career = career
    }

    eliminar(){
        this.id = null
        this.name = null
        this.career = null
    }

    get Name() {
        return this.name
    }
}



