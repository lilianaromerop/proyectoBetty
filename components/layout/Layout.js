import { Box } from "@mui/material"
import Navbar from "../Navbar"
import Footer from "../Footer"

export const Layout= ({children}) => {


    return (
    <Box >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    
        

    </Box>
)
}