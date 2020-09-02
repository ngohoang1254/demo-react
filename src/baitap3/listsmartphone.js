import React from "react";
import {CardSmartPhone} from "./card"

export default function ListSmartPhone() {
    return (
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <CardSmartPhone/>
                <CardSmartPhone />
                <CardSmartPhone />
                <CardSmartPhone />
            </div>
        </section>
    );
}