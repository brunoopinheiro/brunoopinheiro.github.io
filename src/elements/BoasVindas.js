import LinkButton from "./LinkButton";

function BoasVindas() {
  const gitText = 'Confira meu Github';
  const gitLink = 'https://github.com/brunoopinheiro';
  const linkedinText = 'Conecte-se comigo no LinkedIn';
  const linkedinLink = 'https://www.linkedin.com/in/brunoopinheirojr/';

  return(
    <main>
      <small>Olá! Me chamo</small>
      <h1>Bruno Pinheiro.</h1>
      <h2>Eu construo e crio coisas para a web.</h2>
      <p>Sou um desenvolvedor web com experiência em desenvolvimento tanto em front, quanto em back end. O que me motiva é resolver desafios e otimizar performances.</p>
      <LinkButton text={gitText} link={gitLink} />
      <LinkButton text={linkedinText} link={linkedinLink} />
    </main>
  );
}

export default BoasVindas;