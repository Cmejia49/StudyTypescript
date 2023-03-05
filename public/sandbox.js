"use strict";
class developer {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    getNameAndAge() {
        console.log(`developer name is  ${dev.name} age of ${dev.age}`);
    }
}
const dev = new developer("chrisss", 132);
dev.getNameAndAge();
