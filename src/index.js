import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";

class App extends React.Component {
  state = {
    term: "",
    items: []
    };

  onChangeHandler = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

   onDeleteHandler = index => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask
    });
  };

    
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onFormSubmitHandler}>
            <div> <h1>TO-DO Application</h1> </div>
              <input
              onChange={this.onChangeHandler}
                value={this.state.term}
                type="text"
                className="prompt"
                placeholder=""
              />
              <button>
                <i onClick={this.onFormSubmitHandler}  />
                +
              </button>
              

          </form>

        

        <List deleteTask={this.onDeleteHandler} items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
