const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pets = document.getElementById('pets').value;    

    let data = {
        name,
        email,
        pets,  
    }
   
    let convert = JSON.stringify(data);
    localStorage.setItem('lead', convert);    
})
 

document.getElementById("clicar").onclick = function clicar() {
    window.location.href = "pagetwo.html"

}