import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const erros: Error = {};

  if (!data.name) {
    erros["name"] = "O nome é obrigatório!";
  }

  if (!data.email) {
    erros["email"] = "O email é obrigatório!";
  }

  if (!data.agree) {
    erros["agree"] = "Este campo é obrigatório";
  }

  return erros;
};
