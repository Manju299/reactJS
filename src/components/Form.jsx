import PropTypes from 'prop-types'
import {useState} from 'react'



export default function Form(props) {
    const [input,setInput] = useState("Enter your text");


    const Uppercase = ()=> {
        // let newInput = input.toUpperCase();
        setInput(input.toUpperCase());
    }

    
    const Lowercase = ()=> {
        // let newInput = input.toUpperCase();
        setInput(input.toLowerCase());
    }



    const handleChange = (e)=> {
        setInput(e.target.value)

    }

    const copyText = ()=> {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(input.value)

  }
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.formname}
        </label>
        <textarea
          // eslint-disable-next-line react/prop-types
          className={`form-control text-${props.mode=="light"?"dark":"light"} bg-${props.mode}  `}
          id="exampleFormControlTextarea1"
          rows="8"
          value={input}
          onChange={handleChange}
        ></textarea>
        <button className='btn btn-primary my-2' onClick={Uppercase}>Convert to UpperCase</button>
        <button className='btn btn-primary my-2 mx-2' onClick={Lowercase}>Conver to Lowercase</button>
        <button className='btn btn-primary my-2 ' onClick={copyText}>Copy Text</button>
      </div>

      <div className='container'>
        <h3> Word and Character coutn</h3>
           <p> {input.split(" ").length} words and {input.length} characters</p>
      </div>
      <div className='container'>
        <h4>Text Summary</h4>
        <p>{input}</p>
      </div>    
    </>
  );
}


Form.propTypes = {
    formname: PropTypes.string,
}