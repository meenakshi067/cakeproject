import { Component } from "react";
import {CakeDetails} from './CakeDetails'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";
import {toast} from "react-toastify";


class Details extends Component {

    
    constructor(props) {
        super(props)
        this.state = {}
        // this.NavigationDemo()
    }



    registers = () => {
     
        //   const history = new useHistory();
        const cartCake = {
            cakeid: this.props.cakedata.cakeid,
            name: this.props.cakedata.name,
            image: this.props.cakedata.image,
            weight: this.props.cakedata.weight,
            price: this.props.cakedata.price,
        };
    
    
                axios.post("https://apifromashu.herokuapp.com/api/addcaketocart",cartCake,{
                        headers: { "authtoken":localStorage.getItem("token")}
                    }).then((res) => {
                        console.log("helloresss", res);
                        
                       if( res.data !== "Session Expired"){
                           toast("Added to cart");
                          
                        }
                       else {
                           toast("Please Login Your ID");
                        }
                        
                        
                    }, ((err) => {
                        console.log("hello",err);
                      }))
    }

    // addToCart(){
    //     if(!localStorage.userlog){
    //         this.toaster.error("plz login first");
    //         this.router.navigate(['login/']);
    //     }else if(localStorage.userlog){
    //         console.log(this.cake);
    //         this.cartCake={
    //             cakeid: this.props.cakedata.cakeid,
    //             name: this.props.cakedata.name,
    //             image: this.props.cakedata.image,
    //             weight: this.props.cakedata.weight,
    //             price: this.props.cakedata.price
                 
    //         };
    //         console.log(this.cartCake);
    //         this.toaster.error("items added to cart successfully");
    //     }
    // }

    render() {
        console.log("state,", this.props)

        return (
            <div class="card mb-3" style={{ maxWidth: "80vw" ,marginLeft:"13em" ,border:"none"}}>
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div onClick = {()=>{
            
                        // this.NavigationDemo(this.props.cakedata.cakeid);
                                }}
                     class="card detail-card" style={{marginTop:"5em"}}>
              <div class="row no-gutters">
                <div class="col-md-4" >
                <img src={this.props.cakedata.image} style={{height:"100%" ,width:'23vw'}}class="card-img-top cakeImg" alt="..."></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body" style={{color:"tomato" ,marginRight:"15em"}}>
                      <h3 class="card-title">{this.props.cakedata.name}</h3>                
                            <p class="card-text">Ratings : {this.props.cakedata.ratings}</p>  
                            <p class="card-text">Price : {this.props.cakedata.price}</p>  
                            <p class="card-text">{this.props.cakedata.description}</p>
                            <p class="card-text">Weight : {this.props.cakedata.weight}</p>  
                            <p class="card-text">Flavour : {this.props.cakedata.flavour}</p>  
                            <p class="card-text">Type : {this.props.cakedata.type}</p>                  
                            <p class="card-text">{this.props.cakedata.likes}😍</p>   
                            <button  onClick={(e) => {
                   e.preventDefault()
                    console.log("hiiiiii")
                   this.registers();
                 }} 

                type="button" class="btn btn-success">Add To Cart<i class="fas fa-cart-plus"></i></button>
                 <button type="button" class="btn btn-success" style={{marginLeft:"1em"}}>Buy</button>
                  </div>
            
                </div>
                    </div>
                    </div>
                    </Link>
            </div>
        )
    }
}

export default Details;

