import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";
import "../styles/components/Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setErrors(null);
    setName("");
    setEmail("");
    setAgree(false);
    alert("Obrigado por se inscrever!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputWrapper">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && <small>{errors.name}</small>}
      </div>
      <div className="inputWrapper">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite o seu e-mail"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && <small>{errors.email}</small>}
      </div>
      <div className="inputWrapper">
        <a href="">Leia os termos</a>
        <div>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree">Concordo com os termos</label>
        </div>
        {errors?.agree && <small>{errors.agree}</small>}
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
