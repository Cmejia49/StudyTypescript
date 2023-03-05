interface Ideveloper{

    getNameAndAge():void;
}


class developer implements Ideveloper {
    
    name: string;
    age: number;
    constructor(name:string,age:number) {
        this.age = age;
        this.name = name;

    }
    getNameAndAge(): void {
        console.log(`developer name is  ${dev.name} age of ${dev.age}`);
    }
}

const dev = new developer("chrisss",132);
dev.getNameAndAge();