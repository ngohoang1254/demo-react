import React from "react";
import Header from "./header";
import Carousel from "./carousel";

import ListLaptop from "./listlaptop";
import ListSmartPhone from "./listsmartphone";
import Promotion from "./promotion";
export default function Baitap3(){
    return(
        <>
        <Header/>
        <Carousel/>
        <ListSmartPhone/>
        <ListLaptop/>
        <Promotion/>
        </>
    );
}