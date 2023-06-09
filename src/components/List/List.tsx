import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { todo } from "../../utils/types";

const List = ({
  count,
  selectedTodos,
  shownTodos,
  handeSelectTodos,
  handleClearComplited,
  handleDoneClick
}: {
  count: number;
  selectedTodos: string;
  shownTodos: todo[],
  handeSelectTodos: (ar1: string) => void
  handleClearComplited: () => void;
  handleDoneClick: (todo: todo) => void
}) => {


  
  return (
    <div className="flex flex-col bg-zinc-800 w-full pt-4">
      {shownTodos.map((todo, index) => (
        <div key={index} className="flex flex-row items-center gap-3">
          <div onClick={() => handleDoneClick(todo)}>
            {todo.done ? (
              <RiCheckboxCircleLine size={35} />
            ) : (
              <RiCheckboxBlankCircleLine size={35} />
            )}
          </div>
          <p className={`${todo.done && 'line-through'}`}>{todo.text}</p>
        </div>
      ))}
      <div className="flex flex-row gap-3 items-center justify-between">
        <p className="text-xs">{count + " " + `${count == 1 ? 'item left' : 'items left' }`}</p>
        <div className="">
          <button
            className={`text-xs p-1 ${selectedTodos == "all" && "border-white"} `}
            onClick={() => handeSelectTodos("all")}
          >
            All
          </button>
          <button
            className={`text-xs p-1 ${selectedTodos == "active" && "border-white"} `}
            onClick={() => handeSelectTodos("active")}
          >
            Active
          </button>
          <button
            className={`text-xs p-1 ${selectedTodos == "comp" && "border-white"} `}
            onClick={() => handeSelectTodos("comp")}
          >
            Coplited
          </button>
        </div>
        <button className="text-xs" onClick={() => handleClearComplited()}>
          Clear complited
        </button>
      </div>
    </div>
  );
};

export default List;
