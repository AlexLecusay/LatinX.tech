import './App.css';
import QuestionBox from './QuestionBox2';
import LinkButton from './LinkButton';

function App2() {
  return (
   <div>
     <header>
      <div class="arrow arrow-left"></div>
       <p>Albert Baez</p>
       <div class="arrow arrow-right"></div>
     </header>
     <QuestionBox />
     <div id="bottomButtons">
       <LinkButton to="/" id="Left">Back to Quiz</LinkButton>
       <LinkButton to="/ClickMe" id="Right">Clicker</LinkButton>
     </div>
   </div>
  );
}

export default App2;