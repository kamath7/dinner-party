import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([
    "Adithya",
    "Cristiano",
    "Lionel",
    "Sachin",
    "Dhoni",
  ]);
  // let lalleTasks = [
  //   "Dance",
  //   "Sing",
  //   "Say a joke",
  //   "Say a riddle",
  //   "name all members from your team",
  // ];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Dance to Daler Mehendi",
    "Sing Aashiq Banaya Aapne",
    "Say a joke",
    "Say a riddle",
    "Name all members from your team",
  ]);
  const [punishment, setPunishment] = useState("");
  const [punishments, setPunishments] = useState([
    "Recite ABCD backwards",
    "Table of 73",
    "Treat everyone with Tea",
    "Table of 97",
    "Wear sunglasses and stare blankly at the screen",
  ]);
  const generateRandom = () => {
    const randomEntryFromNames = Math.floor(Math.random() * (names.length - 1));
    const randomEntryFromTasks = Math.floor(Math.random() * (tasks.length - 1));
    setName(names[randomEntryFromNames]);
    setTask(tasks[randomEntryFromTasks]);

    setNames(names.filter((name1) => name1 !== names[randomEntryFromNames]));
    setTasks(tasks.filter((task1) => task1 !== tasks[randomEntryFromTasks]));
    if (names.length === 0 && tasks.length === 0) {
      alert("All names and tasks done! Page reloading for restarting the game");
      window.location.href = "./App.js";
    }
  };
  const generatePunishment = () => {
    const randomEntryFromPunishments = Math.floor(
      Math.random() * (punishments.length - 1)
    );
    setPunishment(punishments[randomEntryFromPunishments]);
    alert(punishments[randomEntryFromPunishments]);
    setPunishments(
      punishments.filter(
        (punishment1) => punishment1 !== punishments[randomEntryFromPunishments]
      )
    );
  };
  return (
    <div className="main-content">
      <h1 className="header-text">The show</h1>
      <div className="content">
        <p className="content-title">Who is your performer for the minute?</p>
        <button className="button-clicker" onClick={generateRandom}>
          Click to know
        </button>
        {name && (
          <p>
            The person who will be performing here:{" "}
            <span className="content-name">{name}</span>{" "}
          </p>
        )}
        {name && (
          <p>
            <span className="content-name">{name}</span> has to entertain the
            crowd by performing the task :
            <span className="content-task">{task}</span>
          </p>
        )}

        {name && (
          <p className="content-punishment">
            Failure in doing the task will result in a punishment. If{" "}
            <span className="content-name">{name}</span> hasn't done the task,
            click <span onClick={generatePunishment}>here</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
