import './App.css';
import QuestionBox from './QuestionBox';
import LinkButton from './LinkButton';

function App() {
  return (
   <div>
     <header>
       <div class="arrow arrow-left"></div>
       <p>Question 1</p>
       <div class="arrow arrow-right"></div>
     </header>
     <QuestionBox />
     <div id="bottomButtons">
     
      <LinkButton to="/App2" id="Left">Hall of LatinX</LinkButton>
      <LinkButton to="/ClickMe" id="Right">Clicker</LinkButton>
      
     </div>
   </div>
  );
}

export default App;
