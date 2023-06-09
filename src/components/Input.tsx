import { useState } from "react";
const Input = ({
  handleCreateTodo,
}: {
  handleCreateTodo: (arg1: string, e: React.FormEvent) => void;
}) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const createTodo = (input: string, e: React.FormEvent) => {
    handleCreateTodo(input, e);
    setInput("");
  };

  return (
    <form className="w-[100%]" onSubmit={(e) => createTodo(input, e)}>
      <input
        value={input}
        onChange={(e) => handleChangeInput(e)}
        placeholder="What needs to be done?"
        className="p-3 w-full"
      />
    </form>
  );
};

export default Input;
