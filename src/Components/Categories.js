

const Categories = ({category,onSelect}) => {
    return (
        <div className="categories">
            <div className="img"></div>
            <h1>당신은 <span>LoL</span>에 대해<br/>얼마나 알고 계신가요?</h1>
            <h2>카테고리를 선택해 주세요</h2>
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