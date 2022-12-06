import React from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>Hellow: {props.value}</li>;
}

function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList;
