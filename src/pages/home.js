import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../util/customStyles"



const inlineStyle = {
    name: {
        marginBottom:0,
    }, 
    stack: {
        marginTop:"10px"
    }
}
function Home() {

    const style = useStyles();
    return (
        <div className={style.divFlexGrow}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                    <div className={style.homeImage}>
                        <div className={style.emptySpace} />
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <h1 style={inlineStyle.name}>Ben Stephens</h1>
                    <h4 style={inlineStyle.stack}>Full Stack Developer</h4>
                    </Grid>
                    <Grid item xs={12}>
                        <div><span className={style.bold}>Phone:</span> 0452 188 552</div>
                        <div style={{marginTop:"10px"}}><span className={style.bold}>Email:</span> ben_j_stephens@hotmail.com</div>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Home;
