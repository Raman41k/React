import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import cl from "./UseForm.module.css"
import {commentValidator} from "../../validators/user.validator";
import {setComment} from "../services/json.placeholder";

const CommentForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
            resolver: joiResolver(commentValidator),
            mode: "all"
        }
    );

    const submit = (comment) => {
        setComment(comment).then(r => console.log(r))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <h1>Create your comments</h1>
            <input type="text" placeholder={"Name"} {...register("name")}/>
            {errors?.name && <p>{errors.name.message}</p>}
            <input type="text" placeholder={"Email"} {...register("email")}/>
            {errors?.email && <p>{errors.email.message}</p>}
            <input type="text" placeholder={"Body"} {...register("body")}/>
            {errors?.body && <p>{errors.body.message}</p>}
            <button>Submit</button>

        </form>
    );
};

export default CommentForm;