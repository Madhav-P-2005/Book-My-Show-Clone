import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

// react Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello
      </h1>
      <ClassComponent />
      <FunctionalComponent/>
    </div>
  );
}

export default App;
