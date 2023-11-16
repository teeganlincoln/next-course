"use client";
import Error from "next/error";
import React from "react";

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log(error);
    return (
        <>
            <p>An unexpected error has occurred.</p>
            <button onClick={() => reset()} className="btn">
                Retry
            </button>
        </>
    );
};

export default ErrorPage;
