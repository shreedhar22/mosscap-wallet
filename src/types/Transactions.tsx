interface Transaction {
    id: number;
    amount: number;
    coinCount: number;
    coinType: string;
    date: string; // Date in format "YYYY-MM-DD"
    time: string; // Time in format "HH:mm:ss"
    type: string;
  }

  export default Transaction;