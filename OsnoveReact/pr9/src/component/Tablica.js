import React from "react";

export default function Tablica({ data }) {
  const lista = data.map((osoba) => {
    return (
      <tr key={osoba.studentId}>
        <td>{osoba.studentFirstName}</td>
        <td>{osoba.studentLastName}</td>
        <td>{osoba.studentEmail}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{lista}</tbody>
    </table>
  );
}
