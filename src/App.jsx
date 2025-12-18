import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './page/Main.jsx';
import Calc from './page/Calc.jsx';
import Dark from './page/Dark.jsx';
import StudentInfo from './page/StudentInfo.jsx';
import DataMove from './page/day7/dataMove.jsx';
import BordList from './page/day7/boardlist.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/calc'} element={<Calc />} />
        <Route path={'/dark'} element={<Dark />} />
        <Route path={'/studentinfo'} element={<StudentInfo />} />
        <Route path={'/datamove'} element={<DataMove />} />
        <Route path={'/boardlist'} element={<BordList />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
