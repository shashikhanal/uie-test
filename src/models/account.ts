export interface Account {
  id: string,
  balance: number,
  accountType: string,
}

// dummy database for testing: simulating in-memory database
const accountsDb: Account[] = [
  { id: '1', balance: 1000, accountType: 'savings' },
  { id: '2', balance: 5000, accountType: 'current' },
];

export const Account = {
  findById: async (id: string) => {
    return accountsDb.find(account => account.id == id) || {};
  }
};
