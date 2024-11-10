import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Statistics = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statistic</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Income/Expense Summary */}
      <LinearGradient
        colors={['#7F00FF', '#E100FF']}
        style={styles.summaryContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Income</Text>
          <Text style={styles.summaryAmount}>$5,440</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Expense</Text>
          <Text style={styles.summaryAmount}>$2,209</Text>
        </View>
      </LinearGradient>

      {/* Weekly Chart */}
      <View style={styles.weeklyContainer}>
        <View style={styles.weeklyHeader}>
          <Text style={styles.weeklyText}>Weekly</Text>
          <Text style={styles.legendIncome}>Income</Text>
          <Text style={styles.legendExpense}>Expense</Text>
        </View>
        <View style={styles.barChart}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <View key={index} style={styles.barContainer}>
              <View style={[styles.incomeBar, { height: 60 }]} />
              <View style={[styles.expenseBar, { height: 40 }]} />
              <Text style={styles.barLabel}>{day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Category Chart */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Category Chart</Text>
        <Text style={styles.expenseTotal}>- $312.00</Text>
        <View style={styles.pieChart}>
          {/* Replace this View with an actual pie chart library or component */}
          <View style={styles.pieSlice} />
          <View style={styles.pieSlice} />
        </View>
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FFC107' }]} />
            <Text style={styles.legendText}>Transportation</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#2196F3' }]} />
            <Text style={styles.legendText}>Shopping</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FF4081' }]} />
            <Text style={styles.legendText}>Coffee</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 20,
    shadowColor: 'purple',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 9,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    color: '#fff',
    fontSize: 16,
  },
  summaryAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weeklyContainer: {
    marginHorizontal: 16,
  },
  weeklyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  weeklyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  legendIncome: {
    color: '#4CAF50',
    fontSize: 14,
  },
  legendExpense: {
    color: '#FF9800',
    fontSize: 14,
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barContainer: {
    alignItems: 'center',
  },
  incomeBar: {
    width: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  expenseBar: {
    width: 8,
    backgroundColor: '#FF9800',
    borderRadius: 4,
    marginTop: 4,
  },
  barLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
  categoryContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'right',
    marginBottom: 20,
  },
  pieChart: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // Placeholder pie chart, replace with a chart component
  },
  pieSlice: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF4081', // Placeholder color, replace with actual pie chart slices
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: '#888',
  },
});

export default Statistics;
