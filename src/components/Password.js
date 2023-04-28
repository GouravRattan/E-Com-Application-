import React from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import {Toaster} from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from "../helper/validate";

import styles from '../styles/Username.module.css';

export default function Password() {

  const formik = useFormik({
    initialValues: {
      Password: ''
    },
    validate : passwordValidate ,
    validateOnBlur: false,
    validateOnChange:false,
    onSubmit : async (value)=>{
      console.log(value);
    }
  })

  return (
    <div className="container mx-auto">

    <Toaster position='top-center' reverseOrder={false}>  </Toaster>

      <div className="flex items-center h-screen justify-center">
        <div className={styles.glass}>
        <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold"> Hello Again! </h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Explore More By Conrtacting With Us
          </span>
        </div>

<form className="py-1" onSubmit={formik.handleSubmit}>
    <div className="profile flex justify-center py-4">
        <img src={avatar} className={styles.profile_img} alt="avatar"/>
    </div>

    <div className="textbox flex flex-col items-center gap-6">
    <input {...formik.getFieldProps('Password') } className={styles.textbox} type="password" placeholder='password' />
    <button className={styles.btn} type="submit">Sign up</button>
    </div>

    <div className="text-center py-4">
        <span className="text-gray-500">Forgot password? <Link className="text-red-500" to="/recovery">Recover Now</Link> </span>
    </div>
</form>

      </div>
    </div>
    </div>
  );
}
