import React from 'react'

function Preview(props) {
  return (
    <div className='w-1/2 text-wrap'>
        <div       
        className='text-wrap'
        dangerouslySetInnerHTML={{__html:props.text}}
        />
        {props.text}
        
    </div>
  )
}

export default Preview
