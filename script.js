

const form = document.getElementById("contatos");
const lista = document.getElementById("agendamentos");

document.addEventListener('DOMContentLoaded', function() {
  listarAgendamento();
});


form.addEventListener("submit", function (event) {
  event.preventDefault();

const agendamento ={
   nome: document.getElementById("name").value,
   sobrenome: document.getElementById("sobrenome").value,
   email: document.getElementById("iemail").value,
   telefone: document.getElementById("itel").value,
   data: document.getElementById("date").value,
   hora: document.getElementById("appointment").value
};
  const li = document.createElement('li');
    li.innerHTML = 
    `<p> ${agendamento.nome}  ${agendamento.sobrenome}</p>
     <p>${agendamento.data} as ${agendamento.hora}</p>`;

    lista.appendChild(li);
    salvaragendamento(agendamento);
    form.reset();

});

function salvaragendamento(agendamento) {
  const Agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  Agendamentos.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(Agendamentos));
}

function listarAgendamento() {
  const Agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];


 
    Agendamentos.forEach(element => {
      const li = document.createElement('li');
      li.innerHTML = 
      `<p> ${element.nome}  ${element.sobrenome}</p>
      <p>${element.data} as ${element.hora}</p>`;

      lista.appendChild(li);
    });

}
