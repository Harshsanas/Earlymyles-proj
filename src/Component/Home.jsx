import axios from 'axios';
import React,{useEffect, useState} from 'react'
import styled from "styled-components"

const BUTTONCAT = styled.div`
margin:50px;

  .categories-Section {
      display: flex;
      justify-content: space-evenly;

      button{
          background-color:orange;
          border: 1px solid orange;
          cursor: pointer;
          border-radius:4px;
          height:25px;
          padding:4px;
          color:white;

      }
  }
`;

export default function Home() {


    const[buttonName,setButton]=useState("")

    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products/categories")
        .then((response)=>{
            setButton(response)
            // console.log(response)
        })
        .catch((error)=>{
            console.error(error)
        })
    })

    return (
      <div>
        <BUTTONCAT>
          <div className="categories-Section">
            <button>ALL</button>
            {buttonName.data?.map((item) => {
              return (
                <div key={item.id}>
                  <button>{item}</button>
                </div>
              );
            })}
          </div>
        </BUTTONCAT>
      </div>
    );
}
