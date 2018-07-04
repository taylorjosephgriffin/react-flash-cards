import React from 'react'

export default function EditCard (props) {
  return (
    <div className='form-window'>
      <form id='card-form' onSubmit={props.handleSubmit} className='create-card-form col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-4'>
        <div className='form-head text-center'>
          <h1>Edit Your Card</h1>
        </div>
        <div className='form-icon text-center'>
          <i className="fas fa-band-aid text-warning"></i>
        </div>
        <div className='form-inputs'>
          <div className='form-group'>
            <label>Question</label>
            <input name='question' type='text' className='form-control create-input' id='questionInput' aria-describedby='questionHelp' placeholder='Enter the question...' defaultValue='Edit Question' />
          </div>
          <div className='form-group'>
            <label>Answer</label>
            <input name='answer' type='text' className='form-control create-input' id='answerInput' placeholder='Enter the answer...' defaultValue='Edit answer' />
          </div>
          <div className='form-button text-center'>
            <button type='submit' href='#card-list' className='btn btn-warning text-center'>Save</button>
          </div>
          <div className='close-form'>
            <a className='text-dark' href='#card-list'><i className='far fa-times-circle'></i></a>
          </div>
        </div>
      </form>
    </div>
  )
}