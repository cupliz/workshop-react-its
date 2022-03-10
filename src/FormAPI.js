import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Template from './components/Template'

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
    <Template>
      <div className='container mx-auto px-4 space-y-4 my-4 overflow-auto'>
        <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4 border rounded-lg drop-shadow-2xl bg-white">
          <input type="text" className="form-input" name="car" placeholder='Nama Bus' />
          {/* <select name="jurusan" id="" className='="form-select'>
          <option value="surabaya">Surabaya</option>
          <option value="jakarta">Jakarta</option>
        </select> */}
          <Button type="submit" text="Add New" tahu="goreng" tempe="bacem" />
        </form>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center'>
          {data.map((car, i) => {
            return <div key={i} className='drop-shadow-2xl bg-white border rounded-lg overflow-hidden p-4'>
              {edit === i ?
                <form className='w-full flex space-x-2' onSubmit={(event) => handleEdit(event)}>
                  <input className="form-input w-2/3" name="car" defaultValue={car.name} />
                  <button className='bg-blue-500 text-white px-2 rounded-lg w-1/3'>Save</button>
                </form>
                : car.name
              }
              <div className='flex py-4 gap-4 text-center'>
                <div className="bg-green-500 text-white px-2 rounded-lg w-1/2" onClick={() => setedit(i === edit ? null : i)}>edit</div>
                <div className="bg-red-500 text-white px-2 rounded-lg w-1/2" onClick={() => handleDelete(car.id)}>delete</div>
              </div>
            </div>
          })}
        </div>
      </div>
    </Template>
  )
}
