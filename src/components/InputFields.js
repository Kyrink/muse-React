import React, { useState } from 'react';
import axios from 'axios';

const InputFields = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        axios.post('http://localhost:5000/register', {
            username: username,
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data.message);
                // Additional logic upon successful registration
            })
            .catch(error => {
                console.error('Registration error:', error);
                // Handle errors (e.g., display an error message to the user)
            });
    };

    return (
        <><div className="absolute top-[581px] left-[513px] w-[414px] h-[77px] text-salmon">
            <div className="absolute top-[21px] left-[-148px] w-[562px] h-14">
                <div className="absolute top-[15px] left-[148px] font-light hidden">
                    This field is required
                </div>
                <input
                    className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
                    name="new-password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} />
                <span className="absolute top-[0px] left-[0px] w-[92px] h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
                    <label
                        className="cursor-pointer relative font-medium"
                        htmlFor="sign_up_password"
                    >
                        Password
                    </label>
                </span>
            </div>
        </div><div className="absolute top-[525px] left-[513px] w-[414px] h-14 text-salmon">
                <div className="absolute top-[0px] left-[-148px] w-[562px] h-14">
                    <div className="absolute top-[15px] left-[148px] font-light hidden">
                        This field is required
                    </div>
                    <input
                        className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
                        name="new-email"
                        type="email"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)} />
                    <span className="absolute top-[0px] left-[0px] w-[51px] h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
                        <label
                            className="cursor-pointer relative font-medium"
                            htmlFor="sign_up_email"
                        >
                            Email
                        </label>
                    </span>
                </div>
            </div><div className="absolute top-[448px] left-[513px] w-[414px] h-14 text-salmon">
                <div className="absolute top-[0px] left-[-148px] w-[562px] h-14">
                    <span className="absolute top-[15px] left-[148px] font-light hidden">
                        This field is required
                    </span>
                    <input
                        className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
                        name="new-display-name"
                        type="text"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)} />
                    <div className="absolute top-[0px] left-[0px] w-32 h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
                        <label
                            className="cursor-pointer relative font-medium"
                            htmlFor="sign_up_dspn"
                        >
                            Display Name
                        </label>
                    </div>
                </div>
            </div><div className="absolute top-[371px] left-[513px] w-[414px] h-14 text-xl text-gray-500">
                <div className="absolute top-[-15px] left-[-148px] w-[562px] h-[71px] flex flex-row items-start justify-start gap-[93px]">
                    <label
                        className="cursor-pointer font-medium inline-block w-[57px] mt-[33px]"
                        htmlFor="sign_up_name"
                    >
                        Name
                    </label>
                    <div className="w-[414px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-xs text-salmon">
                        <span className="relative font-light">This field is required</span>
                        <input
                            className="flex font-medium font-helvetica-neue text-base bg-[transparent] self-stretch rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
                            name="name"
                            placeholder="Enter your name"
                            type="text" />
                    </div>
                </div>
            </div>
            <button
                className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray absolute top-[759px] left-[calc(50%_-_207px)] rounded-10xs w-[414px] flex flex-row items-center justify-center box-border hover:opacity-[1]"
                id="submit"
                onClick={handleRegister}
            >
                <span className="flex-1 relative text-base font-medium font-helvetica-neue text-white text-center">
                    Submit
                </span>
            </button></>
    );
};

export default InputFields;