import React, { useState } from "react";
import TabelaZaglavlje from "../tabela/TabelaZaglavlje";
import TabelaTelo from "./KnjigaTabelaTelo";
import Tabela from "../tabela/Tabela";

const KnjigeTabela = () => {
  const zaglavljeElementi = ["ID", "Naslov knjige", "Autor", "Ime", "Prezime"];
  const testPodaci = [
    {
      id: 1,
      naziv: "Dervis i smrt",
      autor: "Mesa Selimovic",
      clanIme: "Mitar",
      clanPrezime: "Miric",
    },
    {
      id: 2,
      naziv: "Na Drini cuprija",
      autor: "Ivo Andric",
      clanIme: "Ana",
      clanPrezime: "Ancic",
    },
    {
      id: 3,
      naziv: "Bozanstvena komedija",
      autor: "Dante Aligijeri",
      clanIme: "Pera",
      clanPrezime: "Peric",
    },
    {
      id: 4,
      naziv: "Avanture Serloka Holmsa",
      autor: "Sir Artur Konan Dojl",
      clanIme: "Ana",
      clanPrezime: "Ancic",
    },
    {
      id: 5,
      naziv: "Dozivljaji Nikoletine Bursaca",
      autor: "Branko Copic",
      clanIme: "Pera",
      clanPrezime: "Peric",
    },
  ];
  const [podaci, setPodaci] = useState(testPodaci);

  // fetch("https://localhost:7057/api/knjige")
  //   .then((response) => response.json())
  //   .then((data) => setPodaci(data));

  return (
    <table>
      {/* <TabelaZaglavlje elementi={zaglavljeElementi} />
      <TabelaTelo podaci={podaci} /> */}
      <Tabela podaci={podaci} zaglavlje={zaglavljeElementi} />
    </table>
  );
};

export default KnjigeTabela;
