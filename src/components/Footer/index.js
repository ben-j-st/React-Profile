import React from "react";
import "./style.css";

// importing Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

// importing Material UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// importing custom styling
import useStyles from "../../util/customStyles"



function Footer () {   
    // creating an object to store custom styling
    const style = useStyles()
   
    return (
            <AppBar position="fixed" className={style.appBarFooter}>
                <Toolbar>
                    <ButtonGroup 
                        variant="text" 
                        color="secondary" 
                        aria-label="text primary button group"
                    >
                        {/* Button contains the github component */}
                        <Button 
                            href={"https://github.com/ben-j-st"}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        <GitHubIcon  style={{marginRight:"3px"}}/>
                        GitHub
                        </Button>

                        <Button 
                            href={"https://www.linkedin.com/in/ben-stephens-3a19181a8/"}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        <LinkedInIcon />
                        LinkedIn 
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
    )
}

export default Footer;