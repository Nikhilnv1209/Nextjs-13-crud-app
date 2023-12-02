import React from "react";
import User from "./User";
import { getUser } from "@/prisma/user";

const UserInfo = async ({ params: { userId } }) => {
  const { user } = await getUser(userId);
  return <User user={user} />;
};

export default UserInfo;
