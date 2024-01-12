import React, { useState } from 'react';
import './style.css';

const MusteriSiparisInput = () => {

  const [urunList, setUrunList] = useState([]);
  const [formData, setFormData] = useState({
    siparis_id: '',
    musteri_id: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/urun_siparis/get_urun_in_siparis/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(formData);

        alert('Listeyi görüntüleyebilirsiniz.');
        
      setUrunList(data['Kullanıcı ve sipariş bazlı ürün listesi']);
    } catch (error) {
      console.error('Error:', error);
        alert('Bir hata oluştu');
      }
  };

  return (
    <div>
      <div className="profile-table-container">
      <h2>Giriş</h2>
      <form id='loginform' onSubmit={handleSubmit}>
        <label>Müşteri ID:</label>
        <input type='text' id='musteri_id' onChange={handleChange} value={formData.musteri_id} />
        <label>Sipariş ID:</label>
        <input type='text' id='siparis_id' onChange={handleChange} value={formData.siparis_id} />
        <button type='submit'>Ürünleri Görüntüle</button>
      </form>
    </div>
    <div>
      <h2>Ürünler</h2>
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Marka</th>
            <th>Açıklama</th>
            <th>Adet</th>
            <th>Sipariş Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {urunList.map((urun) => (
            <tr key={urun.id}>
              <td>{urun.ad}</td>
              <td>{urun.soyad}</td>
              <td>{urun.marka}</td>
              <td>{urun.aciklama}</td>
              <td>{urun.adet}</td>
              <td>{urun.siparis_tarihi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    

    
  );
};

export default MusteriSiparisInput;