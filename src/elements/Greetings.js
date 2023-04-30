import LinkButton from "./LinkButton";

function Greetings() {
  const gitText = 'Check out my Github';
  const gitLink = 'https://github.com/brunoopinheiro';
  const linkedinText = 'Lets connect on LinkedIn';
  const linkedinLink = 'https://www.linkedin.com/in/brunoopinheirojr/';
  
  return(
    <main>
      <small>Hello, my name is</small>
      <h1>Bruno Pinheiro.</h1>
      <h2>I build and create web things.</h2>
      <p>I'm a web developer with experience both in front and back end development. I'm passionate with solving challenges and performance optimization.</p>
      <LinkButton text={gitText} link={gitLink} />
      <LinkButton text={linkedinText} link={linkedinLink} />
    </main>
  );
}

export default Greetings;