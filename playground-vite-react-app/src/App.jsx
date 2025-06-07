import './App.css';
import AllComp from './AllComp';
import PlayGround from './Test/PlayGround';

function App() {
  return (
    <>     
      <div style={{ background: "white", color: 'black', fontWeight: "bold", padding: '0px 10px', textAlign:"left"}}>Play Ground</div>
      <div>
        <AllComp />
        {/* <div style={{ position:"absolute"}}>
          <footer style={{ position:"relative", bottom: '0', background: "white", color: 'black', fontWeight: "500", padding: '0px 10px', textAlign:"left"}}>Contact Us: Kasiviswanadha@outlook.com</footer>  
        </div> */}
      </div>  
    </>
  )
}

export default App
