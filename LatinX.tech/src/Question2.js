import './App.css';
import QuestionBox from './QuestionBox';
import LinkButton from './LinkButton';

function Question2() {
  return (
   <div>
     <header>
       <div class="arrow arrow-left"></div>
       <p>Albert Baez</p>
       <div class="arrow arrow-right"></div>
     </header>
     <QuestionBox />
     <div id="bottomButtons">
     
      <LinkButton to="/" id="Left">Hall of LatinX</LinkButton>
      <LinkButton to="/ClickMe" id="Right">Reactions Game</LinkButton>
      
     </div>
   </div>
  );
}

export default Question2;