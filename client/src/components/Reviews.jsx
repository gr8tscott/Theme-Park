import { useNavigate } from "react-router-dom"

const Reviews = (props) => {
  
  let navigate= useNavigate()

  const handleSubmit = (e) => {
    props.addReview(e)
    navigate('/reviews')
  }

  
  const newReview = props.newReview
  return (
    <div>
    <h1>What did you think about this ride?</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newReview.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text-area" value={newReview.thought} onChange={ props.handleChange} name={'thought'} placeholder={'thought'}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default Reviews