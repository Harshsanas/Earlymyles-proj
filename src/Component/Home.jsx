import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import{fetchData} from "../Redux/action"
import styled from "styled-components"
import { useSelector } from 'react-redux';

const BUTTONCAT = styled.div`
margin-top:20px;

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

    const Cards=()=>{
        const data=useSelector((state)=>state);

        const dispatch = useDispatch();

        console.log(data,"Data redux");

        useEffect(()=>{
            dispatch(fetchData())
        },[])
    
    }

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
