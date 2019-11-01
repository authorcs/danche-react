import React from 'react'

// 初次渲染时， 只会执行 componentWillMount, componentDidMount
// 传入的值发生改变时， 执行  componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate

// shouldComponentUpdate 组件必须返回 true/fasle ,可以用来控制不需要重复渲染的东西，提高性能

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('DidMount')
  }
  componentWillReceiveProps(newProps) {
    console.log('will props')
  }
  shouldComponentUpdate() {
    console.log('shouldUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('will update')
  }
  componentDidUpdate() {
    console.log('did update')
  }
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}