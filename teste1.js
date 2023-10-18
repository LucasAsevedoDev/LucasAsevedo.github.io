function addClient() {

    const listaDeContatos = document.getElementById("Lista-de-clientes")

    const h4 = document.createElement("h4")
    h4.innerText = "Cliente ok"

    const ul = document.createElement("ul")

    const nomeNaLista = document.createElement("li")
    nomeNaLista.innerText = "Nome do cliente: "
    const inputNome = document.createElement("input")
    inputNome.type = "text"
    inputNome.name = "Nome Completo"
    nomeNaLista.appendChild(inputNome)
    ul.appendChild(nomeNaLista)
    ul.appendChild(document.createElement("br"))

    const telefoneLi = document.createElement("li")
    telefoneLi.innerText = "Telefone do cliente:"
    const inputTelefone = document.createElement("input")
    inputTelefone.type = "number"
    inputTelefone.name = "Telefone"
    telefoneLi.appendChild(inputTelefone)
    ul.appendChild(telefoneLi)
    ul.appendChild(document.createElement("br"))

    const enderecoLi = document.createElement("li")
    enderecoLi.innerHTML = '<label for"endereco">Endereço do cliente: </label>'
    const inputEndereco = document.createElement("input")
    inputEndereco.type = "text"
    inputEndereco.name = "endereco"
    inputEndereco.id = "endereco"
    enderecoLi.appendChild(inputEndereco)
    ul.appendChild(enderecoLi)
    ul.appendChild(document.createElement("br"))

    listaDeContatos.append(h4, ul)
}

function removeClient() {

    const listaDeContatos = document.getElementById("Lista-de-clientes")

    const titulos = document.getElementsByTagName("h4")
    const contatos = document.getElementsByTagName("ul")

    listaDeContatos.removeChild(titulos(titulos.length - 1))
    listaDeContatos.removeChild(contatos(contatos.length - 1))
    
}