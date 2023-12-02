// import React from "react";
import Link from "next/link";
import { getUsers } from "@/prisma/user";

// const fetchusers = async () => {
//   const response = await fetch("http://localhost:3000/api/user");
//   const data = await response.json();
//   return data;
// };

const UserList = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="bg-gray-500 w-[20vw] h-full text-center py-[1rem]">
      <h1 className="mb-8 text-[25px] text-white font-bold tracking-wider">
        Users
      </h1>
      <div className="flex flex-col gap-4">
        {users.users.length != 0 ? (
          users.users.map((user) => {
            return (
              <div key={user.id}>
                <div className="text-white">
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-white">No users currently</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
