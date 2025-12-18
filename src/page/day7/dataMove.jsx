import { useState } from "react";

export default function DataMove() {
    let msg = "hello world";
    let obj = {title: '책 제목', content: '책 내용'};
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>자식과 부모의 데이터 전달</h1>
            <Child datMsg={msg} datObj={obj}/>
            <Child2 dataCount={count}/>
            <input type="button" id="count" value="카운트 증가" onClick={e=>{
                setCount(count + 1);
            }}/>
            <Child3 fnStudy={(val)=>{
                alert('자식에게서 호출');
                alert(val);
            }}/>
        </>
    )
} 
function Child(props) {
    return (
        <div style={{
            width: '50vw',
            height: '50vh',
            border: '2px solid blue'
        }}>
            <h3>자식 컴포넌트 </h3>
            {props.datMsg}<br/>
            책 제목: {props.datObj.title} / 책 내용: {props.datObj.content}
        </div>
    )
}
function Child2(props){
    return (
        <div style={{
            width: '50vw',
            height: '50vh',
            border: '2px solid red'
        }}>
            <h3>자식2 컴포넌트</h3>
            카운트: {props.dataCount}
        </div>
    )
}

function Child3(props){
    return (
        <div style={{
            width: '50vw',
            height: '50vh',
            border: '2px solid green'
        }}>
            <h3>자식3 컴포넌트</h3>
            <input type="button" value="부모 호출"
            onClick={()=>{
                props.fnStudy('1234');
            }}/>
        </div>
    )
}