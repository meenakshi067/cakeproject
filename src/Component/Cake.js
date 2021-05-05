import { render } from "@testing-library/react";
import { Component } from "react"; //react is a module and component is object that were importing from that module
import {Link} from "react-router-dom"



class Cake extends Component {       
    constructor() {
        super()
        this.state = {
          cakes:[]
        }
    }
    mm=[] 
    // mee={}
    details=(event)=>{
         console.log(event.target);
         if(event.target){
            // this.props.history.push('/Details');
            console.log(this.props);
            // this.mm.push(this.props)
         }
        // console.log(this.props);
    // this.mee=this.props
    // console.log(this.mm);
    //     this.setState({
    //         cakes:this.mm
    //     })
    }
     
     
    render() {
        return (
            <div>   
        <div class="card" style={{width: "16rem" , margin:"1rem"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-image-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>                
    <Link to = "/Details"><a href="#" class="btn btn-primary" onClick={this.details}>BUY</a></Link>
        </div>
    </div>  
    {/* {this.state.cakes.map((ele)=>{
       return <div><p>{ele.name}</p></div>
    })}  */}
            </div>
        )
    }
}

export default Cake;
// import {Component} from "react"
// class Cake extends Component{
//   constructor(){
//     super()
//     this.state={

//     }
//   }
//    cakeimg="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
//   render()
//   {
//     return(
       
//       <div class="card" style={{width: "18rem"}}>
//  <img src={this.cakeimg} class="card-img-top" style={{height:"300px"}} alt="..."></img>
//     <div class="card-body">
//       <h5 class="card-title">{this.props.name}</h5>
//       <p class="card-text">{this.props.price}</p>
//       </div>
//       </div>
//     )
//     }
// }

// export default Cake;
