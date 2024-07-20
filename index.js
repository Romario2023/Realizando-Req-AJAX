//Link para obter dados do github=> https://api.github.com/users/nome

/**
 * AJAX (Asynchronous JavaScript and XML)
 * É uma técnica de interação do lado do cliente (navegador) com o lado do servidor (servidor)
 * que permite que o navegador faça requisições para o servidor sem precisar recarregar todo a página
 * 
 * O AJAX é uma técnica comumente usada para atualizar partes do conteúdo de uma página web,
 * sem precisar recarregar todo o conteúdo da página.
 * 
 * A técnica AJAX consiste em enviar uma solicitação HTTP para o servidor, sem recarregar a página inteira.
 * O servidor responde com uma resposta HTTP e o navegador manipula essa resposta usando JavaScript.
 * Isso permite que o conteúdo da página web seja atualizado sem precisar recarregar a página inteira.
 * 
 * Existem duas abordagens principais para implementar AJAX:
 * 
 * 1) XMLHttpRequest: é uma API nativa do JavaScript que permite que você faça solicitações HTTP 
 *    para um servidor e receba as respostas usando JavaScript.
 * 
 * 2) Fetch API: é uma API moderna do JavaScript que permite que você faça solicitações HTTP para um servidor 
 *    e receba as respostas usando JavaScript. Ele é mais fácil de usar e fornece mais recursos do que XMLHttpRequest.
 */

let btn = document.querySelector('#btn')
let input = document.querySelector('input[name=github_user]')
let div = document.querySelector('#app')

btn.addEventListener('click', () => {
    //limpar o conteudo da div
    div.innerHTML = ''

    //Instanciando objeto ajax
    let ajax = new XMLHttpRequest()

    //open para abrir uma conexão e escolher o metodo que vai ser usado(get,post,put,delete)
    //Estamos usando a requisição GET para obter os dados
    ajax.open('GET', `https://api.github.com/users/${input.value}`)

    //Aqui estamos enviando null pois estamos usando o GET
    //Caso estivessemos usando o post, put ou delete, estariamos enviando o corpo da requisição
    ajax.send(null)

    ajax.onreadystatechange = () => {
        //Criar uma variavel txtNome, para receber o texto nome
        let txtNome = ''
        //Criar um elemento span
        let spanNone = document.createElement('span')


        /**
         * O status pode ser:
         * 0 -> ajax.readyState => Antes da conexão ser aberta
         * 1 -> ajax.readyState => Após abrir a conexão
         * 2 -> ajax.readyState => Os headers(cabeçalhos) foram recebidos
         * 3 -> ajax.readyState => Carregando o corpo da requisição
         * 4 -> ajax.readyState => O conteúdo(dados) está pronto para uso
         */
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                //Transformar os dados json para array
                usuario = JSON.parse(ajax.responseText)

                //Se o usuario possui nome
                if (usuario['name'] !== null) {
                    //Criando o meu texto com o nome do usuario
                    txtNome = document.createTextNode(usuario['name'])
                    //Criando a variavel para colocar a imagem do usuario
                    let img = document.createElement('img')
                    //Ira pegar o src com a foto do usuario encontrado
                    img.setAttribute('src', usuario['avatar_url'])
                    //Texto alternativo caso a imagem nao seja carregada, ira mostrandar o nome do usuario
                    img.setAttribute('alt', usuario['name'])
                    //Definindo uma largura da imagem
                    img.setAttribute('width', '45px')
                    //Definindo uma altura da imagem
                    img.setAttribute('height', '45px')

                    //Definindo a variavel img como filha da div
                    div.appendChild(img)
                } else {
                    //Caso nao encontre o usuario ira mostrar o aviso e o nome
                    txtNome = document.createTextNode(`O usuario  ${input.value} não tem nome`)

                }
                //Adiciona o texto que é o nome do usuario ao span
                spanNone.appendChild(txtNome)
                //Adiciona o span que é a imagem a div
                div.appendChild(spanNone)

                //limpar o input
                input.value = ''
            } else {
                txtNome = document.createTextNode(`Nao encontrei o usuario ${input.value}`)
                //Adiciona o texto que é o nome do usuario ao span
                spanNone.appendChild(txtNome)
                //Adiciona o span que é a imagem a div
                div.appendChild(spanNone)
            }
        }

    }
})
