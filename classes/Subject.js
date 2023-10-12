class Subject{
    code;
    name;
    especiality;
    time;
    credits;

    constructor(code,name,especiality,time,credits){
        this.code = code;
        this.name = name;
        this.especiality = especiality;
        this.time = time;
        this.credits = credits;
    }

    get Code() {
        return this.code
    }

    get Name() {
        return this.name
    }

    get Especiality() {
        return this.especiality
    }

    get Time() {
        return this.time
    }

    get Credits() {
        return this.credits
    }
}
