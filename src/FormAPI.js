import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  const getData = () => {
    console.log('get data')
    axios.get('http://localhost:3001/cars')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.car.value
    axios.post('http://localhost:3001/cars', { name: value })
      .then(() => {
        console.log('post')
        getData()
      })

    e.target.car.value = ''
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/cars/${id}`).then(() => {
      console.log('delete')
      getData()
    })
  }
  // const handleEdit = (e, id) => {
  //   e.preventDefault()
  //   axios.patch(`http://localhost:3001/cars/${id}`, { name: e.target.car.value })
  //     .then(() => { 
  //       getData() 
  //       setedit(null)
  //     })
  // }
  const handleEdit = (e) => {
    e.preventDefault()
    console.log('index edit', edit, data[edit].id)
    axios.patch(`http://localhost:3001/cars/${data[edit].id}`, { name: e.target.car.value })
      .then(() => { 
        getData() 
        setedit(null)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='container'>
      FormAPI
      <form onSubmit={handleSubmit}>
        <input type="text" name="car" />
        <button type="submit">Save</button>
      </form>
      {data.map((car, i) => {
        return <li key={i} className='row'>
          {edit === i ?
            <form className='col' onSubmit={(event)=>handleEdit(event)}>
              <input name="car" defaultValue={car.name} />
              <button>Save</button>
            </form>
            : car.name
          }
          <div className='col row'>
            <div className="col" onClick={() => setedit(i)}>edit</div>
            <div className="col" onClick={() => handleDelete(car.id)}>delete</div>
          </div>
        </li>
      })}
    </div >
  )
}
