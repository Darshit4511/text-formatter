import React from 'react'

export default function Navbar(props) {
  return (
    <div style={{height:'40px'} }>

        {props.alert &&<div className={`alert alert-${props.alert.result} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.result}!</strong> {props.alert.msg}.
        </div>}
    </div>
  )
}
