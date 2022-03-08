import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
// import { mahasiswa2 } from './Coba';

export default function Form1() {
  // [{ nama: 'budi', birthDate: '20/20/202' }]
  const [mahasiswa, setMahasiswa] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault()
    const detail = {
      nama: e.target.nama.value,
      birthDate: e.target.birthDate.value
    }
    const newMahasiswa = [...mahasiswa]
    newMahasiswa.push(detail)
    setShow(false)
    setMahasiswa(newMahasiswa)
  }
  console.log('render mahasiswa', mahasiswa)
  return (
    <div>
      <h1>Form Mahasiswa Baru</h1>
      <Button variant="primary" onClick={handleShow}>
        Tambah Mahasiswa
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form.Label htmlFor="nama">Nama</Form.Label>
              <Form.Control type="text" id="nama" name="nama" />
            </div>
            <div>
              <Form.Label htmlFor="birthDate">Tanggal Lahir</Form.Label>
              <Form.Control type="date" id="birthDate" name="birthDate" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <TableMahasiswa />
    </div>
  )
}

function TableMahasiswa({ dataMhs = [] }) {
  console.log(dataMhs)
  return (
    <div>Table Mahasiswa
      <table>
        <tbody>
          {dataMhs.map((value, index) => {
            console.log(value)
            return (<tr key={index}>
              <td>{value.nama}</td>
              <td>{value.birthDate}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}
