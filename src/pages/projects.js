import React from "react";

// import own component
import ProjectContainer from "../components/Project"

// import material ui components
import { Grid } from "@material-ui/core";

//import images for the src
import anon from "../images/anon.png"
import budget from "../images/budget.png"
import employee from "../images/employee.png"
import fitness from "../images/fitness.png"
import food from "../images/food.png"
import projectOne from "../images/projectOne.jpg"
import book from "../images/book.png"


function Gallery() {

    return (
            <Grid 
                container 
                spacing={0}
                justify= "center"
                align ="center"
            >
                <Grid item xs={12}>
                    <div style={{
                        marginTop: "50px"
                    }} />
                </Grid>
                <Grid item xs={10} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Chat App - Group Project"
                        imageSrc= {anon}
                        githubLink= "https://github.com/ben-j-st/Chat-App---Group-Project"
                        liveVersion= "https://chirpgram.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Budget Tracker"
                        imageSrc= {budget}
                        githubLink= "https://github.com/ben-j-st/On-Off-Money"
                        liveVersion= "https://glacial-dusk-08785.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "React Employee Manager"
                        imageSrc= {employee}
                        githubLink= "https://github.com/ben-j-st/React-Employee-Directory"
                        liveVersion= "https://obscure-crag-44110.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Activity Tracker"
                        imageSrc= {fitness}
                        githubLink= "https://github.com/ben-j-st/track-activities"
                        liveVersion= "https://gentle-anchorage-18985.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Burger App"
                        imageSrc= {food}
                        githubLink= "https://github.com/ben-j-st/foodthing"
                        liveVersion= "https://vast-ocean-16398.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Workout Manager - Group Project "
                        imageSrc= {projectOne}
                        githubLink= "https://github.com/ben-j-st/projectOne---bootcamp"
                        liveVersion= "https://ben-j-st.github.io/projectOne---bootcamp/index.html"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectContainer 
                        title= "Google Books API "
                        imageSrc= {book}
                        githubLink= "https://github.com/ben-j-st/Book-Finder"
                        liveVersion= "https://young-badlands-09256.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={12}>
                    <div style={{
                        marginBottom: "100px"
                    }}></div>
                </Grid>
            </Grid>
    )
}

export default Gallery;