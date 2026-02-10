const form = document.getElementById("contatos");
const lista = document.getElementById("agendamentos");

document.addEventListener("DOMContentLoaded", function () {
  listarAgendamento();
});

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const agendamento = {
      nome: document.getElementById("name").value,
      sobrenome: document.getElementById("sobrenome").value,
      email: document.getElementById("iemail").value,
      telefone: document.getElementById("itel").value,
      data: document.getElementById("date").value,
      hora: document.getElementById("appointment").value,
    };
    const li = document.createElement("li");
    li.innerHTML = `<p> ${agendamento.nome}  ${agendamento.sobrenome}</p>
    <p> ${agendamento.email}  ${agendamento.telefone}</p>
     <p>${agendamento.data} as ${agendamento.hora}</p>`;

    lista.appendChild(li);
    salvaragendamento(agendamento);
    form.reset();

    alert("Agendamento realizado com sucesso");
  });
}

function salvaragendamento(agendamento) {
  const Agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  Agendamentos.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(Agendamentos));
}

function listarAgendamento() {
  const Agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  Agendamentos.forEach((element) => {
    const li = document.createElement("li");

    lista.appendChild(li);
  });
}
//  ideias
//  `<strong><p> Nome: ${element.nome}  ${element.sobrenome}</p></strong>
// <strong><p> Email: ${element.email} </p></strong>
// <p><strong> Numero: ${element.telefone}</p></strong>
// <strong><p>  Data: ${element.data} as ${element.hora}</p></strong>`;

// `<p> Nome: ${element.nome}  ${element.sobrenome}</p>
//        <p> Email: ${element.email} </p>
//        <p> Numero de Telefone: ${element.telefone}</p>
//        <p> Data: ${element.data} </p>
//        <p> Hora: ${element.hora}</p>`;



// <span id="menu" class="material-symbols-outlined" onclick="clickMenu()">menu</span>
//         <menu id="itens">
//         <ul class="nav-links">
//             <li class="link"><a href="#home">Início</a></li>
//             <li class="link"><a href="#agenda">Agendamentos</a></li>
//             <li class="link"><a id="lg" href="index2.html">Login</a></li>
            
//         </ul>
//         </menu>
//     </nav>
