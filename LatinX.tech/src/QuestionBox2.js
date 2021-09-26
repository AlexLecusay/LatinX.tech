import './QuestionBox.css';
function QuestionBox2(){
    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">BioGraphy</h1>
            <section class="qb-question-choices">
                <Answer text=" (1912 - 2007) Baez was born in Puebla, Mexico and moved into the heart of New York Brooklyn. He was later called Dr.Baez for his doctorate in physics and bachelors in math.  Dr.Baez is the inventor of X-ray reflection microscope, which help us analyze living cells and figuring out what is wrong with them. This invention is used everyday to help save peoples lives all the time."/>
            </section>
        </section>
        <div id="topName">
            <div>
        <label for="email">If at any point you enjoy the content, subscribe to our LatinX news letter.</label>
        </div>
        <div>
        <form>
        Email: <input type="Email" name="email" required></input>
        <center><input class="qb-submit" type="submit" value="Sign up!"></input></center>
        </form>
        </div>
     </div>
    
    </div>
}
function Answer(props){
    return <p class="qb-answer">{props.text}</p>

}

export default QuestionBox2;
  