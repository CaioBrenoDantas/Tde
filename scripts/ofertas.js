document.addEventListener("DOMContentLoaded", function() {
    const produtosContainer = document.querySelector(".produtos-container");

    // Função para carregar os produtos da API
    async function carregarProdutos() {
        try {
            const response = await fetch('http://localhost:3000/api/produtos');
            const produtos = await response.json();

            if (produtos.length > 0) {
                produtos.forEach(produto => {
                    // Exibir apenas produtos com desconto
                    if (produto.desconto > 0) {
                        const produtoDiv = document.createElement("div");
                        produtoDiv.classList.add("venda-item");

                        const precoComDesconto = (produto.preco * (1 - produto.desconto / 100)).toFixed(2);

                        produtoDiv.innerHTML = `
                            <img src="${produto.imagem}" alt="${produto.nome}">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}</p>
                            <p class="preco-original">De: R$ ${produto.preco}</p>
                            <p>Para: R$ ${precoComDesconto}</p>
                            <button>Comprar</button>
                        `;

                        produtosContainer.appendChild(produtoDiv);
                    }
                });
            } else {
                produtosContainer.innerHTML = "<p>Nenhum produto disponível no momento.</p>";
            }
        } catch (error) {
            console.error("Erro ao carregar os produtos:", error);
            produtosContainer.innerHTML = "<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>";
        }
    }

    carregarProdutos();
});
