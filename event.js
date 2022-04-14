const form = document.querySelector( 'form' )

form.addEventListener('submit', (e) => {
   
    e.preventDefault();
    if(e.target.name.value!=='' && e.target.age.value!=='' && e.target.age.value >0  && e.target.age.value <121)
        createPerson(e.target.name.value, e.target.age.value)
        else{
            alert("Invalid information");
        }
});