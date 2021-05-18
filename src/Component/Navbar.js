import { render } from "@testing-library/react";
import { Link } from "react-router-dom"
import {Component} from "react"
import {connect} from "react-redux"
class Navbar extends Component{
  constructor(){
    super()
    this.state={
      searchtext: undefined
    }
  }
  searchtext
    getSearchtext=(event)=>{
      // this.searchtext=event.target.value
      this.setState({
        searchtext:event.target.value
      })
    }

    componentDidMount(){
      this.setState({
        token:localStorage.getItem("tokenId"),
        isToken:true
      },()=>{console.log(this.state.token)})
    }


    logout=()=>{
      this.setState({
        token:localStorage.removeItem("tokenId"),
        isToken:false
      })
    }


render()
{
       return(
       <div>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top" style= {{backgroundColor:"#F7F2F2",zIndex:30}}>
  <Link to="/Home"><a class="navbar-brand" href="#">Cakes shop</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" onChange={this.getSearchtext} type="search" placeholder="Search" aria-label="Search"></input>
     <Link to={`/Search?q=${this.state.searchtext}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
     <Link to="/Dashboard"><button type="button" class="btn" style={{marginLeft:"1em",fontSize:"10px", backgroundColor:"white" ,color:"tomato"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi-person-lines-fill" viewBox="0 0 16 16" >
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg></button></Link>

    </form>
  </div>

  <Link to="/Cart"><button type="button" class="btn" style={{marginLeft:"1em",fontSize:"10px", backgroundColor:"white" ,color:"tomato"}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></button></Link>

  {!this.state.islogged?<Link to="/Login"><button type="button" class="btn btn-outline-info"> login</button></Link>:<button type="button" class="btn btn-outline-info" onClick={this.logoutbutn}>logout</button>}
</nav>
       </div>   
  )
}
}
export default connect((state, props) => {
  console.log(state);
  return {
    islogged:state["isloggedin"]  }
})(Navbar);
