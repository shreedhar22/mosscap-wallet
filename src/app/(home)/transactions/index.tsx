import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Transaction from '../../../types/Transactions';
import { transactions } from "../../../../assets/data/transactions"

const TransactionItem = ({ transaction }: { transaction: any }) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.amountText}>${transaction.amount.toFixed(2)}</Text>
        <Text style={styles.coinDetails}>
          {transaction.coinCount} {transaction.coinType}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.dateTime}>
          {transaction.date} {transaction.time}
        </Text>
        <Text style={styles.transactionType}>{transaction.type}</Text>
      </View>
    </View>
  );
};

const CryptoTransactions = () => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    paddingBottom: 10,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  leftContainer: {
    flex: 3,
  },
  rightContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  coinDetails: {
    fontSize: 14,
    color: '#555',
  },
  dateTime: {
    fontSize: 12,
    color: '#999',
  },
  transactionType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3F00FF',
  },
});

export default CryptoTransactions;