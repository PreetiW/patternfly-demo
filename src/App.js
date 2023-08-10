import logo from './logo.svg';
import './App.css';
import {Card, CardTitle, CardBody, CardFooter, Button} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Card style={{ margin: '16px'}} ouiaId="BasicCard">
          <CardTitle>Preeti Wadhwani</CardTitle>
          <CardBody>Senior Softwar Engineer</CardBody>
          <CardFooter>Red Hat</CardFooter>
        </Card>

        <Button variant="primary" ouiaId="Primary">Click Me!!</Button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Hello World!</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
