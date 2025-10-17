import React, { useEffect } from 'react';
import './common.css';
import { fetchOpenAIResponse } from '../utils/OpenAI-API';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader, setProdects } from '../reduxToolkit/action';

function UseState() {
  const [user, setUser] = React.useState("https://jsonplaceholder.typicode.com/todos"); //https://api.restful-api.dev/objects
  const [openAIData, setOpenAIData] = React.useState({});
  const [errormsg, setErrormsg] = React.useState();

  const dispatch = useDispatch();
  const prodects = useSelector(state => state.getProdectData);

/*   useEffect(() => {
    if(prodects){
      console.log(prodects);
    }
  }, [prodects]) */

  const fetchProdects = async () => {
    try {
      setErrormsg();
      dispatch(setLoader(true));
      
      const URL = user ? user : "";
      if (!URL) {
        setErrormsg(`Please provide URL`)
        return;
      }
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          if(data)
            dispatch(setProdects(data));          
        })
        .catch(err => console.log("error", err));
    }
    catch (error) {
      console.error("error==>", error);
      setErrormsg(error.message);
    }
    console.log(prodects)
    dispatch(setLoader(false));
  };

  const getOpenAI = async () => {
    const date = await fetchOpenAIResponse(user);
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
        <div className='content-json'>
          {prodects.length > 0 ? <h5>Fetch Free API</h5> : <></>}
          {errormsg ? <div>{errormsg}</div> : prodects.length > 0 ? <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', color: "black" }}>{JSON.stringify(prodects, null, 2)}</pre> : <center>No Data Found</center>}          
          {openAIData.length > 0 && <h5>Fetch OpenAI</h5>}
          {openAIData.length > 0 && JSON.stringify(openAIData)}
        </div>     
    </div>
  )
}

export default UseState;
