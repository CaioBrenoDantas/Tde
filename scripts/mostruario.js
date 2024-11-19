// Arquivo: mostruario.js

document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os links de subcategorias
    const subcategoriaLinks = document.querySelectorAll(".subcategorias a");
    const produtosFiltradosContainer = document.querySelector(".produtos-filtrados-container");

    // Adicionar evento de clique em cada link de subcategoria
    subcategoriaLinks.forEach(link => {
        link.addEventListener("click", async function (event) {
            event.preventDefault(); // Prevenir a ação padrão do link
            const categoria = event.target.dataset.categoria;
            const subcategoria = event.target.dataset.subcategoria;

            try {
                // Requisição para buscar produtos da API com filtro de categoria e subcategoria
                const response = await fetch(`http://localhost:3000/api/produtos?categoria=${categoria}&subcategoria=${subcategoria}`);
                const produtos = await response.json();

                // Limpar os produtos filtrados exibidos anteriormente
                produtosFiltradosContainer.innerHTML = "";

                // Verificar se existem produtos
                if (produtos.length > 0) {
                    produtos.forEach(produto => {
                        const produtoDiv = document.createElement("div");
                        produtoDiv.classList.add("filtrado-item");

                        let precoHtml;
                        if (produto.desconto && produto.desconto > 0) {
                            const precoComDesconto = (produto.preco * (1 - produto.desconto / 100)).toFixed(2);
                            precoHtml = `<p>Preço: R$ ${precoComDesconto}</p>`;
                        } else {
                            precoHtml = `<p>Preço: R$ ${produto.preco}</p>`;
                        }

                        produtoDiv.innerHTML = `
                            <img src="${produto.imagem}" alt="${produto.nome}">
                            <h3>${produto.nome}</h3>
                            ${precoHtml}
                        `;

                        // Adicionar o produto ao container
                        produtosFiltradosContainer.appendChild(produtoDiv);
                    });
                } else {
                    produtosFiltradosContainer.innerHTML = "<p>Nenhum produto disponível para esta categoria no momento.</p>";
                }
            } catch (error) {
                console.error("Erro ao carregar os produtos:", error);
                produtosFiltradosContainer.innerHTML = "<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>";
            }
        });
    });
});
