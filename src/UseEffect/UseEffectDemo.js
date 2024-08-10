import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
  // State to store the list of product
  const [product, setProducts] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    // Define an async function to fetch data
    const fetchProducts = async () => {
      try {
        // Fetch data from API
        const response = await fetch('https://fakestoreapi.com/products');
        // Check if response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const data = await response.json();
        // Update state with the fetched data
        setProducts(data);
      } catch (error) {
        // Update state with the error
        setError(error);
      } finally {
        // Update loading state
        setLoading(false);
      }
    };

    // Call the async function
    fetchProducts();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render loading, error, or product data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="ProductList">
    <h1>Product List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {product.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default UseEffectDemo;
