/* import logo from './logo.svg';
import './App.css'; */

import './css/style.css'

function App() {
  return (
    <div className="App">
    
      <div className="todo_container">

          <h2 className="title">Todo List</h2>

          <div className="input_box">

            <input type="text" className="todo_input"></input>
            <button type="submit" className="todo_submit">submit</button>
            <button className="todo_clear_all">clear all</button>
           </div>

          <div className="todo">
            <ul className="todo_ul">
             {/* 
                    <li class="todo_li"> 1. write    
                        <button class="todo_done">done</button>
                          <button class="todo_delete">x</button>
                      </li>
                      <li> 2. write    
                          <button>done</button>
                          <button>x</button>
                      </li>      

               */}
            </ul> 
          </div>
      </div>

         {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
