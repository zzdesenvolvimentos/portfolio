// Gerenciador de Banco de Dados Local (LocalStorage)

export function salvarRegistro(chave, dados) {
  try {
    let historico = JSON.parse(localStorage.getItem(chave)) || [];
    historico.push({
      ...dados,
      id: Date.now(),
      dataRegistro: new Date().toLocaleString("pt-BR")
    });
    localStorage.setItem(chave, JSON.stringify(historico));
    return true;
  } catch (error) {
    console.error(`Erro ao salvar no storage [${chave}]:`, error);
    return false;
  }
}

export function buscarRegistros(chave) {
  return JSON.parse(localStorage.getItem(chave)) || [];
}