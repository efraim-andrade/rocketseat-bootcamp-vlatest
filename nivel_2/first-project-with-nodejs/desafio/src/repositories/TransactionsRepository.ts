import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((totalIncome, transaction) => {
      if (transaction.type === 'income') {
        return totalIncome + transaction.value;
      }

      return totalIncome;
    }, 0);

    const outcome = this.transactions.reduce((totalOutcome, transaction) => {
      if (transaction.type === 'outcome') {
        return totalOutcome + transaction.value;
      }

      return totalOutcome;
    }, 0);

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, type, value }: TransactionDTO): Transaction {
    const newTransaction = new Transaction({
      title,
      type,
      value,
    });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
