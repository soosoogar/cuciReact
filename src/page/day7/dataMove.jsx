export default function DataMove() {
    let msg = "hello world";
    let obj = {title: '책 제목', content: '책 내용'};

    return (
        <>
            <h1>자식과 부모의 데이터 전달</h1>
            <Child datMsg={msg} datObj={obj}/>
        </>
    )
} 
function Child(props) {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            border: '2px solid black'
        }}>
            <h3>자식 컴포넌트 </h3>
            {props.datMsg}<br/>
            책 제목: {props.datObj.title} / 책 내용: {props.datObj.content}
        </div>
    )
}