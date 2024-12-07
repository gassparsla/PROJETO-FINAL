function getCadastros() {
    let cadastros = localStorage.getItem('cadastros');
    if (cadastros) {
        return JSON.parse(cadastros);
    } else {
        return [];
    }
}

function saveCadastros(cadastros) {
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

function updateTabela() {
    const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    const cadastros = getCadastros();
    cadastros.forEach(cadastro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cadastro.nome}</td>
            <td>${cadastro.email}</td>
            <td>${cadastro.telefone}</td>
        `;
        tabela.appendChild(tr);
    });
}

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const novoCadastro = { nome, email, telefone };

    const cadastros = getCadastros();
    cadastros.push(novoCadastro);

    saveCadastros(cadastros);

    updateTabela();

    document.getElementById('formCadastro').reset();
});

updateTabela();
