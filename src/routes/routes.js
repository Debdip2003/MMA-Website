import { createBrowserRouter } from "react-router-dom";
import HomePage from "..//pages/HomePage"
import AboutPage from "..//pages/AboutPage"
import EventPage from "..//pages/EventsPage"
import AffiliationsPage from "..//pages/AffiliationsPage"
import BlogPage from "..//pages/BlogPage"
import ContactPage from "..//pages/ContactPage"
import ErrorPage from "..//pages/ErrorPage"


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
            element:<EventPage/>
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