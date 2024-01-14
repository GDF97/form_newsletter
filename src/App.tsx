// import { useState } from "react";

import Form from "./components/Form";

import "./styles/components/App.scss";

function App() {
  return (
    <div className="container">
      <h1>Inscreva-se</h1>
      <p>Assine nosso Newsletter e mantenha-se informado!</p>
      <div className="form-wrapper">
        <Form />
      </div>
      <p>
        Ao se inscrever, você passará a receber os nossos e-mails com as
        melhores dicas, novidades e ofertas!
      </p>
    </div>
  );
}

export default App;
