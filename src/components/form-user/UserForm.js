import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import "./UseForm.module.css"
import {userValidator} from "../../validators/user.validator";
import {setUser} from "../../services/json.placeholder";
import axios from "axios";

const UserForm = () => {

    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({
        resolver:joiResolver(userValidator),
        mode:"all"
    });

    const  submit = (user) =>{
        setUser(user).then(r => console.log(r))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1 className={"h1"}>Create your user</h1>
            <input type="text" placeholder={"Name"} {...register("name")}/>
            {errors?.name && <p>{errors.name.message}</p>}
            <input type="text" placeholder={"Surname"} {...register("surname")}/>
            {errors?.surname && <p>{errors.surname.message}</p>}
            <input type="text" placeholder={"Email"} {...register("email")}/>
            {errors?.email && <p>{errors.email.message}</p>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export default UserForm;