import './Homepage.css'
import { React, useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import axios from 'axios'

function Homepage() {

const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      // Fetch categories from the API
      axios.get('https://api.escuelajs.co/api/v1/categories')
        .then(response => {
          // Set the categories in the state
          setCategories(response.data);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, []);

  return (
    <div className='homepage-container'>
    <Header />
    <div className='homepage-category-container'>
{categories.map(category => (
        <div className='category-box' key={category.id}
        style={{ backgroundImage: `url(${category.image})` }}>
          <h3>{category.name}</h3>
        </div>
      ))}
        </div>

    </div>
  )
}

export default Homepage