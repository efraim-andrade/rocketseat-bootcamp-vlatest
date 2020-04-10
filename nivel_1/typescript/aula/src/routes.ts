import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    email: "efraim.dev@gmail.com",
    password: "123123q",
    techs: [{ title: "ReactJS", experience: 100 }, "NodeJS"],
  });

  return response.json({ message: "hello world", user });
};
