"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

const User = ({ user }) => {
  const router = useRouter();
  if(!user) return notFound();

  const [edit, setedit] = useState(false);
  const [form, setform] = useState({ name: user.name, email: user.email });

  const handledelete = async (userId) => {
    const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    router.push("/users");
    router.refresh();
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = async (id, update) => {
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      // send id and update object together
      body: JSON.stringify({ id, update }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/users");
    router.refresh();
  };

  // console.log(user);
  // console.log(edit);
  // console.log('form', form);

  return (
    <>
      <div className="p-[1rem] flex gap-4">
        <Image
          src={user.imageUrl}
          width={200}
          height={200}
          alt="user"
          priority="true"
        />
        <div className="text-[18px] text-white flex flex-col gap-3 w-[50%] justify-center">
          <h1>
            Name:
            {edit ? (
              <input
                type="text"
                name="name"
                value={form.name}
                className="inputclass"
                onChange={(e) => {
                  handleinput(e);
                }}
              />
            ) : (
              user.name
            )}
          </h1>
          <h2>
            Email:{" "}
            {edit ? (
              <input
                type="text"
                name="email"
                value={form.email}
                className="inputclass"
                onChange={(e) => {
                  handleinput(e);
                }}
              />
            ) : (
              user.email
            )}
          </h2>
          <div className="mt-[2rem] h-[40%] justify-center items-start flex-wrap flex">
            <button
              className="border w-[40%] mx-[auto] rounded bg-gray-200 p-1 text-black          hover:bg-gray-800 hover:text-white
              transition duration-300 ease-in-out"
              onClick={() => {
                setedit((edit) => !edit);
              }}
            >
              {edit ? "Cancel edit" : "Edit User"}
            </button>
            <button
              className="border w-[40%] mx-[auto] rounded bg-gray-200 p-1 text-black          hover:bg-gray-800 hover:text-white
              transition duration-300 ease-in-out"
              onClick={() => {
                handledelete(user.id);
              }}
            >
              Delete User
            </button>
            {edit ? (
              <button
                className="border w-[40%] mx-[auto] rounded bg-gray-200 p-1 text-black          hover:bg-gray-800 hover:text-white
              transition duration-300 ease-in-out"
                onClick={() => {
                  handleSubmit(user.id, form);
                }}
              >
                Submit
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
