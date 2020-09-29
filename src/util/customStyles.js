// import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import compImage from "../images/code-computer.jpg"

const useStyles = makeStyles((theme) => ({
    appBarHeader: {
        alignItems: 'center',    
    },
    appBarFooter: {
        top: 'auto',
        bottom: 0,
        display: 'flex',
        alignItems: "center"
    },
    divFlexGrow: {
        flexGrow: 1,
        textAlign: 'center',
    },
    textLeft: {
        paddingLeft: "5%",
        textAlign: "left",
        fontSize: "20px"
    },
    bold: {
        fontWeight: "bold",
    },
    homeImage: {
        minHeight: "45vh",
        background: `url(${compImage}) top right no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",

    },
    emptySpace: {
        height: "45vh"
    },
}));

export default useStyles;