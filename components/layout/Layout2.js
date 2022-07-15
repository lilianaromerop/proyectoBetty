import { Box } from "@mui/material"
import Navbar from "../Navbar"
import Footer2 from "../Footer2"


export const Layout2= ({children}) => {


    return (
    <Box >
        <Navbar></Navbar>
        {children}
        <Footer2></Footer2>
    </Box>
)
}