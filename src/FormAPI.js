import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const getData = () => {
    axios.get('http://localhost:3001/cars')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.car.value
    axios.post('http://localhost:3001/cars', { name: value })
    getData()
    e.target.car.value = ''
  }
  // console.log(data)
  return (
    <div className='container'>
      FormAPI
      <form onSubmit={handleSubmit}>
        <input type="text" name="car" />
        <button type="submit">Save</button>
      </form>
      {data.map((car, i) => {
        return <li key={i}>{car.name}</li>
      })}
    </div>
  )
}
