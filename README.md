Análise de Desempenho: Busca Sequencial vs. Busca Binária
Este projeto consiste em um script simples em JavaScript para demonstrar e comparar o desempenho dos algoritmos de Busca Sequencial e Busca Binária.

O objetivo é verificar na prática o impacto da complexidade de cada algoritmo (O(n) para a busca sequencial e O(
logn) para a busca binária) no tempo de execução ao procurar um elemento em um conjunto de dados grande e ordenado.

🛠️ Tecnologia Utilizada
Node.js: O projeto utiliza apenas o ambiente de execução Node.js, sem a necessidade de bibliotecas externas.
✅ Pré-requisitos
Para executar este projeto, você precisa apenas ter o Node.js instalado em sua máquina.

Caso não tenha, baixe e instale o Node.js aqui.
🚀 Como Executar
Clone este repositório ou faça o download dos arquivos para uma pasta em seu computador.
Abra seu terminal (Prompt de Comando, PowerShell, Terminal, etc.).
Navegue até a pasta onde o projeto foi salvo.
Execute o seguinte comando:
<!-- end list -->

Bash

node search.js
📄 O que o script faz?
Ao ser executado, o arquivo search.js irá:

Gerar um array (vetor) ordenado com um grande volume de dados.
Definir um elemento para ser buscado neste array.
Executar a Busca Sequencial para encontrar o elemento e medir seu tempo de execução.
Executar a Busca Binária no mesmo conjunto de dados para encontrar o mesmo elemento e medir seu tempo.
Imprimir os resultados no console, exibindo o tempo gasto por cada algoritmo e permitindo uma comparação direta.
Resultados Esperados
Espera-se que a Busca Binária apresente um desempenho ordens de magnitude superior (muito mais rápido) do que a Busca Sequencial, comprovando a eficiência de sua abordagem de "dividir para conquistar".
