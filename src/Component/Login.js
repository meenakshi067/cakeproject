import {Component} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
import {toast} from "react-toastify";

class Login extends Component{
    constructor(){
        super()
        this.state={
            login:{},
            nameErr:"",
            passErr:""

    }

  }
  
  vaild=()=>{
    if(!this.state.login.email.includes("@") && this.state.login.password.length<4){
        this.setState({
            nameErr:"Invaild Email",
            passErr:"password length must be 4 Character"
        })
    }
    else if(!this.state.login.email.includes("@")){
        this.setState({
            nameErr:"Invaild Email"
        })
    }
    else if( this.state.login.password.length<4){
        this.setState({
            passErr:"password length must be 4 Character"
        })
    }
    else{
        return true;
    }
}
login={}
// get value from form
getEmail=(event)=>{ 
  this.login.email=event.target.value
  this.setState({
      login:this.login
  })
}
getPassword=(event)=>{
  this.login.password=event.target.value;
  this.setState({
      login:this.login
  })
}
fetchuseraxios=(e)=>{
  this.setState({
      nameErr:"",
      passErr:""
  })
  e.preventDefault();
  // console.log(this.state.login);
  if(this.vaild()){ 
      console.log(this.state.login);
      axios({
          method:"post",
          url:"https://apifromashu.herokuapp.com/api/login",
          data:this.state.login         
      }).then((res)=>{
          if(res.data){
              toast("Welcome to our Cake Shop");
              this.props.history.push('/home')
              console.log("response",res);
          }
      },(err)=>{
          console.log("error",err);
          toast("Oh! Sorry You enter Wrong details");
      })            
  }   
  else{
      toast("please Check Your details");
  }     
}



  

    render()
    {
        return(
          <div >
          <form style={{padding:"10em 27em", backgroundColor:"lightblue"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={this.getEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <p>{this.state.nameErr}</p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={this.getPassword}class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    <p>{this.state.passErr}</p>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.fetchuseraxios}>Submit</button>

  <p className="forget password text-center"></p>
  <Link to="/forgot">Forget password?</Link>
</form>


        
    

         


{/* <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th> */}
      {/* <th scope="col">Text</th> */}
      {/* <th scope="col">Image</th> */}
      {/* <th scope="col">Action</th> */}
{/*       
    </tr>
  </thead>
  <tbody>
    {this.state.details1.map((ele,index)=>{
      return <tr>
      <th scope="row">{index+1}</th>
      <td>{ele.Email}</td>
      <td>{ele.Password}</td> */}
      {/* <td>{ele.text}</td> */}
      {/* <td><img src={ele.image} style={{height:"50px", width:"50px"}}></img></td> */}
      {/* <button onClick={this.deleteEvent}>Delete</button>   */}
    {/* </tr>
    
    })}
    
  </tbody>
</table> */}

</div>
          )
    }
  }
   

export default Login;