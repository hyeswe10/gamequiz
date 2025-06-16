import { useState } from "react";
import gameData from "./data/gamedata"
import Categories from "./Components/Categories";
import QuizPage from "./Components/QuizPage";

const App = () => {
  const [category,setCategory] = useState("");
  const [filterQuiz,setFilterQuiz] = useState([]);
  const onSelectCategory = (select)=>{
    setCategory(select);
    const quizArr = gameData.quizzes.filter((data)=>{
      return data.category === select;
    })
    setFilterQuiz(quizArr);
  }
  return (
    <div>
      {!category && <Categories category={gameData.categories}onSelect={onSelectCategory}/>}
      {category && <QuizPage quiz={filterQuiz}/>}
    </div>
  );
};

export default App;
