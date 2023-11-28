//http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1

import React from 'react';
import './PetStore.css';
import { useState, useEffect } from 'react';


async function fetchPosts() {
  const response = await fetch('http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1');
  const blogPosts = await response.json();
  return blogPosts;
}

function PetStore() {

  const [loadedPosts, setLoadedPosts] = useState([]);
  const [useeffectvar, setUseEffectVar] = useState();
  const [dataUser, setDataUser] = useState(); 


  async function fetchPosts2() {
    const response2 = await fetch('http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=' + useeffectvar + "&page=1");
    const blogPosts2 = await response2.json();
    return blogPosts2;
  }

  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  useEffect(
    function () {
      fetchPosts2().then((fetchedPosts2) => {
        setDataUser(fetchedPosts2)});

    }, [useeffectvar]);

  return (
    <div>
        <div className='button'>
        <button className='selected' onClick={() => setUseEffectVar('cat')}>Cats</button>
        <button className='no_selected' onClick={() => setUseEffectVar('dog')}>Dogs</button>
        <button className='no_selected' onClick={() => setUseEffectVar('fish')}>Fishs</button>
        </div>
        <ul>
          <li className='title'><span>id</span><span>Precio</span></li>
              
          {dataUser && dataUser.type === 'cat' &&(
            
              <li>dataUser.id <span></span>dataUser.price</li>
          
          )}
        </ul>
        <div className='button'>
        <button> {'<<'} </button>
        <span>Página 1</span>
        <button> {'>>'} </button>
        </div>


    </div>
  )
}

export default PetStore