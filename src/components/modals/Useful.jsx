import React from 'react'

function Useful({data}) {
  return (
    <div className='p-5 max-h-[80vh] overflow-auto'>
      <p className='text-xs'>{data}</p>
    </div>
  )
}

export default Useful