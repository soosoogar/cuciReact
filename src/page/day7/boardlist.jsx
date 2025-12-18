import umarl1 from '../../assets/img/umaru.jpg'
import umarl2 from '../../assets/img/umaru2.png'
import { useState } from 'react';

export default function boardlist(){
    const obj1 = {
        title: '귀여운 우마루1',
        content: '작고 귀여운 우마루',
        img: umarl1,
        goodCnt: 0
    };
    const obj2 = {
        title: '귀여운 우마루2',
        content: '귀엽고 말랑한 우마루',
        img: umarl2,
        goodCnt: 0
    };

    const [lists,setList] = useState([obj1,obj2]);

    const parents = (index) => {
        //alert('부모 호출');
        const newLists = [...lists];
        newLists[index].goodCnt = newLists[index].goodCnt+1;
        setList(newLists);
    }


    return(
        <>
            <h1>DIV 나누기</h1>
            <List data={obj1}/>
            <List data={obj2}/>
            <hr/>
            {lists.map((item,index)=>(
                <List key={index} data={item} fnGood={parents} dataIndex={index}/>
            ))}
        </>
    )
}

function List(props){
    return(
        <div style={{
            display:'flex',
            border: '3px solid red'
        }}>
            <img src={props.data.img}
            style={{
                marginRight: '20px',
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '1px solid black'
            }}/>
            <div>
                <h1>{props.data.title}</h1>
                <span>{props.data.content}</span>
            </div>
            <div>
                <h1>{props.data.title}</h1>
                <span>{props.data.content}</span>
                <input type='button' value='좋아요'
                onClick={()=>{props.fnGood(props.dataIndex);}}/>
                <span>{props.data.goodCnt}</span>
            </div>
        </div>
    )
}