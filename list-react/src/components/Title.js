import React from 'react'

const Title = () => {
  return (
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <img src= "./images/todo.jpg" alt="to-do logo" />
          <figcaption>Add Your List Here👇🏻</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='Add Item' 
          className='form-control'
          // value={inputdata}
          // onChange = {(event) => setInputData(event.target.value)}
           />
           <i class="fa fa-plus add-btn"></i>
        </div>
        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All">
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  ) 
}

export default Title
