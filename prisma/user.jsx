import { prisma } from "./client";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (err) {
    return { error: err.message };
  }
}

export async function getUser(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    return { user };
  } catch (err) {
    return { error: err.message };
  }
}

export async function createUser(data) {
  try {
    const user = await prisma.user.create({
      data: data,
    });
    return { user };
  } catch (err) {
    return { error: err.message };
  }
}

export async function deleteUser(id) {
  try {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    return { user };
  } catch (err) {
    return { error: err.message };
  }
}

export async function updateUser(id, data) {
  try {
    const user = await prisma.user.update({
      where: { id: id },
      data: data,
    });
    return { user };
  } catch (err) {
    return { error: err.message };
  }
}
