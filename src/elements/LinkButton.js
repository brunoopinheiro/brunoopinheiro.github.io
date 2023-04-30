function LinkButton(props) {
  const { link, text } = props;
  return(
    <button
      onClick={() => {
        window.open(link);
      }}
    >
      {text}
    </button>
  );
}

export default LinkButton;