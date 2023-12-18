import React, { useState } from 'react';
import axios from 'axios';

const MoreAdd = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [harga1, setHarga1] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async (e) => {
    
    // Validate input fields
    if (name === "" || desc === "" || harga1 === "") {
      alert('Please fill in all fields');
      // return;
    } else {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/api/insertProductApi', {
          name: name,
          desc: desc,
          harga1: harga1
        });
        
        // Menambahkan alert untuk menyatakan bahwa data berhasil ditambahkan
        alert('Data added successfully');
    
        window.location.href = '/more';
      } catch (error) {
        // Handle error jika permintaan POST gagal
        console.error('Error adding data:', error);
        alert('Failed to add data. Please try again.');
      }
    }
    
    // Prepare data for API request
    // const newProduct = {
    //   name: name,
    //   desc: desc,
    //   harga1: harga1,
    // };

    // setLoading(true);

    // try {
      // const response = await fetch('http://localhost:8080/api/insertProductApi', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newProduct),
      //   mode: 'no-cors',
      // });
      // const response = await axios.post('http://localhost:8080/api/insertProductApi', {

      //   name: name,
      //   desc: desc,
      //   harga1: harga1,
      // });

  //     if (!response.ok) {
  //       throw new Error('Failed to add product');
  //     }

  //     // Handle success
  //     alert('Product added successfully');
  //     // You may also choose to redirect the user or perform other actions upon success
  //   } catch (error) {
  //     // Handle error
  //     console.error('Error adding product:', error.response);
  //     alert('Error adding product. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1>Request Penawaran Anda</h1>
      <form onSubmit={handleAddProduct}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="name">Name:</label>
          <input type="text" id="name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '8px' }} value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="desc">Description:</label>
          <input type ="text" id="desc" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '8px' }} value={desc} onChange={e => setDesc(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="harga1">Price (Rp):</label>
          <input type="text" id="harga1" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '8px' }} value={harga1} onChange={e => setHarga1(e.target.value)} />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer' }} disabled={loading}>
          {loading ? 'Adding...' : 'Ajukan Penawaran'}
        </button>
      </form>
    </div>
  );
};

export default MoreAdd;
