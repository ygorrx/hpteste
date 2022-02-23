import React from 'react'


const Image = ({alt, ...props}) => {

  return (
    <div>
        <img alt='' src='' {...props}/>
    </div>
  )
}

export default Image