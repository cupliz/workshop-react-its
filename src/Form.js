import React, { useState } from 'react'
import { Modal, Button, Form, Table } from 'react-bootstrap'
import { IoTrashOutline } from 'react-icons/io5';
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
      birthDate: e.target.birthDate.value,
      gender: e.target.gender.value,
      jurusan: e.target.jurusan.value,
    }
    const newMahasiswa = [...mahasiswa]
    newMahasiswa.push(detail)
    setShow(false)
    setMahasiswa(newMahasiswa)
  }

  const handleDelete = (index) => {
    console.log(index)
    const newMahasiswa = [...mahasiswa]
    newMahasiswa.splice(index, 1)
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
            <div>
              <Form.Label htmlFor="gender">Gender</Form.Label>
              <Form.Check
                type="radio"
                id="gender"
                name="gender"
                label="Laki-laki"
                value="l"
              />
              <div className="form-check">
                <input name="gender" type="radio" id="gender" className="form-check-input" value="p" />
                <label title="" htmlFor="gender" className="form-check-label">Perempuan</label>
              </div>
            </div>
            <div>
              <Form.Label htmlFor="gender">Jurusan</Form.Label>
              <Form.Select name="jurusan">
                <option disabled>Pilih jurusan anda</option>
                <option value="matematika">Matematika</option>
                <option value="biologi">Biologi</option>
                <option value="fisika">Fisika</option>
              </Form.Select>
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
      <TableMahasiswa dataMhs={mahasiswa} remove={handleDelete}/>
    </div>
  )
}

const TableMahasiswa = ({ dataMhs = [], remove }) => {
  return (
    <div className='mt-4'>
      <h1>Table Mahasiswa</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Tanggal Lahir</th>
            <th>Gender</th>
            <th>Jurusan</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataMhs.map((value, index) => {
            return (<tr key={index}>
              <td>{index + 1}</td>
              <td>{value.nama}</td>
              <td>{value.birthDate}</td>
              <td>{value.gender}</td>
              <td>{value.jurusan}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => remove(index)} >
                  <IoTrashOutline />
                </button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}
