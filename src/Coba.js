import React from 'react'
import Biodata from './Biodata'
import Coba2 from './Coba2'
import Form from './Form'

export const mahasiswa2 = [
  { nama: 'budi', alamat: 'surabaya' },
  { nama: 'andi', alamat: 'madiun' },
  { nama: 'joko', alamat: 'jogja' },
  { nama: 'susi', alamat: 'bandung' }
]
const Coba3 = () => {
  const mahasiswa = ['budi', 'andi', 'joko', 'susi']
  const show = true
  // show ?  :
  let nama = "budi"
  nama = 'anto'
  return (
    <div>
      Coba 1
      <Biodata nama="Budi" alamat="surabaya" umur={10} />
      <hr />
      <Coba2 data={mahasiswa2} tampil={show} />
      <ul>
        {mahasiswa.map((nama, index) => {
          return <li key={index}>{nama}</li>
        })}
      </ul>
      {nama}
      <Form />
    </div>
  )
}
export default Coba3
