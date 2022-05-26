import React from 'react'

 function Picture(props) {
  return (
    <img class = "img" src = {props.image} height = {200} width = {200} alt = "Image"/>
  )
}

export default Picture
