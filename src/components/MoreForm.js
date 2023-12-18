import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios.get('http://localhost:8080/api/readProductApi')
      .then(response => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handleUpdate = (product) => {
    setProductId(product.id);
    setProductName(product.name);
    setProductDesc(product.desc);
    setProductPrice(product.harga1);
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (productId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");

    if (isConfirmed) {
      axios.delete(`http://localhost:8080/api/delete-product-api/${productId}`)
        .then(response => {
          console.log('Product deleted successfully:', response.data);
          fetchData();
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductId("");
    setProductName("");
    setProductDesc("");
    setProductPrice("");
    setCurrentProduct(null);
  };

  const handleUpdateData = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(`http://localhost:8080/api/update-product-api/${productId}`, {
        name: productName,
        desc: productDesc,
        harga1: productPrice,
      });
      alert(putData.data.message);
      fetchData();
      handleCloseModal();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const handleCircleClick = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId
          ? { ...product, isCircleFilled: !product.isCircleFilled } // Toggle isCircleFilled
          : product
      )
    );
  };

  const userProfile = {
    name: "John Doe",
    description: "Passionate about quality products",
    profilePictureUrl: "images/Profile.png", // Replace with the actual URL
  };

  return (
    <div className="product-list-page">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* User Profile Section */}
      <div
        className="user-profile"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src={userProfile.profilePictureUrl}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginRight: '20px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '8px' }}>{userProfile.name}</h3>
          <p style={{ margin: '0' }}>{userProfile.description}</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '20px' }}>Paket Penawaran</h2>

      {/* Product List Section */}
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-box">
            <h2>{product.name}</h2>
            <ul>
              {product.desc.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>Rp{product.harga1}</p>
            <button
              onClick={() => handleUpdate(product)}
              style={{
                backgroundColor: 'green',
                color: 'white',
                marginRight: '10px',
                borderRadius: '5px',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                opacity: '0.9',
              }}
            >
              Update
            </button>

            <button
              onClick={() => handleDelete(product.id)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '5px',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                opacity: '0.9',
                marginRight: '10px',
              }}
            >
              Delete
            </button>

            {/* Lingkaran di bawah container */}
            <div
              onClick={() => handleCircleClick(product.id)}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid',
                cursor: 'pointer',
                borderColor: product.isCircleFilled ? 'green' : 'transparent',
                marginTop: '10px', // Tambahkan margin top agar terpisah dari tombol delete
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ width: '400px', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <span className="close" onClick={handleCloseModal} style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>&times;</span>
            <h2 style={{ textAlign: 'center' }}>Update Product</h2>
            <form onSubmit={handleUpdateData} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '8px' }}>Name:</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <label style={{ marginBottom: '8px' }}>Description:</label>
              <textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <label style={{ marginBottom: '8px' }}>Price:</label>
              <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{ background: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Update</button>
                <button type="button" onClick={handleCloseModal} style={{ background: '#ccc', color: '#000', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Additional Info Section */}
      <div className="additional-info">
        You Will Get File Photo With Google Drive At All Package
      </div>

      {/* Link Section */}
      <Link to="/moreAdd" className="link-text">
        Ajukan Penawaran
      </Link>

       {/* Gallery Section */}
       <div className="gallery-section" style={{  marginTop: '50px' }}>
      <h2 style={{ marginBottom: '40px' }}>Gallery</h2>
      <img
        src="images/gallery.png"
        alt="Gallery"
        style={{ maxWidth: '600px', margin: 'auto', marginBottom: '20px', marginTop: '20px', display: 'block' }}
      />
    </div>

    <div className="jadwal-section" style={{ marginTop: '50px',}}>
  <h2 style={{ marginBottom: '40px' }}>Jadwal</h2>
  <img
    src={'/images/statis.png'}
    alt="Jadwal"
    style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', display: 'block', margin: 'auto' }}
  />
</div>

<div className="payment-logos-section" style={{ marginTop: '20px' }}>
  <h2 style={{ marginBottom: '20px' }}>Payment</h2>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img
      src={'/images/brimo.png'}
      alt="Brimo"
      style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
    />
    <img
      src={'/images/bca.png'}
      alt="BCA"
      style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
    />
    <img
      src={'/images/linkaja.png'}
      alt="LinkAja"
      style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
    />
    <img
      src={'/images/dana.png'}
      alt="Dana"
      style={{ maxWidth: '100%', height: 'auto', marginRight: '10px' }}
    />
    <img
      src={'/images/gopay.png'}
      alt="GoPay"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
  {/* Tombol Chat */}
  <Link to="/chat" style={{ textDecoration: 'none', margin: '10px' }}>
    <button style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#00aaff', color: 'white',  borderRadius: '10px' }}>Chat</button>
  </Link>

  {/* Tombol Booking */}
  <Link to="/booking" style={{ textDecoration: 'none', margin: '10px' }}>
    <button style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#00aaff', color: 'white',  borderRadius: '10px' }}>Booking</button>
  </Link>

  {/* Icon Favorit */}
  <img
    src={'/images/favorite.png'}
    alt="Favorit"
    style={{ maxWidth: '30px', height: 'auto', margin: '10px', cursor: 'pointer' }}
  />
</div>


    </div>
  );
};

export default ProductListPage;
