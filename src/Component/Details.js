import {Component} from "react"
import { render } from "react-dom"
import Cake from "./Cake"

class Details extends Component{ //component ki property jo hai vo hm details me use kr rhe hai
    constructor(){
        super()
        console.log(this.props);
        this.state={}

    }
    componentDidMount(props){

        console.log(this.props);
    }

render(){
    return( 
       <div>
     <h1>details</h1>
        </div>
    )
}
}

export default Details;
