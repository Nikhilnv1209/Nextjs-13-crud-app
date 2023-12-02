"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Delete = ({ userId }) => {

    const router = useRouter();
    const handledelete = async (userId) => {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        router.push("/users");
        router.refresh();
    };

    return (
        <button
        className="border w-[50%] mx-[auto] mt-[2rem] rounded bg-gray-200 p-2 text-black          hover:bg-gray-800 hover:text-white
        transition duration-300 ease-in-out"
        onClick={() => {
            handledelete(userId);
        }}
        >
        Delete User
        </button>
    );
};

export default Delete;
