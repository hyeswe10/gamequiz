
const Categories = ({category,onSelect}) => {
    return (
        <div>
            <h1>리그 오브 레전드 QUIZ</h1>
            <h2>퀴즈 카테고리를 선택해 주세요</h2>
            <div className="category-group">
                {
                    category.map((value,idx)=>{
                        return <button key={idx} onClick={()=>{onSelect(value)}}>{value}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;