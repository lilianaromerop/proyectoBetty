import { Box } from "@mui/material"
import Navbar from "../Navbar"


export const Layout2= ({children}) => {


    return (
    <Box >
        <Navbar></Navbar>
        {children}
    </Box>
)
}