import './Home.css'
export default function CheckIn() {

    const handleclick = () => {
        console.log('hello');
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        let errors = initialStateErrors;
        let loginerror = false;
        if(inputs.name === ''){
         
        }
    }
    return (
        <div>
        <form  className="register-form" action="" ></form>
        <div className='checkin'>
            <h1>Enter your email ID</h1>
            <input type="text" className="form-control" onChange={handleInput} name="name" id="" />
                           <span className="text-danger" >
                              Name is required.
                           </span>  
                           </div>
                           </div>
    )
}