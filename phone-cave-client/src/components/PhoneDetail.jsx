import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios'


const API_URL = process.env.REACT_APP_SERVER_URL;

function PhoneDetail() {
  const { id } = useParams();
  const [phoneData, setPhoneData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get(`${API_URL}/api/phones/${id}`)
    .then(resposne => {
        console.log(resposne.data);
        console.log(phoneData);
        setPhoneData(resposne.data)
        setLoading(false)
       
        console.log(phoneData);
        
    })
    // eslint-disable-next-line
}, [id])

  return (
    <div>
      {loading && 

                {phoneData[0].description}

                $ {phoneData[0].price}

                {phoneData[0].screen}

                {phoneData[0].processor} Processor

                {phoneData[0].ram} GB RAM
      
    </div>
      )}



export default PhoneDetail;