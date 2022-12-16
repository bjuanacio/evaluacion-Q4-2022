import React, { useEffect } from "react";
import { useForm } from "../../../hook/use-form/use-form";
import { Button } from "../../atoms/button.tsx/button";
import { Input } from "../../atoms/input.tsx/input";
import { useState } from "react";
import "./header.scss";
import { Card } from "../card/card";
import { useApi } from "../../../hook/use-api/use-api";
import { url } from "inspector";


export const Header = () => {
  const [inputSearch, setinputSearch] = useState({
    searchInput: "",
  });

  const handleInputChange = (e: any) => {
    e.preventDefault();

    setinputSearch({
      searchInput: e.target.value,
    });
  };

  const [gifUrl, setGifUrl] = useState("")
  const { data, ApiService } = useApi();

  console.log(data);

  useEffect(() => {
    ApiService("get",{})
  }, []);

  const handlePost =()=>{

    ApiService("post",{
      url:gifUrl!,
      author_id: 20
  })
  }
  const handleDelete =(idDelete:number,urlDelete:string)=>{
    ApiService("delete",{
      id:idDelete!,
      url:urlDelete!,
      author_id:20
    })
  }
  return (
    <div className="container">
      <label className="container__label" htmlFor="search">
        Gif Galery
      </label>

      <div className="form">
        <Input
          className={"form__input"}
          placeholder={"placeholder"}
          name="searchInput"
          value={inputSearch.searchInput}
          onChange={handleInputChange}
        />

        <Button className="form__button" onClick={()=>handlePost()}>
          Agregar
        </Button>
      </div>

      <div className="data">
        {
          data.map((item:any)=>{
            return <Card key={item.id}   item={item} onClick={handleDelete} />
          })
        }
        
      </div>
    </div>
  );
};
