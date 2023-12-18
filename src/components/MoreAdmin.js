import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminListPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [productEmail, setProductEmail] = useState("");
  const [productUsername, setProductUsername] = useState("");
  const [productTelephone, setProductTelephone] = useState("");
  const [productPassword, setProductPassword] = useState("");
  const [newProductEmail, setNewProductEmail] = useState("");
  const [newProductUsername, setNewProductUsername] = useState("");
  const [newProductTelephone, setNewProductTelephone] = useState("");
  const [newProductPassword, setNewProductPassword] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8080/api/readAdminApi')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleUpdate = (admin) => {
    setProductId(admin.id);
    setProductEmail(admin.email);
    setProductUsername(admin.username);
    setProductTelephone(admin.telephone);
    setProductPassword(admin.password);
    setCurrentProduct(admin);
    setIsModalOpen(true);
  };

  const handleDelete = (adminId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this admin?");

    if (isConfirmed) {
      axios.delete(`http://localhost:8080/api/delete-admin-api/${adminId}`)
        .then(response => {
          console.log('Admin deleted successfully:', response.data);
          fetch('http://localhost:8080/api/readAdminApi')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.error('Error fetching data:', error));
        })
        .catch(error => console.error('Error deleting admin:', error));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductId("");
    setProductEmail("");
    setProductUsername("");
    setProductTelephone("");
    setProductPassword("");
    setCurrentProduct(null);
  };

  const handleUpdateAdmin = async (event) => {
    event.preventDefault();
    const { id } = currentProduct; // Extract adminId from currentProduct
    try {
      const putData = await axios.put(`http://localhost:8080/api/update-admin-api/${id}`, {
        email: productEmail,
        username: productUsername,
        telephone: productTelephone,
        password: productPassword
      });
      alert(putData.data.message);
      fetch('http://localhost:8080/api/readAdminApi')
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(error => console.error('Error fetching data:', error));
      handleCloseModal();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleAddAdmin = async (event) => {
    event.preventDefault();
    try {
      const postData = await axios.post('http://localhost:8080/api/insertAdminApi', {
        email: newProductEmail,
        username: newProductUsername,
        telephone: newProductTelephone,
        password: newProductPassword
      });
      // Check if the request was successful
      if (postData.status === 200) {
        alert('Data Berhasil ditambahkan'); // Display success message
        fetch('http://localhost:8080/api/readAdminApi')
          .then(response => response.json())
          .then(data => setProducts(data.data))
          .catch(error => console.error('Error fetching data:', error));
        handleCloseAddModal();
      } else {
        alert('Failed to add data'); // Display a generic failure message
      }
    } catch (error) {
      alert("Data Gagal ditambahkan");
    }
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewProductEmail("");
    setNewProductUsername("");
    setNewProductTelephone("");
    setNewProductPassword("");
  };

  return (
    <div className="product-list-page" style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', position: 'absolute', top: '70px', left: '80px' }}>Admin</h1>
      <button
        className="add-button"
        onClick={handleAddButtonClick}
        style={{
          backgroundColor: '#4CAF50', // Hijau
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          top: '100px',
          right: '170px',
          fontFamily: 'Outfit'
        }}
      >
        Add Data
      </button>

      <table
        className="custom-table"
        style={{
          borderCollapse: 'collapse',
          width: '85%',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '170px', 
          left: '60px', 
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#00C2FF', color: '#fff' }}>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Telephone</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {products.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>{product.id}</td>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>{product.email}</td>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>{product.username}</td>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>{product.telephone}</td>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>{product.password}</td>
              <td style={{ border: '1px solid #00C2FF', padding: '8px' }}>
                <button
                  className="edit-button"
                  onClick={() => handleUpdate(product)}
                  style={{
                    backgroundColor: '#FFD700', // Kuning
                    color: '#000',
                    padding: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(product.id)}
                  style={{
                    backgroundColor: '#FF0000', // Merah
                    color: '#fff',
                    padding: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
  <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
    <div className="modal-content" style={{ width: '400px', padding: '20px', background: '#fff', borderRadius: '8px', border: '2px solid #00C2FF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <span className="close" onClick={handleCloseModal} style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>&times;</span>
      <h2 style={{ textAlign: 'center' }}>Update Admin</h2>
      <form onSubmit={handleUpdateAdmin} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px', padding: '8px', borderRadius: '4px' }}>Email:</label>
          <input type="text" value={productEmail} onChange={(e) => setProductEmail(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px', padding: '8px', borderRadius: '4px' }}>Username:</label>
          <input type="text" value={productUsername} onChange={(e) => setProductUsername(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px', padding: '8px', borderRadius: '4px' }}>Telephone:</label>
          <input type="text" value={productTelephone} onChange={(e) => setProductTelephone(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px', padding: '8px', borderRadius: '4px' }}>Password:</label>
          <input type="text" value={productPassword} onChange={(e) => setProductPassword(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" style={{ background: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Update Admin</button>
          <button type="button" onClick={handleCloseModal} style={{ background: '#FF0000', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}



{isAddModalOpen && (
  <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
    <div className="modal-content" style={{ width: '400px', padding: '20px', background: '#fff', borderRadius: '8px', border: '2px solid #00C2FF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <span className="close" onClick={handleCloseAddModal} style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>&times;</span>
      <h2 style={{ textAlign: 'center' }}>Add New Admin</h2>
      <form onSubmit={handleAddAdmin} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px',  padding: '8px', borderRadius: '4px' }}>Email:</label>
          <input type="text" value={newProductEmail} onChange={(e) => setNewProductEmail(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px',  padding: '8px', borderRadius: '4px' }}>Username:</label>
          <input type="text" value={newProductUsername} onChange={(e) => setNewProductUsername(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px',  padding: '8px', borderRadius: '4px' }}>Telephone:</label>
          <input type="text" value={newProductTelephone} onChange={(e) => setNewProductTelephone(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '16px' }}>
          <label style={{ width: '40%', marginRight: '10px',  padding: '8px', borderRadius: '4px' }}>Password:</label>
          <input type="text" value={newProductPassword} onChange={(e) => setNewProductPassword(e.target.value)} style={{ width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid #00C2FF' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" style={{ background: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Add Admin</button>
          <button type="button" onClick={handleCloseAddModal} style={{ background: '#FF0000', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default AdminListPage;
