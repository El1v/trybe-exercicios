import React, { Component } from "react";

class About extends Component {
  render() {
    const skills = ['HTML', 'JavaScript'] 
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) 

    return (
      <div>
      <h1>Elivelton Machado</h1>
      <p>lalalallalala</p>
      <h2>Minhas Habilidades</h2>
      <ul>{jsxSkills}</ul>
    </div>
    );
  }
}

export default About;