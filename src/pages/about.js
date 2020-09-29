import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../util/customStyles"
import profileImage from "../images/profile-rs.jpg"

function About() {
    const style = useStyles();

    return (
        <div className={style.divFlexGrow}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div style={{ height: "30px" }}></div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <p style={{ paddingLeft: "3%", paddingRight: "3%" }}></p>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    ><Grid item xs={12} lg={6}>
                            <p>My name is Ben. Some things to know about me include, I am quite a large foodie,
                            i love eating out and trying new foods and enjoy all the incredible cuisine Melbourne
                            has to offer, during the weekends you're most likely to find me enjoying coffee and
                            brunch with my partner. My passions include Gaming, Going to the movies, Eating and
                            Staying healthy with exercise. I am currently studying Monash Bootcamps Full Stack Web
                    Development, in hopes of pursuing a career in IT.</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h1>Past:</h1>
                            <p>Having just completed high school I was keen for a break for a year to earn some money,
                            when I brought this decision to my mother's attention this idea was quickly shot down.
                            So back to school I went, where I went through a few years of tafe and uni struggling
                        to stay motivated and committed to the courses that I was doing.</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h1>Present:</h1>
                            <p>Over the last several years I have been a personal trainer and group fitness instructor,
                            I found early in life that one of my big passions was keeping fit and active, having done
                            years of kung fu and football and various other sports. So when it came time to pursue a
                        career path, one of my options was fitness.</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h1>Future:</h1>
                            <p>When I think about the future, I look forward to a career that continues to keep me
                            interested and challenged for years to come, where every day brings with it a little
                            adventure and discovery, some new project or role to remind me why I love computers and
                        why I choose to pursue a career in IT.</p>
                            <div style={{ marginBottom: "100px" }}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src={profileImage}
                        alt={"profile"}
                        style={{
                            width: "250px",
                            height: "400px",
                            borderRadius: "1em",
                            textAlign: "center",
                            marginBottom: "100px"
                        }}
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default About;
