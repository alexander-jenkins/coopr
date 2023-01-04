import React from 'react'

function test({children}) {
  return (
    <div>
        <button style={{backgroundColor: '#909090'}}>{children}</button>
    </div>
  )
}

export default test