function gerarVetorOrdenado(tamanho) {
  return Array.from({ length: tamanho }, (_, i) => i + 1);
}

function buscaSequencial(arr, alvo) {
  let comparacoes = 0;
  for (let i = 0; i < arr.length; i++) {
    comparacoes++;
    if (arr[i] === alvo) return { posicao: i, comparacoes };
  }
  return { posicao: -1, comparacoes };
}

function buscaBinaria(arr, alvo) {
  let comparacoes = 0;
  let inicio = 0;
  let fim = arr.length - 1;
  while (inicio <= fim) {
    comparacoes++;
    let meio = Math.floor((inicio + fim) / 2);
    if (arr[meio] === alvo) return { posicao: meio, comparacoes };
    else if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return { posicao: -1, comparacoes };
}

function medirExecucao(func, arr, alvo) {
  const inicio = performance.now();
  const resultado = func(arr, alvo);
  const fim = performance.now();
  return {
    tempoMs: (fim - inicio).toFixed(3),
    ...resultado,
  };
}

function testarAlgoritmos() {
  const tamanhos = [1000, 10000, 100000];
  const algoritmos = [
    { nome: "Busca Sequencial", func: buscaSequencial },
    { nome: "Busca Binária", func: buscaBinaria },
  ];

  tamanhos.forEach((tam) => {
    const vetor = gerarVetorOrdenado(tam);
    console.log(`\n======= Tamanho da entrada: ${tam} elementos =======`);

    algoritmos.forEach(({ nome, func }) => {
      
      const alvoMedio = vetor[Math.floor(Math.random() * tam)];
      const resultadoMedio = medirExecucao(func, vetor, alvoMedio);

    
      const resultadoPior = medirExecucao(func, vetor, -1);

      console.log(`${nome}`);
      console.log(`- Caso médio:`);
      console.log(`   Tempo: ${resultadoMedio.tempoMs}ms`);
      console.log(`   Comparações: ${resultadoMedio.comparacoes}`);

      console.log(`- Pior caso (elemento ausente):`);
      console.log(`   Tempo: ${resultadoPior.tempoMs}ms`);
      console.log(`   Comparações: ${resultadoPior.comparacoes}`);
    });
  });
}


testarAlgoritmos();
