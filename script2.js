const forms = document.getElementById('adiministrador');
const emailAdm = "admin@123"
const senhaAdm = "admin@123"

forms.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emails').value;
    const senhaInput = document.getElementById('passwords').value;
    if (emailInput === emailAdm && senhaInput === senhaAdm) {

        window.location.href = 'index3.html'; 
        alert ("Acesso Concedido");
    } else {
        alert("Acesso Negado");
    }
});

