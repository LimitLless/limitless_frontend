import type {NextPage} from 'next'
import MainLayout from "../layouts/Main";
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useEffect, useState} from "react";
import ClipLoader from 'spinners-react'
import {CircularProgress} from "@mui/material";

const Banner = dynamic(() => import('../components/pages/home/Banner'));
const EasyToUse = dynamic(() => import('../components/pages/home/EasyToUse'));
const Cards = dynamic(() => import('../components/pages/home/Cards'));
const About = dynamic(() => import('../components/pages/home/About'));
const INTERFACE = dynamic(() => import('../components/pages/home/INTERFACE'));
const Information = dynamic(() => import('../components/pages/home/information'));
const VideoYou = dynamic(() => import('../components/pages/home/VideoYou'));
const Forms = dynamic(() => import('../components/pages/home/Forms'));

const Home: NextPage = () => {
    const [loading, setLoading] = useState<Boolean>(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }, [])
    return (
        <>
            {
                loading ? <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100vw',
                        height: '100vh'
                    }}><CircularProgress /></div> :
                    <MainLayout showFooter={true}>
                        <Banner/>
                        <EasyToUse/>
                        <INTERFACE/>
                        <Cards/>
                        <Information/>
                        <VideoYou/>
                        <About/>
                        <Forms/>
                    </MainLayout>
            }
        </>

    )
}

export default Home;
