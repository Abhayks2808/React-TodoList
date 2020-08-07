import React from 'react';
import './App.css'
import TodoInput from './components/Todo-Input/TodoInput';
import TodoList from './components/Todo-list/Todo-list'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash,faPen} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,faPen);

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            currentItem : {
                text:'',
                key: '',
            },
            completed:false

        }
    }
    handlechange = event => {
        this.setState({
            currentItem :{
                text:event.target.value,
                key:Date.now()
            }
        })
    }
    handlesubmit = event => {
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== '') {
            const AllItems = [...this.state.items,newItem];
            this.setState({
             items : AllItems,
             currentItem : {
              text : '',
              key:''
                  
             },
             completed:false
          })
        }
        else {
            alert('please Enter any text first')
        }
    }
    handledelete = (key) => {
        const filtereditems = this.state.items.filter(item => item.key!==key)
        this.setState({
            items:filtereditems
        })
    }
    handleEdit = (key) => {
        const filtereditems = this.state.items.filter(item => item.key!==key)
        const selectedItem = this.state.items.find(item => item.key === key);
        this.setState({
            items:filtereditems,
            currentItem :{
                text:selectedItem.text,
                key:selectedItem.key,
            },
            completed:false
        })
    }
    
    render() {
        return (
            <div className ="TodoApp">
                <h1 className="mainheading">TodoList</h1>
                <TodoInput  handlechange={this.handlechange} handlesubmit={this.handlesubmit} value={this.state.currentItem.text} />
                {
                    this.state.items.map(({text,key,handledelete}) => {
                        return (
                           <TodoList key={key} text={text} 
                           handledelete={() => this.handledelete(key)}
                           handleEdit={() => this.handleEdit(key)}  />
                        )
                    } )
                }
            </div>
        )
    }
}





export default TodoApp;