import React from "react";

// function tableBody(podaci, callbackDelete) {
//   let telo = document.createElement("tbody");

//   for (let i = 0; i < podaci.length; i++) {
//     let red = document.createElement("tr");
//     let stringId;
//     for (let key in podaci[i]) {
// 			if (Object.hasOwnProperty.call(podaci[i], key)) {
//         if (key === "id") {
//           continue;
//         } else {
// 				  red.appendChild(cellText(podaci[i][key]))
//         }
// 			}
// 		}
// 		if (jwt_token) { // callbackEdit !== null && callbackDelete !== null
// 			stringId = podaci[i].id.toString();
// 			// red.appendChild(createButton(stringId, callbackEdit, "Izmeni"));
// 			red.appendChild(createButton(stringId, callbackDelete, "Obrisi"));
// 		}
// 		telo.appendChild(red);
//   }

//   return telo;
// }

// const tifOptions = Object.keys(tifs).map((key) => (
//   <option value={key}>{tifs[key]}</option>
// ));

// const obradiPodatak = (data) => {
//   console.log(data);
//   for (let key in data) {
//     console.log(key);
//     if (Object.hasOwnProperty.call(data, key)) {
//       console.log(data[key]);
//       return data[key];
//     }
//   }
// };

const KnjigaTabelaTelo = (props) => {
  return (
    <tbody>
      {props.podaci.map((podatak) => (
        <tr key={`red-${podatak.id}`}>
          <td>{podatak.id}</td>
          <td>{podatak.naziv}</td>
          <td>{podatak.autor}</td>
          <td>{podatak.clanIme + " " + podatak.clanPrezime}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default KnjigaTabelaTelo;
