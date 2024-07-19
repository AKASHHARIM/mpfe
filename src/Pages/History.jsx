import React from 'react'

function History() {
  return (
    <div className='p-5 bg-light'>
      <h3 className='my-3 text-primary'>Watch History</h3>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th >Vidio Id</th>
            <th >Vidio URL</th>
            <th >Date and time</th>
            <th></th>
            </tr>
           </thead>
           <tbody>
            <tr>
            <td>1</td>
            <td>https://www.youtube.com/watch?v=KdZgJ4uH5Zc</td>
            <td>12-07-2024</td>
            <td><button className='btn btn-dark'><i className="fa-solid fa-trash" style={{color: "#ff150f",}} /></button></td>
            </tr>
           </tbody>
      </table>
    </div>
  )
}

export default History