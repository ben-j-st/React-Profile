import React from "react";
import "./style.css";

// importing material ui components
import { Button } from "@material-ui/core"
import { Card } from "@material-ui/core"
import { CardContent } from "@material-ui/core"

function ProjectContainer(props) {

    return (
        <Card style={{
            maxWidth: "400px",
            minHeight: "365px",
            marginBottom: "16px"
        }}>
            <CardContent>
                <h3>{props.title}</h3>
                <img src={props.imageSrc} alt={props.title} />
                <Button 
                    href={props.githubLink}
                    target="_blank"
                    variant="outlined"
                    color="primary"
                >Github</Button>
                <Button 
                    href={props.liveVersion}
                    target="_blank"
                    variant="outlined"
                    color="primary"
                >Live Version</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectContainer;