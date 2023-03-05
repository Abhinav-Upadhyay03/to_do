import React, {useState, useEffect} from 'react'

const getLocalData = () => {
  const lists = localStorage.getItem("mytodoList");
  if(lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
};


const Title = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const[isEdit,setIsEdit] = useState("");
  const[toggle,setToggle] = useState(false);

  const addItem = () => {
    if(!inputdata){
      alert("Add a item to add.");
    }
    else if(inputdata && toggle){
      setItems(
        items.map ((curElem) => {
          if(curElem.id === isEdit){
            return {...curElem, name:inputdata};
          }
          return curElem;
        })
      );
       setInputData([]);
    setIsEdit(null);
    setToggle(false);
    }
    else{
      const newInput = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, newInput]);
      setInputData("");
    }
  }

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEdit(index);
    setToggle(true);
    
  }


  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !==  index;
    });
    setItems(updatedItem);
  };

  const deleteAll = () => {
    return setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("mytodoList",JSON.stringify(items))
  }, [items])

  return (
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <img src= "./images/todo.jpg" alt="to-do logo" />
          <figcaption>Add Your List Here👇🏻</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" 
          placeholder="Add Item" 
          className='form-control'
          value={inputdata}
          onChange = {(event) => setInputData(event.target.value)}
          />
          {toggle ? (
            <i className='far fa-edit add-btn' onClick={addItem}></i>
          ) : (
            <i className='fa fa-plus add-btn' onClick={addItem}></i>
          )}

        </div>
        <div className='showItems'>

          {
            items.map( (curElem, index) => {
              return (
                <div className='eachItem' key={index}>
                  <h3>{curElem.name}</h3>
                  <div className='todo-btn'>
                    <i class="far fa-edit add-btn"
                      onClick={ () => editItem(curElem.id)}
                    ></i>
                    <i class="far fa-trash-alt add-btn"
                      onClick={() =>
                      deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              )
            })
          }
          
        </div>
        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All"
          onClick={deleteAll}>
            <span>Check List</span>
          </button>
        </div>
        <footer>
        <h3 className='foot'>©Abhinav Upadhyay 2023</h3>
      </footer>
      </div>
      
    </div>
  ) 
}

export default Title
