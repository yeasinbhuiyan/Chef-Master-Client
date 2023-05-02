import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  

    const {createAccount,userName} = useContext(AuthContext)

    const handleRegister=(event)=>{
        event.preventDefault()
        const eventTarget = event.target
        const email = eventTarget.email.value 
        const password = eventTarget.password.value 
        const name = eventTarget.name.value 
        const img = eventTarget.photo.value
        createAccount(email,password)
        .then(result =>{
            const newAccount = result.user 
            userName(name,img)
            eventTarget.reset()
            console.log(newAccount)
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }
    return (
        <form onSubmit={handleRegister} className="hero min-h-screen -z-0 bg-base-200">
            <div className="flex-col p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Please Register</h1>
                </div>

                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input name="photo" type="photo" placeholder="Your Photo" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-dark">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                        {/* <p className='text-red-400'>{error}</p> */}

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;