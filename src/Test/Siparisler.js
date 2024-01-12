import React from "react";

const Siparisler = () => {
  return (
    <div className="profile-table-container">
      <h2>Siparişler İçeriği</h2>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ margin: "0" }}>ad soyad</h4>{" "}
        {/* http://127.0.0.1:8000/musteri/musteri/ */}
        <table border="1">
          <thead>
            <tr>
              <th>Ürün</th>
              <th>Adet</th>
              <th>Sipariş Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {/* http://127.0.0.1:8000/urun/urun/ */}
            {/* http://127.0.0.1:8000/urun_siparis/get_urun_in_siparis */}
            {/* {
                "musteri_id": "3",
                "siparis_id": ""
                } */}
            <tr>
              <td>marka | aciklama</td>
              <td>adet</td>
              <td>siparis_tarihi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Siparisler;
