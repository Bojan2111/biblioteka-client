import React from "react";

const TabelaZaglavlje = (props) => {
  return (
    <thead>
      <tr>
        {props.elementi.map((el) => (
          <th key={el}>{el}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TabelaZaglavlje;
