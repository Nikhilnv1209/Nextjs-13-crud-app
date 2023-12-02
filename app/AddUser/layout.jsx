import React from "react";
import Link from "next/link";

const UserFormLayout = ({ children }) => {
  return (
    <main className="flex h-full">
      <div className="bg-gray-500 w-[20vw] h-full text-center py-[1rem] flex justify-center items-center">
        <Link href={"/AddUser/Form"}
        className="border rounded-lg p-2 w-[60%] bg-gray-300 block hover:bg-gray-400"
        >User Form</Link>
      </div>
      <div className="bg-gray-400 w-full h-full p-[1rem]">{children}</div>
    </main>
  );
};

export default UserFormLayout;
