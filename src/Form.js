import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
// import { mahasiswa2 } from './Coba';

export default function Form1() {
  const [nama, gantiNama] = useState('anto');
  return (
    <div>
      <h1>Form Mahasiswa Baru</h1>
      <input type="text"
        onChange={(e) => {
          console.log(e.target.value)
          gantiNama(e.target.value)
        }} />
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <TableMahasiswa data={nama} />
    </div>
  )
}

function TableMahasiswa({ data }) {
  return (
    <div>Table Mahasiswa
      <table>
        <tbody>
          <tr>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
