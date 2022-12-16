import React, { FC } from "react";
import { Button } from "../atoms/button/button";
import { Grid } from "../atoms/grid/grid";
import { Layer } from "../atoms/layer/layer";
import { Text } from "../atoms/text/text";
import "./submit.scss";

interface SubmitProps {
    
}

export const Submit:FC<SubmitProps> = ({

}) => {
  return (
    
    <form >
        <Text></Text>
        <br></br>
        <Layer></Layer>
        <Button></Button>
        <div>
            <Grid></Grid>
        </div>
    </form>
  );
};
