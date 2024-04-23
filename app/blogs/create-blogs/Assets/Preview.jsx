import React from 'react'

function Preview(props) {
  return (
    <div className='w-1/2 text-wrap'>
        <div       
        className='w-[100vh] h-screen text-wrap'
        dangerouslySetInnerHTML={{__html:props.text}}
        />
        
    </div>
  )
}

export default Preview
