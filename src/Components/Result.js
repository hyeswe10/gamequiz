
const Result = ({final,restart}) => {
    let speech = "";
    if(final >= 90){
        speech = "고수";
    } else if(final >= 60){
        speech = "중수";
    } else if(final >= 40){
        speech = "하수";
    } else {
        speech = "초보";
    }
    return (
        <div className="result">
            <h2>점수결과</h2>
            <p>최종점수<br/><span>{final}</span>점</p>
            <p className="speech">당신은 LoL {speech}입니다</p>
            <button onClick={()=>{restart()}}>다시시작</button>
        </div>
    );
};

export default Result;