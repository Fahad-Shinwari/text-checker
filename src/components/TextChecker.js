import React,{useState,useEffect} from 'react'

function TextChecker() {
  const [first, setfirst] = useState("")
  const [second, setsecond] = useState("")
  const [wordOne, setwordOne] = useState(0)
  const [wordTwo, setwordTwo] = useState(0)
  const [heading, setheading] = useState("")

  useEffect(() => {
    // If there are no Values inside text areas
    if(first.length == 0 || second.length == 0){
      setheading("Type Something in both of these fields")
    }else if(first==second){
      // If value of text area 1 is equal to text area 2
      setheading("Both fields are same")
    }else {
      // If they don't match at all
      setheading("They don't Match")
    }
    // Converts text area value to array first and then filter the empty spaces and then gives array length
    setwordOne(first.split(' ').filter(word=>word !== '').length)
    setwordTwo(second.split(' ').filter(word=>word !== '').length)
  }, [first,second])
  

  return (
    <div className='text-checker'>
      <div className='textarea'>
        <h1>{heading}</h1>
        <label>Text Area 1:</label>
        <textarea rows="4" className="form-control" onChange={e=>setfirst(e.target.value.toLowerCase())}></textarea>
        <p>{`Words Count = ${wordOne}`}</p>
        <label>Text Area 2</label>
        <textarea rows="4" className="form-control" onChange={e=>setsecond(e.target.value.toLowerCase())}></textarea>
        <p>{`Words Count = ${wordTwo}`}</p>
      </div>
    </div>
  )
}

export default TextChecker