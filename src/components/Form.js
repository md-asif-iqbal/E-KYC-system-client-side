import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:8000/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)
                console.log(data)
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 items-center gap-6 mt-4 md:grid-cols-2">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your Name.."
                            className="block px-4 py-2 mt-5 bg-transparent w-full input font-mono text-md border-2 border-primary placeholder-secondary/70 text-secondary "
                            {...register("userName")}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="enter your email"
                            className="block px-4 py-2 mt-3 bg-transparent w-full input font-mono text-md border-2 border-primary placeholder-secondary/70 text-secondary "
                            {...register("email")}
                            required
                        />
                    </div>
                    <div>

                        <input
                            type="text"
                            placeholder='Enter Product Price'
                            className="block px-4 py-2 mt-3 bg-transparent w-full input font-mono text-md border-2 border-primary placeholder-secondary/70 text-secondary "
                            {...register("price")}
                            required
                        />
                    </div>


                    <input
                        type="submit"
                        value="Submit"
                        className="relative bg-primary w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-mono"
                    />
                </div>
            </form >
        </div >
    );
};

export default Form;