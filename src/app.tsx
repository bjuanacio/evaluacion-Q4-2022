import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import Button from "./components/atoms/button/button";
import Input from "./components/atoms/input/input";
import Label from "./components/atoms/label/label";
import InterfaceSimple from "./components/molecules/interfacesimple/interfacesimple";
import React from "react";
import Interfacesimple from "./components/molecules/interfacesimple/interfacesimple";
import Card from "./components/atoms/card/card";

const App = () => {
  return (
    <div className="app__color--background">
        <Label children="Gif Galery" size="large"/>
        <Interfacesimple/>
        <Card image="https://media.tenor.com/9LTaB5Ezn0UAAAAM/reface.gif"/>
    </div>);
};

export default App;
