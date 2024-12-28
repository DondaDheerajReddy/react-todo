import { useState, MouseEvent } from "react";

type Props = {
  type: string;
  placeholder: string;
  handleClick: (e: MouseEvent, text: string) => void;
};

function InputArea(props: Props) {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;
    setText(userInput);
  }

  return (
    <div>
      <form action="">
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={handleChange}
          value={text}
        />
        <button
          onClick={(e) => {
            props.handleClick(e, text);
            setText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputArea;
