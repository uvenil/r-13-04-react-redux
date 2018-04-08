import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <table>
      <tr>
        <th><h2>description</h2></th>
        <th><h2>amount</h2></th>
        <th><h2>createdAt</h2></th>
      </tr>
        {props.expenses.map((expense)=> {
          return <ExpenseListItem key={expense.id} {...expense} /> 
        })}
    </table>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
