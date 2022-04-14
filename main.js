class Pessoa {
    #name
    #age

    constructor(pessoa) {
        this.#name = pessoa.name
        this.#age = pessoa.age
    }

    getName() {
        return this.#name
    }
    setName(value) {
        this.#name = value
    }
    getAge() {
        return this.#age
    }
    setAge(value) {
        this.#age = value
    }

}


const vetor = [

    new Pessoa({ name: 'Ricardo', age: 20 }),
    new Pessoa({ name: 'Renato', age: 21 }),
    new Pessoa({ name: 'Joao', age: 20 }),


]


function createPerson(name, age) {
    clear();

    const obj = new Pessoa({ name: name, age: age })
    vetor.push(obj)
    
    print()
}

function clear(){
    vetor.forEach((p, index) => {
        document.getElementById("li_" + index).remove();
        document.getElementById("but_" + index).remove();
    })
}


function print() {

    const tag = document.querySelector('ul')

    vetor.forEach((p, index) => {
        const liEL = document.createElement('li')
        const but = document.createElement("button")
        const labelButton = but.textContent = "Delete"

        liEL.textContent = `${p.getName()} - ${p.getAge()}`
        liEL.id = "li_" + index;
        but.id = "but_" + index;    

        tag.append(liEL, but)

        const elem = document.getElementById(but.id);

        elem.onclick =function() {
            clear()
            vetor.splice(index, 1)
            print()
        }
    });
}

function onload(){
    print();
}


