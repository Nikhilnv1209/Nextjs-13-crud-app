"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const initialstate = {
  name: "",
  email: "",
  imageUrl: "",
};

const UserForm = () => {
  const [userForm, setUserForm] = useState(initialstate);
  const router = useRouter();


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userForm);
    // check for empty fields
    if (userForm.name==="" || userForm.email==="" || userForm.imageUrl==="") {
      alert("Please fill all the fields");
      return;
    }
    const data = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    });

    // error check
    if (!data.ok) {
      const error = await data.json();
      return console.log(error);
    }
    // success
    else {
      const res = await data.json();
      console.log(res);

      // redirect to AddUser page
      router.push("/users");
      router.refresh();
    }
  };
  return (
    <>
      <form
        className=" h-full flex flex-col justify-center items-center gap-2 text-white text-[18px]"
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=" w-[40%] flex justify-between">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="inputclass"
            value={userForm.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" w-[40%] flex justify-between">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            className="inputclass"
            value={userForm.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" w-[40%] flex justify-between">
          <label htmlFor="imageUrl">Profile</label>
          <input
            type="text"
            name="imageUrl"
            className="inputclass"
            value={userForm.imageUrl}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* submit button */}
        <button type="submit" className="border rounded-md w-[40%]">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
