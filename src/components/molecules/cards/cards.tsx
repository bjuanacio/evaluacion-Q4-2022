import React, {FC, useEffect, useState} from 'react';
import "./cards.scss";
import clienHttp from "../../../services/client/client";
import Card from "../../atoms/card/card";
import WarningIcon from "../../../assets/warning-icon.svg";

interface CardsProps {
    id: string;
    url: string;

}
const Cards= () => {
    const[listaGifs, setListaGifs] = useState([]);


    useEffect(() => {
        clienHttp.get(`/?author_id=34`)
            .then((response)=>{
                console.log(response.data);
                setListaGifs(response.data)
            })
    }, []);


    return listaGifs.length !== 0 ? (
        <div>
            {listaGifs.map((lis) =>
                <Card image={lis.url}/>
            )}
        </div>
    ) : <div>
            <img className={"img"} src={WarningIcon}/>
            <h1 className={"h1"}>No posee gifs</h1>
        </div>;
};

export default Cards;
