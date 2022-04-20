
import {qs} from './helpers/dom.js'
import { EL } from './helpers/domevents.js'
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
    if(vetor == null) undefined || null
    else{
    vetor.forEach((p, index) => {
        document.getElementById("li_" + index).remove();
        document.getElementById("but_" + index).remove();
    })
}}


function h1(){
    const tag2 = document.getElementById("title")
    const h1EL = document.createElement('h1')
    h1EL.textContent = "Exercicio listagem"
    tag2.append(h1EL)
    h1EL.className = "text-center"
}
h1()
function print() {



    
    const tag = qs('ul')
    

    vetor.forEach((p, index) => {
        const liEL = document.createElement('li')
        const but = document.createElement("button")
        const labelButton = but.textContent = "Delete"

        liEL.textContent = `${p.getName()} - ${p.getAge()}`
        liEL.id = "li_" + index;
        but.id = "but_" + index;    

        but.className = "btn btn-danger"
        liEL.classList ="font-weight-bold"

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


// ----------

const form = document.querySelector( 'form' )


function e(evt){
    evt.preventDefault();
    if(evt.target.name.value!=='' && evt.target.age.value!=='' && evt.target.age.value >0  && evt.target.age.value <121)
        createPerson(evt.target.name.value, evt.target.age.value)
        else{
            alert("Invalid information");
        } 
}


EL(form, 'submit', e)

onload()
