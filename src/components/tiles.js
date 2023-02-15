import React, {useState, useEffect} from "react";

const Tiles = () => {
    const [divArray, setDivArray] = useState([
       <div key={1} onClick={handleClick}  id="1" className="imgWrapper"><img src={require("../imgs/giyu.png")} alt="giyu.png" /><div className="picName">Giyu</div></div>,
       <div key={2} onClick={handleClick}  id="2" className="imgWrapper"><img src={require("../imgs/gyomei.png")} alt="gyomei.png" /><div className="picName">Gyomei</div></div>,
       <div key={3} onClick={handleClick}  id="3" className="imgWrapper"><img src={require("../imgs/kanao.png")} alt="kanao.png" /><div className="picName">Kanao</div></div>,
       <div key={4} onClick={handleClick}  id="4" className="imgWrapper"><img src={require("../imgs/mitsuri.png")} alt="mitsuri.png" /><div className="picName">Mitsuri</div></div>,
       <div key={5} onClick={handleClick}  id="5" className="imgWrapper"><img src={require("../imgs/muichiro.png")} alt="muichiro.png" /><div className="picName">Muichiro</div></div>,
       <div key={6} onClick={handleClick}  id="6" className="imgWrapper"><img src={require("../imgs/obanai.png")} alt="obanai.png" /><div className="picName">Obanai</div></div>,
       <div key={7} onClick={handleClick}  id="7"  className="imgWrapper"><img src={require("../imgs/sakonji.png")} alt="sakonji.png" /><div className="picName">Sakonji</div></div>,
       <div key={8} onClick={handleClick}  id="8" className="imgWrapper"><img src={require("../imgs/sanemi.png")} alt="sanemi.png" /><div className="picName">Sanemi</div></div>,
       <div key={9} onClick={handleClick}  id="9" className="imgWrapper"><img src={require("../imgs/shinobu.png")} alt="shinobu.png" /><div className="picName">Shinobu</div></div>,
       <div key={10} onClick={handleClick} id="10" className="imgWrapper"><img src={require("../imgs/tanjiro.png")} alt="tanjiro.png" /><div className="picName">Tanjiro</div></div>,
       <div key={11} onClick={handleClick} id="11" className="imgWrapper"><img src={require("../imgs/tengen.png")} alt="tengen.png" /><div className="picName">Tengen</div></div>,
       <div key={12} onClick={handleClick} id="12" className="imgWrapper"><img src={require("../imgs/zenitsu.png")} alt="zenitsu.png" /><div className="picName">Zenitsu</div></div>,
    ]);

    let [bestScore, setBestScore] = useState(0);
    const [scoreArray, setScoreArray] = useState([]);    
    const [pointArray, setPointArray] = useState([0]);
    let [score, setScore] = useState(<ScoreDiv bestScore={bestScore} scoreVal={"Get points by clicking on an image but don't click on any more than once!"} />);

    useEffect(() => {
        const randomize = () => {
            let copy = [...divArray];
            copy.sort(()=> 0.5 - Math.random());
            setDivArray(copy)
        };
            
           const divButtons = document.querySelectorAll('.imgWrapper');

           for(const divButton of divButtons) {
            divButton.addEventListener('click', randomize)
           };

           return () => {
            for(const divButton of divButtons) {
                divButton.removeEventListener('click', randomize)
               };
           }
    });

    function handleClick(e) {
        setScoreArray(scoreArray.push(e.currentTarget.getAttribute("id")));

        let result = false;
        result = scoreArray.some((items, index) => {
            return scoreArray.indexOf(items) !== index
        });

        if (result == true) {
            setScore(<ScoreDiv bestScore={bestScore} gameOver="Game Over! Click any image to play again! " scoreVal = {"Your final Score: " + (scoreArray.length-1)} />);

            setPointArray(
                pointArray.push(scoreArray.length-1),
            )
            document.querySelector('#scoreDiv').classList.add('gameOver');
            setScoreArray([scoreArray.splice(0, scoreArray.length)]);

        } else{
            document.querySelector('#scoreDiv').classList.remove('gameOver');
            document.querySelector('#scoreDiv').classList.add('gameOn');
            setScore(<ScoreDiv bestScore={bestScore} scoreVal={"Score: " + scoreArray.length} />);
        };

        setBestScore(
            bestScore = Math.max(...pointArray),
          )
        };

    return (
        <div>
            {score}
            <div id="tilesWrapper">
                <div id="tileContainer">
                {divArray.map(element => element)}
                </div>
            </div>
        </div>
    )
};

const ScoreDiv = (props) => {
    return (
        <div>
            <div id="best">Best Score: {props.bestScore}</div>
            <div id='scoreDiv'>
                <div id="gameInfo">{props.gameOver} {props.scoreVal}</div></div>
        </div>
    )
};

export {Tiles};



