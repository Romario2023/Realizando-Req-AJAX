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



  /**
         * O status pode ser:
         * 0 -> ajax.readyState => Antes da conexão ser aberta
         * 1 -> ajax.readyState => Após abrir a conexão
         * 2 -> ajax.readyState => Os headers(cabeçalhos) foram recebidos
         * 3 -> ajax.readyState => Carregando o corpo da requisição
         * 4 -> ajax.readyState => O conteúdo(dados) está pronto para uso
         */