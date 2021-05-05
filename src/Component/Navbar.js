import { render } from "@testing-library/react";
import { Link } from "react-router-dom"
import {Component} from "react"
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



render()
{
       return(
       <div>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top" style= {{backgroundColor:"#A93226",zIndex:30}}>
  <Link to="/Home"><a class="navbar-brand" href="#">Navbar</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" onChange={this.getSearchtext} type="search" placeholder="Search" aria-label="Search"></input>
     <Link to={`/Search?q=${this.state.searchtext}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
     <Link to="/Login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
    </form>
  </div>
</nav>
       </div>   
  )
}
}
export default Navbar;