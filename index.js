
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
