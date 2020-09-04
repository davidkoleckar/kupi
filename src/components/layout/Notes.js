import React, { Component } from 'react'
import {InputGroup, Button, FormControl} from 'react-bootstrap';

class Notes extends Component {

  constructor(props) {
    super(props);
    this.input=React.createRef();
    this.state={
      list:[],
      listIndex: null
    }

    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  //show delete button -> change state
  mouseEnter(id) {
    this.setState({listIndex: id})
  }

  //hide delete button -> change state
  mouseLeave() {
    this.setState({listIndex: null})
  }

  addNote() {
    //get text of note
    const Note={
      value:this.input.current.value
    };
    //if is note empty, dont save it
    if(Note.value === ''){
      return;
    }
    //save to localstorage
    if(localStorage.getItem('list')==null){
      const list=[]
      list.push(Note);
      localStorage.setItem("list",JSON.stringify(list));
    } else {
      const list = JSON.parse(localStorage.getItem('list'));
      list.push(Note);
      localStorage.setItem("list",JSON.stringify(list));
    }
    //update list of notes
    this.setState({
      list:JSON.parse(localStorage.getItem('list'))
    });
    //clear input
    this.input.current.value = '';
  }

  componentDidMount() {
    //load list of notes after render page
    const list = window.localStorage.getItem('list');
    const parsedList = JSON.parse(list);
    if(list == null){
      return false
    } else {
      this.setState({
        list: parsedList
      })
    }
  }

  deleteNote(event) {
    //get index of note
    let index = event.target.getAttribute('data-key');
    let listValue=JSON.parse(localStorage.getItem('list'));
    //remove note
    listValue.splice(index,1);
    //update list
    this.setState({list:listValue});
    localStorage.setItem('list',JSON.stringify(listValue));
  }

  render() {
    return (
      <div>
        <h6>Poznámky:</h6>
        <ul className='list-group small'>{
          this.state.list.map((note,index)=>
          {
            return(
            <li className='list-group-item d-flex justify-content-between align-items-center note-color'
                key={index}
                onMouseEnter={this.mouseEnter.bind(this, index)}
                onMouseLeave={this.mouseLeave.bind(this)}>

              {note.value}

              {this.state.listIndex === index ? <span role='button' className='badge badge-danger badge-pill' data-key={index}
              onClick={this.deleteNote}>X</span> : null}
            </li>)
          })
        }</ul>
        <InputGroup size='sm' className='mb-3 mt-1' >
          <FormControl placeholder='Text' ref={this.input} onKeyPress={event => { if (event.key === "Enter") { this.addNote(); } }}/>
          <InputGroup.Append>
            <Button  variant='outline-secondary' onClick={this.addNote}>Přidat</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}

export default Notes