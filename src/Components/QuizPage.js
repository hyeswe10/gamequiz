import { useState } from "react";

const QuizPage = ({quiz}) => {
    //인덱스번호업데이트
    const [currentIdx,setCurrentIdx] = useState(0);
    //점수 합산
    const [score,setScore] = useState(0);
    //현재 퀴즈번호
    const currentQuiz = quiz[currentIdx];
    const handleClick = (value)=>{
        const result = (value === currentQuiz.correct) ? score+10 : score;
        if(currentIdx+1 < quiz.length){
            //quiz.length아래 인덱스들은 계속 실행
            //quiz.length보다 낮은 수라면 인덱스값에 1씩 더하고
            setCurrentIdx(currentIdx+1);
            //점수를 합산동기화한다.
            setScore(result);
        } else {
            //문제를 끝내고 전체합산 후 점수결과 페이지이동
        }
    }
    return (
        <div className="quiz-page">
            <h2>퀴즈 No.{currentIdx+1}</h2>
            {/* 퀴즈 질문 */}
            <p>{currentQuiz.question}</p>
            {/* 보기 항목 */}
            <div className="answers">
                {
                    currentQuiz.choices.map((value,idx)=>{
                        return <button key={idx} onClick={handleClick}>{value}</button>
                    })
                }
            </div>
        </div>
    );
};

export default QuizPage;