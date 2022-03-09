import React, { useEffect, useState } from 'react'

function Coba4({ second }) {
  const [state, setstate] = useState(1)
  // console.log('render coba4')

  useEffect(() => {
    console.log('componentDidMount')
    alert("komponen 4 ditampilkan")
    return () => {
      console.log('componentWillUnmount')
      alert("komponen 4 disembunyikan")
    }
  }, [])
  useEffect(()=>{
    console.log('componentDidUpdate')
  },[state])
  return (
    <div>
      <button onClick={() => {
        setstate(state + 1)
        // gantiStateFirst()
      }}>Click 4</button>
      <div>Coba4 : {state}</div>
    </div>
  )
}
function Coba3({ isi }) {
  // console.log('render coba3', isi)
  return (
    <div>Jumlah {isi}</div>
  )
}
export default function Coba2({ data, tampil }) {
  const [first, setfirst] = useState(1)
  const [second, setsecond] = useState(1)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // console.log('show me')
  }, [second])

  return (
    <div>Coba2 <br />
      <button onClick={() => {
        setfirst(first + 1)
      }}>Click 1</button>
      <button onClick={() => {
        setsecond(second + 1)
      }}>Click 2</button>
      <Coba3 isi={first} />
      <br />
      Click 2 value: {second}
      <br />
      <button
        onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Coba4 second={second} />}

    </div>
  )
}
