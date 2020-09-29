import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

// importing resume pdf as a component 
import Resume from "../../documents/Resume.pdf"

// importing Material Ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

// custom styling from import
import useStyle from "../../util/customStyles"

function Header() {
    // creating an object to hold style object
    const style = useStyle();

    return (
        <AppBar className={style.appBarHeader} position="static">
            <Toolbar>
                <ButtonGroup 
                    variant="text" 
                    color="secondary" 
                    aria-label="text primary button group"
                >
                    <Button component={Link} to="/">HOME</Button>
                    <Button component={Link} to="/about">ABOUT</Button>
                    <Button component={Link} to="/projects">PROJECTS</Button>
                    <Button 
                    
                        href={Resume}
                        rel="noopener noreferrer"
                        target="_blank"
                    >RESUME</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Header;