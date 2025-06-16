
const Result = ({final,restart}) => {
    return (
        <div className="result">
            <h2>점수결과</h2>
            <p>최종점수 : {final}</p>
            <button onClick={()=>{restart()}}>다시시작</button>
        </div>
    );
};

export default Result;