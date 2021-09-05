import logo from './logo.svg';
import React from "react"
import './App.css';
import PropTypes from "prop-types"
class App extends React.Component {
    state={
        count:0
    }
    add = ()=>{

        this.setState(current =>({count:current.count +1}))
    }
    minus = ()=>{
         this.state.count --
        console.log(this.state.count)
    }
    componentDidMount() {
        console.log("component rendered")
    }//렌더를 처음 마친후
    componentDidUpdate(){
        console.log("component Update")
    }//렌더 처음 마친 후 업데이트될때
    componentWillUnmount(){
        console.log("GoodBye")
    }//다른 페이지로 갈때 마운트가 죽으면서 삭제되는 컴포넌트의 행동
    render() {
        console.log("rendering")
        return(
        <div>
            <h1>count {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}


export default App;

