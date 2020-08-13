import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoLi extends Component {
    constructor(props) {
        super(props);
        this.deleteValue = this.deleteValue.bind(this);
    }
    deleteValue() {
        this.props.delete(this.props.index);
    }
    render() {
        const { item, test } = this.props;
        return (
            <div>{test}--{item}&nbsp;&nbsp;<button onClick={this.deleteValue}>delete</button></div>
        )
    }
}
TodoLi.propTypes = {
    test: PropTypes.string.isRequired,//test属性的值类型为字符串，且必须传值
    item: PropTypes.string,//item属性的值的类型为字符串
    delete: PropTypes.func,//delete属性的值为函数
    index: PropTypes.number//index属性的值为数字
}
TodoLi.defaultProps = {
    test: 'Hello World'
}
export default TodoLi;