class Course{
    id;
    name;
    day;
    hourStart;
    hourEnd;

    constructor(id, name, subject, day, Start, End){
        this.id = id;
        this.name = name;
        this.day = day;
        this.hourStart = Start;
        this.hourEnd = End;
    }

    modificar(name, day, Start, End){
        this.name = name;
        this.day = day;
        this.hourStart = Start;
        this.hourEnd = End;
    }

    eliminar(){
        this.id = null;
        this.id = null;
        this.name = null;
        this.day = null;
        this.hourStart = null;
        this.hourEnd = null;
    }

    get Name() {
        return this.name
    }

    get Day() {
        return this.day
    }

    get Start() {
        return this.hourStart
    }

    get End() {
        return this.hourEnd
    }
}