import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState } from 'react'

import './home.css'

// import { useState } from 'react'
import NavBar from "../components/NavBar";
import { logout, isAuthenticated } from "../services/Auth";

export default function DashboardPage() {
    const navigate = useNavigate();
    const logoutUser = () => {
        logout();
        navigate('/login');
    }

    const initialStateErrors = {
        empId: { required: false }
    };
    const [errors, setErrors] = useState(initialStateErrors)

    const [setloading] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let loginerror = false;
        if (inputs.empId === '') {
            errors.empId.required = true;
            loginerror = true;
        }
        setErrors({ ...errors })
        if (!loginerror) {
            setloading(true)
        }
    }

    const [inputs, setInputs] = useState({
        empId: "",
    })
    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const timestamp = (event) => {
        var today = new Date()
        var currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        console.log(today);
        console.log(currentTime);
    }

    if (!isAuthenticated()) {
        // redirect page
        return <Navigate to="/login"/>
    }

    return (
        <div>
            <NavBar logoutUser={logoutUser} />

            <section className="login-block">
                <div className="container">
                    <div className="row ">
                        <div className="col login-sec">
                            <h2 className="text-center">Sensiple Employee Portal</h2>
                            <form onSubmit={handleSubmit} className="login-form" action="">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Employee ID</label>
                                    <input type="empId" className="form-control" onChange={handleInput} name="empId" id="" placeholder="Enter your Id" />
                                    {errors.empId.required ?
                                        (<span className="text-danger" >
                                            Id is required.
                                        </span>) : null
                                    }
                                    <br />
                                    <p align='center'>
                                        <Link to='/checkIn'><input type="button" className="btn btn-Login" onClick={timestamp} name ="Check IN" value="Check In" /><br /></Link>
                                        <br />
                                        <Link to='/checkOut'><input type="button" className="btn btn-Login" onClick={timestamp} name ="Check OUT" value="Check Out" /><br /></Link>
                                        {/* <input type="submit" className="btn btn-Login" value="Check Out" /><br /><Link to='/register'></Link> */}
                                        <br /> <input type="submit" className="btn btn-Login" value="Details" /><Link to='/register'></Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
