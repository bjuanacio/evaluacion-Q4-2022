import React, { FC } from 'react'
import './text.scss'

interface TextProps{
    className?: string;
}

export const Text:FC<TextProps> = ({
    className='text'
}) => {
  return (
    <h1 className={className}>GIF GALERY</h1>
  )
}
