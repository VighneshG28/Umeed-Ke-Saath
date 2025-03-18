import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { FaFilter } from "react-icons/fa";



const Demo = () => {
  // const [info, setInfo] = useState(null);

  // const causeSearch = async (causes) => {
  //   try {
  //     const url = `https://partners.every.org/v0.2/browse/${causes}?apiKey=${import.meta.env.VITE_NGO_KEY}&take=50`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error in fetching data", error);
  //   }
  // }

  // useEffect(() => {
  //   causeSearch("animals");
  // }, []);

  return (
    <div>
      {/* {info ? (
        <div>
          <img src={info.coverImageUrl} alt="NGO Cover" />
          <h1>{info.name}</h1>
          <p>{info.description}</p>
          <a href={info.websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      ) : (
        <p>Loading...</p>
      )} */}
      
    </div>
  );
};

export default Demo;
