import React, { useState } from "react";

const Tabela = (props) => {
  const initState = props.podaci;
  const [state, setState] = useState(initState);

  return (
    <table>
      <tr key={"header"}>
        {/*Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))*/}
        {props.zaglavlje.map((el) => (
          <th>{el}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Tabela;
