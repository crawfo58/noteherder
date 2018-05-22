import React from 'react'

import './NoteForm.css'

const NoteForm = () => {
  return (
    <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
              />
            </p>
            
            <textarea name="body"></textarea>
          </form>
        </div>
  )
}

// const styles = {
//   noteForm: {
//     flexPositive: '1',
//     flexGrow: '1',
//     padding: '0 3rem'
//   },
//   formActions: {
//     paddingTop: '1rem',
//     marginLeft: '-2rem',
//     display: '-ms-flexbox',
//     display: 'flex',
//     msFlexLinePack: 'center',
//     alignContent: 'center'
//   },
//   button: {

//   },
// }

export default NoteForm