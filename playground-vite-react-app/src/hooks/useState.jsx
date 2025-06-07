import React from 'react'
import './common.css';
import { fetchOpenAIResponse } from '../utils/OpenAI-API';

function useState() {
  const [user, setUser] = React.useState("https://jsonplaceholder.typicode.com/todos"); //https://api.restful-api.dev/objects
  const [prodects, setProdects] = React.useState([]);
  const [openAIData, setOpenAIData] = React.useState({});
  const [errormsg, setErrormsg] = React.useState();
  const [loading, setLoading] = React.useState(false);
/* 
  React.useEffect(() => {
    fetchProdects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  const fetchProdects = async () => {
    try {
      
      setLoading(true);
      const URL = user ? user : "";
      if (!URL) {
        setErrormsg(`Please provide URL`)
        return;
      }
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setProdects(data);
        })
        .catch(err => console.log("error", err))
        .finally(() => {
          setLoading(false);
        });
    }
    catch (error) {
      console.error("error==>", error);
      setErrormsg(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  const getOpenAI = async () => {
    const date = await fetchOpenAIResponse(user);
    console.log(date);
    setOpenAIData(date);
  }

  const onChangeHandle = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  }

  return (
    <div id="useState-hook" style={{paddingTop: "3rem"}} >
      <div className='pass-api-input'>
        <input className='input-box' type="text" value={user} onChange={onChangeHandle} />
        <button className='btn_fetch_data' tpye="button" onClick={fetchProdects}>Fetch Data</button>
        <button className='btn_OpenAIResponse' tpye="button" onClick={getOpenAI}>OpenAI</button>
      </div>

      <div>URL : {user}</div>
      {!loading ?
        <div className='content-json'>
          {prodects.length > 0 ? <h5>Fetch Free API</h5> : <></>}
          {errormsg ? <div>{errormsg}</div> : prodects.length > 0 ? <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', color: "black" }}>{JSON.stringify(prodects, null, 2)}</pre> : <center>No Data Found</center>}
          {openAIData.length > 0 && <h5>Fetch OpenAI</h5>}
          {openAIData.length > 0 && JSON.stringify(openAIData)}
        </div> : <div style={{ color: "white" }}>Loading...</div>
      }
    </div>
  )
}

export default useState;
