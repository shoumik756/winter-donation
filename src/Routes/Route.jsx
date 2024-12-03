import { createBrowserRouter, NavLink } from "react-router-dom";
import MainLayoutStu from "../MainLayout/MainLayoutStu";
import Home from "../Home/Home";
import DonationCampaigns from "../DonationCampaigns/DonationCampaigns";
import HowToHelp from "../HowToHelp/HowToHelp";
import Dashboard from "../Dashboard/Dashboard";
import DonationCampDetails from "../DonationCampaigns/DonationCampDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Components/ForgetPassword";
import UpdateInfo from "../Components/UpdateInfo";

const route = createBrowserRouter([
    {
        path:'/',
        element: <MainLayoutStu></MainLayoutStu>,
        errorElement: <div className="flex justify-center items-center flex-col h-[100vh] space-y-2">
            <h1 className="text-[54px] text-[#ff6f0f]">404</h1>
            <p className="text-[20px] text-[#ff6f0f]">Page Not Found</p>
           <NavLink to='/'> <button className="btn bg-[#ff6f0f] text-white hover:text-black">Back to Home Page</button></NavLink>
        </div>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/donationcampaigns',
                element:<DonationCampaigns></DonationCampaigns>,
                loader:()=> fetch("/donateCam.JSON")
            },
            {
                path:'/howtohelp',
                element:<HowToHelp></HowToHelp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/donationcampainsdetails/:id',
                element:<PrivateRoute><DonationCampDetails></DonationCampDetails></PrivateRoute>,
                loader: async({params})=>{
                    const res = await fetch("/donateCam.JSON")
                    const data = await res.json()
                    const singleData = data.find(d=>d.id == params.id)              
                    return singleData
                    
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/forgetpassword',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/updateinformation',
                element:<PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>
            }
        ]
    }
])

export default route