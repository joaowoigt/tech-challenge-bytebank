export enum TransactionType {
  CambioDeMoeda,
  DOC,
  Emprestimo,
  Salario,
}

export function getTransactionType(value: any): TransactionType {
  var currentEnum = TransactionType.Salario;
  switch (value) {
    case 0:
      currentEnum = TransactionType.CambioDeMoeda;
    case 1:
      currentEnum = TransactionType.DOC;
    case 2:
      currentEnum = TransactionType.Emprestimo;
    case 3:
      currentEnum = TransactionType.Salario;
    default:
      currentEnum = TransactionType.Salario;
  }
  return currentEnum;
}
