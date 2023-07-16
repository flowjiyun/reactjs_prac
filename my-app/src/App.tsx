import { ChangeEvent, FormEvent, useState } from 'react';

function App(): JSX.Element {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setToDo(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currArray: string[]) => ([toDo, ...currArray]));
  };
  return (
    <div>
      <h1>My To-Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder='Write your to do...' />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
