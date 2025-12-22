import { useState } from "react";

export default function Main() {
  const [students,setStudent] = useState([
    {이름: '홍길동', 국어: '100', 영어: '90', 수학: '80'},
    {이름: '이순신', 국어: '90', 영어: '80', 수학: '70'},
    {이름: '임꺽정', 국어: '80', 영어: '70', 수학: '60'},
  ])

  const addStudent = (newStudent) => {
    setStudent([...students, newStudent])
  }
  //컴포넌트 보관소
  return (
    <>
      <h1>Main Page</h1>
      <h1>학생 성적</h1>
      <Addtion onAdd={addStudent}/>
      <Student record={students}/>
    </>
  )
}

//입력받고 데이터 넘겨줌
function Addtion(props){
  const [name, setName] = useState('') //이름
  const [korea, setKorea] = useState('') //국어
  const [english, setEnglish] = useState('') //영어
  const [math, setMath] = useState('') //수학

  const handleAdd = () => {
    if (name && korea && english && math) {
      props.onAdd({이름: name, 국어: korea, 영어: english, 수학: math})
      setName('')
      setKorea('')
      setEnglish('')
      setMath('')
    } else {
      alert('모든 필드를 입력해주세요')
    }
  }

  return(
    <div style={{
      width: '97vw',
      height: '5vw',
      padding: '25px',
      border: '3px solid blue'
    }}>
      <h4>입력</h4>
      <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder="국어" value={korea} onChange={(e) => setKorea(e.target.value)}/>
      <input type="text" placeholder="영어" value={english} onChange={(e) => setEnglish(e.target.value)}/>
      <input type="text" placeholder="수학" value={math} onChange={(e) => setMath(e.target.value)}/>
      <input type="button" value="추가"
      onClick={handleAdd}/>
    </div>
  )
}

//출력
function Student(props){
  return (
    <div style={{
      width: '97vw',
      padding: '25px',
      border: '3px solid green'
    }}>
      <h4>리스트</h4>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid black'}}>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
          </tr>
        </thead>
        <tbody>
          {props.record.map((student, index) => (
            <tr key={index} style={{borderBottom: '1px solid gray'}}>
              <td>{student.이름}</td>
              <td>{student.국어}</td>
              <td>{student.영어}</td>
              <td>{student.수학}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
