import React from 'react'

export default function Navbar(props) {
  return (
        props.alert &&<div className={`alert alert-${props.alert.result} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.result}!</strong> {props.alert.msg}.
        </div>
  )
}
