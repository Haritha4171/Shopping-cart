function Btn(props){
    return(
      <div >
        {(props.status===0)?
                <button onClick={props.start}>Start</button>:""
        }
         {(props.status===1)?
              <div>
            <button onClick={props.stop}>Stop</button>&ensp;&ensp;
            <button onClick={props.reset}>reset</button>
            </div>:""
        }
                 {(props.status===2)?
              <div>
            <button onClick={props.resume}>resume</button>&ensp;&ensp;
            <button onClick={props.reset}>reset</button>
            </div>:""
        }
      </div>
    )
    }
  export default Btn;