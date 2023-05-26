import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar"; 
import { logout, isAuthenticated } from "../services/Auth";


export default function DashboardPage(){
    const navigate =useNavigate();
    const logoutUser = ()=>{
        logout();
        navigate('/login');
    }
    if (!isAuthenticated()){
        // redirect page
        return <Navigate to="/login"/>
     }

    return(
        <div>
            <NavBar logoutUser={logoutUser}/>
        <main role="main" className="container mt-5">
            <div className="container">
              <div className="text-center mt-5">
                <h3>Dashboard page</h3>
                <p className="text-bold " >Hi Unnamed user, your Firebase ID is %localID%</p>
              </div>
            </div>
        </main>
        </div>
    )
}