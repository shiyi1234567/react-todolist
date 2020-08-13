import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
const TodoListUI = (props) => {
    return (
        <div style={{ padding: 10 }}>
            <div>
                <Input placeholder="" value={props.inputValue} style={{ width: '300px' }} onChange={props.handleInputChange} />
                <Button type='primary' style={{ marginLeft: '15px' }} onClick={props.handleBtnCommit}>提交</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                style={{ marginTop: 10, width: 300 }}
                renderItem={(item, index) => (
                    <List.Item>
                        <div>{item}</div>
                        <Button onClick={() => { props.handleBtnDelete(index) }}>删除</Button>
                    </List.Item>
                )}
            />
        </div>
    )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ padding: 10 }}>
//                 <div>
//                     <Input placeholder="" value={this.props.inputValue} style={{ width: '300px' }} onChange={this.props.handleInputChange} />
//                     <Button type='primary' style={{ marginLeft: '15px' }} onClick={this.props.handleBtnCommit}>提交</Button>
//                 </div>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     style={{ marginTop: 10, width: 300 }}
//                     renderItem={(item, index) => (
//                         <List.Item>
//                             <div>{item}</div>
//                             <Button onClick={() => { this.props.handleBtnDelete(index) }}>删除</Button>
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;