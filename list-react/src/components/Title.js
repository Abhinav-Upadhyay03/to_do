import React from 'react'

const Title = () => {
  return (
    <div className='title-class'>
      
      <div className='con-body'>
        <figure>
          <img className='con-img' src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png" alt="" />
          <h1>To Do List</h1>
          <figcaption className='con-title'>Let's have a look at your list👀</figcaption>
        </figure>
        <input className='con-input' type="text" placeholder='Add your element' />
        <button className='con-b1'>Add</button>

      </div>
      <button className='con-b2'>DONE</button>
    </div>
  )
}

export default Title
