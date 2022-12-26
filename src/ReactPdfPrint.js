import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export default function ReactPdfPrint() {
  const componentRef = useRef();
  const handlerPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert('Print success'),
    euy: () => console.log(componentRef.current)
  })

  return (
    <div className='row'>
      <div className='text-center col pt-5'>
        <button onClick={handlerPrint}>Print</button>
      </div>
      <div className='container-md col' ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
        <h1 className='text-center my-3 border py-2'>Employee data</h1>
        <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm mb-3" id="pillNav2" role="tablist" >
          <li className="nav-item" role="presentation">
            <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
          </li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
