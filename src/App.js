import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [ 
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age:26},
      { name: 'Amiya', age:31}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [ 
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age:26},
      { name: 'Omy', age:12}
    ]

    })
}

 nameChangedHandler = (event) => {
  this.setState({
      persons: [ 
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: event.target.value, age:26},
      { name: 'Amiya', age:31}
    ]

    })

}




  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'

    };
    return (
       <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,'NewMaximilian')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                click={this.switchNameHandler.bind(this,'NewMax!!!')}
                changed={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
       </div>
    );
  }
}

export default App;
