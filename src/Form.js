import React, { useState } from 'react'
import { Modal, Button, Form, Table } from 'react-bootstrap'
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
// import { mahasiswa2 } from './Coba';

export default function Form1() {
  const [mahasiswa, setMahasiswa] = useState([
    { nama: 'budi', birthDate: '2001-03-02', gender: 'l', jurusan: 'matematika' }
  ]);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(null);
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
    console.log(detail)
    const newMahasiswa = [...mahasiswa]
    newMahasiswa.push(detail)
    setShow(false)
    setMahasiswa(newMahasiswa)
  }

  const handleDelete = (index) => {
    console.log('hapus', index)
    const newMahasiswa = [...mahasiswa]
    newMahasiswa.splice(index, 1)
    setMahasiswa(newMahasiswa)
  }
  const handleEdit = (index) => {
    setShow(true)
    setEdit(index)
  }

  console.log('render mahasiswa', mahasiswa[edit])
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
              <Form.Control type="text" id="nama" name="nama" value={mahasiswa[edit]?.nama} />
            </div>
            <div>
              <Form.Label htmlFor="birthDate">Tanggal Lahir</Form.Label>
              <Form.Control type="date" id="birthDate" name="birthDate" value={mahasiswa[edit]?.birthDate} />
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
              <Form.Select name="jurusan" value={mahasiswa[edit]?.jurusan}>
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
      <TableMahasiswa
        dataMhs={mahasiswa}
        remove={handleDelete}
        edit={handleEdit}
      />
    </div>
  )
}

const TableMahasiswa = ({ dataMhs = [], remove, edit }) => {
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
                &nbsp;
                <button
                  className='btn btn-success'
                  onClick={() => edit(index)} >
                  <IoPencilOutline />
                </button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}
