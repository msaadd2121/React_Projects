import React from "react";
import Hero from '../Hero/Hero'
import Company from '../Company/Company'
import Work from "../Work/Work";
import LatestWork from "../LatestWork/LatestWork";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <>
        <Hero/>
        <Company/>
        <Work/>
        <LatestWork/>
        <Form/>
        </>
    )
}