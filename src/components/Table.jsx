import React from 'react';
import styles from './Table.module.css';

const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => {
              if (column === 'Actions') {
                return (
                  <td key={index}>
                    <button className={styles.editButton} onClick={() => onEdit(item)}>Edit</button>
                    <button className={styles.deleteButton} onClick={() => onDelete(item.id)}>Delete</button>
                  </td>
                );
              }
              return <td key={index}>{item[column.toLowerCase()]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

