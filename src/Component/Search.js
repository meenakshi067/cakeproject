import { render } from "@testing-library/react";
import {Component} from "react"
import cakes from "./Data";
import Cake from "./Cake"
import queryString from  "query-string"
import axios from "axios";
import { useState, useEffect } from "react";



function Search(props) {
  var [cakeresult, setCakes] = useState([]);
  var [isloading,setloading] = useState(false);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
    setloading(true)
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data)
        setloading(false);
      },
      (error) => {
        console.log("error",error);
      }
    );
  }, [query.q]); //jo humari query hogi search se se usko data nikal ke de dega 

  return (
    
    <div className="row">
      {isloading && <div>
        <div class = "d-flex justify-content-center" style={{margin:"100px 30px"}}>
          <div class="spinner-border" role="status">
            <span class = "sr-only">Loading...</span>
          </div>
        </div>
        </div>}


      {!isloading && cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {!isloading && cakeresult.length<=0 && <div>
         <p style={{marginTop:"7em"}}> No result found</p>
      </div>}
    </div>
  );
}

export default Search;