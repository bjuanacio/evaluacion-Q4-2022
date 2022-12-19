import { useEffect } from "react";
import { useForm } from "../../../hook/use-form/use-form";
import { Button } from "../../atoms/button.tsx/button";
import { Input } from "../../atoms/input.tsx/input";
import { useState } from "react";
import "./header.scss";
import { Card } from "../card/card";

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

  const { data, handleDelete, handlePost, ApiService } = useForm();

  useEffect(() => {
    ApiService("get", {});
  }, []);

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

        <Button className="form__button" onClick={() => handlePost(inputSearch.searchInput)}>
          Agregar
        </Button>
      </div>

      <div className="data">
        {data.map((item: any) => {
          return <Card key={item.id} item={item} onClick={handleDelete} />;
        })}
      </div>
    </div>
  );
};
