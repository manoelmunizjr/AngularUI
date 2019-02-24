export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Pessoa {
  codigo: number;
  nome: string;
  endereco = new Endereco();
  ativo = true;
}

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}

export class Categoria {
  codigo: number;
  nome: string;
}

export class Fornecedor {
  codigo: number;
  razao_social: string;
  nome_fantasia: string;
  cnpj: number;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: number;
  estado: number;
  ativo: number;
}

export class Produtos {
  codigo: number;
  nome: string;
  descricao: string;
  valor: number;
  status: string;
  categoria = new Categoria();
  fornecedor = new Fornecedor();
}
