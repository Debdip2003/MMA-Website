import { createBrowserRouter } from "react-router-dom";
import HomePage from "..//pages/HomePage"
import AboutPage from "..//pages/AboutPage"
import EventPage from "..//pages/EventsPage"
import AffiliationsPage from "..//pages/AffiliationsPage"
import BlogPage from "..//pages/BlogPage"
import ContactPage from "..//pages/ContactPage"
import ErrorPage from "..//pages/ErrorPage"
import GrindPage from "..//pages/GrindPage"
import KproPage from "..//pages/KproPage"
import EonPage from "..//pages/EonPage"
import EryxPage from "..//pages/EryxPage"
import IrisPage from "..//pages/IrisPage"


const routes=createBrowserRouter([
{
    path:'/',
    children:[
        {
            path:'/',
            element:<HomePage/>,
        },
        {
            path:'/About',
            element:<AboutPage />
        },
        {
            path:'/Events',
            element:<EventPage/>,
        },
        {
            path:'/K-Pro',
            element:<KproPage/>
        },
        {
            path:'/Eon',
            element:<EonPage/>
        },
        {
            path:'/Eryx',
            element:<EryxPage/>
        },
        {
            path:'/Iris',
            element:<IrisPage/>
        },
        {
            path:'/Grind',
            element:<GrindPage/>
        },
        {
            path:'/Affiliations',
            element:<AffiliationsPage/>
        },
        {
            path:'/Blogs',
            element:<BlogPage/>
        },
        {
            path:'/Contact',
            element:<ContactPage/>
        }
        
    ],
    errorElement:<ErrorPage/>
    },

])

export default routes