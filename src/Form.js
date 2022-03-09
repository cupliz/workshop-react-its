import React, { useState } from 'react'
import { Modal, Button, Form, Table } from 'react-bootstrap'
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
// import { mahasiswa2 } from './Coba';

export default function Form1() {
  const [mahasiswa, setMahasiswa] = useState([
    { nama: 'Andi', birthDate: '2001-03-22', gender: 'p', jurusan: 'biologi' }
  ]);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(null);
  const [newData, setNewData] = useState(null);
  // const [editData, setEditData] = useState(null);
  const handleClose = () => setShow(false);
  const handleTambah = () => {
    setShow(true)
    setEdit(null)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const detail = {
      nama: e.target.nama.value,
      birthDate: e.target.birthDate.value,
      gender: e.target.gender.value,
      jurusan: e.target.jurusan.value,
    }
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
  const handleInput = (e) => {
    console.log(edit, e.target.name, e.target.value)
    if (edit == null) {
      console.log('tambah')
      const addNewData = { ...newData }
      addNewData[e.target.name] = e.target.value
      setNewData(addNewData)
    } else {
      console.log('update')
      const newMahasiswa = [...mahasiswa]
      newMahasiswa[edit][e.target.name] = e.target.value
      setMahasiswa(newMahasiswa)
    }
  }

  return (
    <div>
      <h1>Form Mahasiswa Baru</h1>
      <Button variant="primary" onClick={handleTambah}>
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
              <Form.Control type="text" id="nama" name="nama"
                value={mahasiswa[edit]?.nama || newData?.nama}
                onChange={handleInput} />
            </div>
            <div>
              <Form.Label htmlFor="birthDate">Tanggal Lahir</Form.Label>
              <Form.Control type="date" id="birthDate" name="birthDate"
                value={mahasiswa[edit]?.birthDate || newData?.birthDate}
                onChange={handleInput} />
            </div>
            <div>
              <Form.Label htmlFor="gender">Gender</Form.Label>
              <Form.Check
                type="radio"
                id="gender"
                name="gender"
                label="Laki-laki"
                value="l"
                checked={mahasiswa[edit]?.gender === 'l' || newData?.gender}
                onChange={handleInput}
              />
              <div className="form-check">
                <input name="gender" type="radio" id="gender" className="form-check-input" value="p"
                  checked={mahasiswa[edit]?.gender === 'p' || newData?.gender}
                  onChange={handleInput}
                />
                <label title="" htmlFor="gender" className="form-check-label">Perempuan</label>
              </div>
            </div>
            <div>
              <Form.Label htmlFor="gender">Jurusan</Form.Label>
              <Form.Select name="jurusan"
                value={mahasiswa[edit]?.jurusan || newData?.jurusan}
                onChange={handleInput}
              >
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
              <td>{value?.nama}</td>
              <td>{value?.birthDate}</td>
              <td>{value?.gender}</td>
              <td>{value?.jurusan}</td>
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
