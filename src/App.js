import { useState } from "react";
import quizData from "./data/gamedata"
import Categories from "./Components/Categories";

const App = () => {
  return (
    <div>
      <Categories data={quizData.quizzes}/>
    </div>
  );
};

export default App;
