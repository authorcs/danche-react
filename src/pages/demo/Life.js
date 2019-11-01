import React from 'react'
import Child from './Child'
import './index.less'
import 'antd/dist/antd.css'
import { Button } from 'antd'

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    // 绑定的方法，3种
    // this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    // 直接改变
    this.setState({
      count: this.state.count + 1
    })
  }

  handleRedurce = ()=> {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    let style = {
      padding: 50,
      background: "#ccc"
    }
    return (
      <div style={style} className="life-container">
        <p>...</p>
        <button onClick={this.handleRedurce}>点击减一下</button>
        <button onClick={this.handleAdd.bind(this)}>点击加一下</button>
        <p>{this.state.count}</p>
        <Child count={this.state.count}></Child>
        <Button type="danger" size="small">antd按钮</Button>
      </div>
    )
  }
}