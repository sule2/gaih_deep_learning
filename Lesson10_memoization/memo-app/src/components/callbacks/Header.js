import React from 'react'

function Header({ number,increment}) {
    console.log(Header.name + " comp re-rendered");
  return (
    <div>Header - {number} <br/>
    <button onClick={increment}>+1</button>
    </div>
    
  )
}

export default React.memo(Header) 