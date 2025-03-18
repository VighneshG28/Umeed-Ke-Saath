import React, { useEffect, useRef, useState } from 'react'
import NgoCard from './ngoCard'
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import './card.css'

const Area = () => {

  const [country, setCountry] = useState([]);
  const [cause, setCause] = useState([]);
  const inputRef = useRef()

  const search = async (area) => {
    try {
      const url = `https://partners.every.org/v0.2/search/${area}?apiKey=${import.meta.env.VITE_NGO_KEY}&take=50`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setCountry(data.nonprofits);
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  }
    
  const causeSearch = async (causes) => {
    try {
      const url = `https://partners.every.org/v0.2/browse/${causes}?apiKey=${import.meta.env.VITE_NGO_KEY}&take=50`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setCause(data.nonprofits)
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  }
    
  return (
    <div className='main-search-container'>
      <h2 className='search-heading'>Search for the NGOs here...</h2>
      <div className='search-bar'>
      <DropdownMenu>
        <DropdownMenuTrigger className='trigger'><FaFilter /></DropdownMenuTrigger>
        <DropdownMenuContent className="content">
          <DropdownMenuLabel className="label">Causes</DropdownMenuLabel>
          <DropdownMenuSeparator className="separator"/>
          <DropdownMenuItem className="item" onClick={() => causeSearch("animals")}>Animals</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("health")}>Health</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("adoption")}>Adoption & Foster Care</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("education")}>Education</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("disabilities")}>Disabilities</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("environment")}>Environment</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("climate")}>Climate Change</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("immigrants")}>Immigrants</DropdownMenuItem>
          <DropdownMenuItem className="item" onClick={() => causeSearch("seniors")}>Seniors</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        <input type='text' placeholder='search' ref={inputRef} className='input-box'></input>
        <button onClick={() => search(inputRef.current.value)}><IoSearch className='search-icon'/></button>
      </div>
      <div className='ngo-cards'>
        <NgoCard details = {country}/>
        <NgoCard details = {cause}/>
      </div>
    </div>
  )
}

export default Area