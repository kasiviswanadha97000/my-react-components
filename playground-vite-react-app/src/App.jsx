import './App.css';
import AllComp from './AllComp';
import PlayGround from './Test/PlayGround';
import UseTest from './hooks/useCoustemHook/useTest';
import Sample from './Test/Sample';

function App() {
  return (
    <>     
      <div style={{ background: "white", color: 'black', fontWeight: "bold", padding: '0px 10px', textAlign:"left"}}>Play Ground</div>
      <div>
        {/* <AllComp /> */}
       {/*  <UseTest /> */}
        {/* <div style={{ position:"absolute"}}>
          <footer style={{ position:"relative", bottom: '0', background: "white", color: 'black', fontWeight: "500", padding: '0px 10px', textAlign:"left"}}>Contact Us: Kasiviswanadha@outlook.com</footer>  
        </div> */}
        <Sample />
      </div>  
    </>
  )
}

export default App
