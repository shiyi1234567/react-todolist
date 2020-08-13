import React, { Component } from 'react'
import store from './store/index'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getListChangeAction } from './store/actionCreator'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnCommit = this.handleBtnCommit.bind(this);
        this.handleBtnDelete = this.handleBtnDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange(e) {
        //input框数据输入
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        //store 更改监听
        this.setState(store.getState())
    }
    handleBtnCommit() {
        //增加列表项
        const action = getListChangeAction([...this.state.list, this.state.inputValue]);
        store.dispatch(action);
    }
    handleBtnDelete(index) {
        this.state.list.splice(index, 1)
        //删除列表项
        const action = getListChangeAction([...this.state.list]);
        store.dispatch(action);
    }
    componentDidMount() {
        //加载数据

    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                list={this.state.list}
                handleBtnCommit={this.handleBtnCommit}
                handleBtnDelete={this.handleBtnDelete}
            ></TodoListUI>
        )
    }
}
export default TodoList
