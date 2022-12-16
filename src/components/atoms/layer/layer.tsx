import React, { FC } from 'react'
import './layer.scss'


interface LayerProps{

    type?: 'text';
    name?: 'search';
    autoComplete?: 'off';
    placeholder?: string
}

export const Layer:FC<LayerProps> = ({
    type,
    name,
    autoComplete,
    placeholder = "GIFT URL"
}) => {
  return (
    <input
    type={type}
    name={name}
    autoComplete={autoComplete}
    className="layer"
    placeholder={placeholder}
  ></input>
  )
}
