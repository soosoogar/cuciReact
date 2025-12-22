import axios  from "axios";

export default function Study(){
    function test1(){
        axios.get('http://192.168.40.255/test1')
        .then(res=>{
            console.log(res);
        });
    }
    return (
        <div>
            <h1>Axios 사용하기</h1>
            <input type="button" value="axios보내기1"
            onClick={test1}/>
        </div>
    )
}