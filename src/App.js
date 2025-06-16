import './Style.scss';
import { useState } from "react";
import gameData from "./data/gamedata"
import Categories from "./Components/Categories";
import QuizPage from "./Components/QuizPage";
import Result from "./Components/Result";

const App = () => {
  //카테고리 선택
  const [category,setCategory] = useState("");
  //카테고리선택에 맞는 퀴즈들로 배열 재생성
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finished,setFinished] = useState(false);
  //점수 동기화
  const [score,setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    const quizArr = gameData.quizzes.filter((data)=>{
      return data.category === select;
    })
    setFilterQuiz(quizArr);
  }
  const handleFinish = (score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart = ()=>{
    setCategory("");
    setFinished(false);
  }
  return (
    <div className="app">
      {!category && !finished && <Categories category={gameData.categories}onSelect={onSelectCategory}/>}
      {category && !finished && <QuizPage quiz={filterQuiz} onFinished={handleFinish}/>}
      {finished && <Result final={score} restart={handleRestart}/>}
    </div>
  );
};

export default App;
