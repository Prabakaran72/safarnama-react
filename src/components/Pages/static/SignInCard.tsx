import React, { useEffect, useState } from 'react'
import Terms from './Terms';
// import apiHelper from '../utils/apiHelper';
const API_URL = import.meta.env.VITE_API_URL;
import { useAuth } from '../../Auth/AuthProvider';
const SignInCard = () => {
    const [isOpenTerms, setIsOpenTerms] = useState<boolean>();
    const {state, dispatch} = useAuth();
    console.log("state  => ", state );
    const openTerms = () => {
        setIsOpenTerms(true);
    }
    const closeTerms = () => {
        setIsOpenTerms(false);
    }

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 z-index-30 rounded-lg">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h1 className="text-4xl font-normal mb-4 text-left text-gary-600">Sign in</h1>
                    <div className="text-2xl my-8 text-left">
                        <p className='my-4 text-left'>To get started sign in.</p>
                        <small>
                            By signing in, you agree to the{' '}
                            <a
                                href="#"
                                onClick={openTerms}
                                className="text-blue-500 underline"
                            >
                                Terms & Privacy Policy
                            </a>
                            .
                        </small>
                    </div>
                    <div className="text-right text-xl mr-5 text-blue-600">
                        <a href={`${API_URL}auth/google`}>Google</a>
                    </div>

                    {isOpenTerms && <Terms close={closeTerms} />}
                </div>
            </div>
        </>
    );
};

export default SignInCard;