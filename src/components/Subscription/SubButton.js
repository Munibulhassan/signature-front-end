import React from 'react'
import Button from "react-bootstrap/Button";
import "./styles.css"

export default function SubButton(props) {
  const {
    title
  } = props
  return (
   
    <Button className='rounded-pill btn-width'>{title}</Button>
  )
}
