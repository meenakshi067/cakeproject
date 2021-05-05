import { render } from "@testing-library/react";
import {Component} from "react"
import cakes from "./Data";
import Cake from "./Cake"
import queryString from  "query-string"
import axios from "axios";
import { useState, useEffect } from "react";



function Search(props) {
  var [cakeresult, setCakes] = useState([]);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data)
      },
      (error) => {
        console.log("error",error);
      }
    );
  }, [query.q]); //jo humari query hogi search se se usko data nikal ke de dega 

  return (
    
    <div className="row">
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {cakeresult.length<=0 && <div>
          No result found
      </div>}
    </div>
  );
}

export default Search;