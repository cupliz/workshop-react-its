import React from 'react'
import { mahasiswa2 } from './Coba'

export function Biodata2({ data }) {
  console.log('biodata2', mahasiswa2)
  return <div>Biodata 2
    
  </div>
}
export default function Biodata(props) {
  // props berbentuk object
  const { nama, alamat, umur } = props
  return (
    <div>
      Biodata 1 {props.nama} {props.alamat} {props.umur}
    </div>
  )
}
