import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useHistory from react-router-dom
import './style.css';

const Kayit = () => {
  const navigate = useNavigate();  // Initialize useHistory

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    cinsiyet: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/user/register_user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response as needed
        console.log(data);
        alert('Kaydınız başarıyla oluşturuldu. Giriş yapabilirsiniz.');

        // Navigate to the Login component
        navigate('/urun-getir');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('Bir hata oluştu');
      });
  };

  
  return (
    <div className="profile-table-container">
      <h2>Kayıt</h2>

      <form id='kayitform' onSubmit={handleSubmit}>
        <label>Ad:</label>
        <input type='text' id='first_name' onChange={handleChange} value={formData.first_name} />

        <label>Soyad:</label>
        <input type='text' id='last_name' onChange={handleChange} value={formData.last_name} />

        <label>Cinsiyet:</label>
        <input type='text' id='cinsiyet' onChange={handleChange} value={formData.cinsiyet} />

        <label>Kullanıcı Adı:</label>
        <input type='text' id='username' onChange={handleChange} value={formData.username} />

        <label>Email:</label>
        <input type='email' id='email' onChange={handleChange} value={formData.email} />

        <label>Şifre:</label>
        <input type='password' id='password' onChange={handleChange} value={formData.password} />

        <label>Şifre Tekrar:</label>
        <input type='password' id='confirmPassword' />

        <button type='submit'>Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Kayit;