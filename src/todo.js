import React, { Component, Fragment } from 'react'
import './todo.css'
import TodoLi from './TodoLi'
import axios from 'axios'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',//input框里的内容
            list: []  //事件列表
        }
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.commitValue = this.commitValue.bind(this);
    }
    handleChangeValue(e) {
        //input框,数据输入
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    commitValue() {
        //提交，增加一个新的list
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => (
            {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        ))
    }
    deleteValue(index) {
        //删除,删除某一个list
        const list = [...this.state.list];
        list.splice(index, 1);
        // this.setState({
        //     list
        // })
        this.setState(() => ({
            list
        }))
    }
    //生命周期 请求数据
    componentDidMount() {
        axios.get('/api/js')
            .then((res) => {
                this.setState(() => ({ list: [...res.data] }))
            })
            .catch((err) => {
                alert('err');
            })
    }
    getTodoLi() {
        return (
            this.state.list.map((item, index) => {
                return <TodoLi item={item} index={index} key={index} delete={this.deleteValue.bind(this)}></TodoLi>
            })
        )
    }
    render() {
        return (
            <Fragment>
                <div className='main'>
                    <div>
                        <label htmlFor='insertArea'>输入内容</label>
                        <input
                            id='insertArea'
                            value={this.state.inputValue}
                            onChange={this.handleChangeValue}></input>
                        <button onClick={this.commitValue}>提交</button>
                    </div>
                    <ul>
                        {
                            this.getTodoLi()
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Todo;