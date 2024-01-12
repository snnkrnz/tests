import React from 'react';

const Adresler = () => {
  return (
    <div className="profile-table-container">
      <h2>Adresler İçeriği</h2>
      <table border="1">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Sokak</th>
            <th>Şehir</th>
            <th>Posta Kodu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>İsim</td>
            <td>Sokak</td>
            <td>Şehir</td>
            <td>Posta Kodu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adresler;
