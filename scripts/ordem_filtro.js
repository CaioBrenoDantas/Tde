// Arquivo: ordem_filtro.js

document.addEventListener("DOMContentLoaded", function () {
    const filtroSelect = document.getElementById("filtro");
    const produtosContainer = document.querySelector(".produtos-filtrados-container");

    // Função para ordenar os produtos com base no preço
    function ordenarProdutos(criterio) {
        const produtos = Array.from(produtosContainer.children);

        produtos.sort((a, b) => {
            const precoA = parseFloat(a.querySelector(".filtrado-item p").textContent.replace("R$", ""));
            const precoB = parseFloat(b.querySelector(".filtrado-item p").textContent.replace("R$", ""));

            if (criterio === "preco-mais-baixo") {
                return precoA - precoB;
            } else if (criterio === "preco-mais-alto") {
                return precoB - precoA;
            }
        });

        // Atualizar o container com os produtos ordenados
        produtos.forEach((produto) => produtosContainer.appendChild(produto));
    }

    // Evento de mudança no select do filtro
    filtroSelect.addEventListener("change", function () {
        const criterio = filtroSelect.value;
        if (criterio) {
            ordenarProdutos(criterio);
        }
    });
});
