import {FC, useState} from "react";
import {Box, Button, Container, Paper, Theme, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {media} from "../../../utility/media";
import {howToUseSteps} from "../../../constants/main";

const containerPY = media(30, 45);

const useStyles = makeStyles((theme: Theme) => ({
    smartAnimate: {
        padding: ` 5px ${media(20, 50)}`,
        background: "linear-gradient(270deg, #675A37 -3.1%, rgba(107, 93, 58, 0.588329) 18.19%, rgba(242, 210, 124, 0.85) 47.68%, rgba(77, 69, 50, 0.78) 101.74%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: '8px',
        border: "none",
        color: "black",
        fontFamily: 'Raleway',
        fontStyle: "normal",
        fontWeight: '400',
        lineHeight: "23px",
        letterSpacing: "0.2em"
    },
    styleImage: {
        maxWidth: media(300, 450),
        width: "100%"
    },
    styleBtn: {
        background: "black",
        color: 'white',
        padding: "5px 20px",
        "&:hover": {
            background: "black",
        }
    },
    video: {
        height: media(200, 600)
    },
    video1: {
        position: "relative",
        paddingBottom: "56.25%",
        /* 16:9 */ height: 0,
        "& img": {
            position: "absolute", display: "block", top: 0, left: 0, width: "100%", height: "100%", zIndex: "20", cursor: "pointer"
        }
    }
}));

const VideoYou: FC = () => {
    const styles = useStyles();

    const [play, setPlay] = useState(true)

    return (
        <div style={{background: "#181818", padding: `${media(10, 40)} 20px`}}>
            {play ? <Paper style={{background: `url(${require("../../../assets/images/posterLc.png")}) no-repeat center/cover`, width: "100%", height: media(200, 600), display: "flex", justifyContent: "center", alignItems: "center", cursor: 'pointer'}} onClick={() => setPlay(false)}>
                <svg width={media(75, 149)} height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.6 108.025L104.3 74.5L59.6 40.975V108.025ZM74.5 0C33.376 0 0 33.376 0 74.5C0 115.624 33.376 149 74.5 149C115.624 149 149 115.624 149 74.5C149 33.376 115.624 0 74.5 0ZM74.5 134.1C41.6455 134.1 14.9 107.354 14.9 74.5C14.9 41.6455 41.6455 14.9 74.5 14.9C107.354 14.9 134.1 41.6455 134.1 74.5C134.1 107.354 107.354 134.1 74.5 134.1Z" fill="white"/>
                </svg>
            </Paper> :  <iframe width="100%"  className={styles.video} src="https://www.youtube.com/embed/Gn6UB7emn58?autoplay=1&VQ=HD720"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay"
                                allowFullScreen
            />
            }


        </div>

    )
}


export default VideoYou;