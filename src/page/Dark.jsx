
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dark() {
    const [bgColor, setBgColor] = useState('white');
    const pageMove = useNavigate();

    function ChangeBgColor() {
        setBgColor(prev => prev === 'black' ? 'white' : 'black');
    }

  return (
    <>
      <h3>Home으로</h3>
        <input type="button" value="Home" onClick={ChangeBgColor} />
        <div style={{backgroundColor: bgColor, padding: '16px'}}>
        <h1 style={{color: bgColor === 'black' ? 'white' : 'black'}}>Hellow World</h1>
        <input type="button" value="Calc로 이동" onClick={e=>{
            e.preventDefault();
            pageMove('/Calc');
        }}/>
      </div>
    </>
  )
}

export default Dark
