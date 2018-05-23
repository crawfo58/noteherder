import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
  return (
    <div 
      className="Sidebar"
      style={styles.sidebar}
    >
      <div 
        className="logo"
        styles={styles.logo}
      >
        <img 
          src={quill} 
          alt="Noteherder" 
          style={styles.logoImg}
        />
      </div>

      <a 
        className="new-note"
        href="/notes" 
        style={styles.newNote}
      >
        <img
          src={newHover}
          alt="New note"
          style={styles.newNoteImg}
        />
        <img
          src={newIcon}
          alt="New note"
          style={styles.newNoteImg}
        />
      </a>

      <div class="SignOut" style={styles.signOut}>
        <button style={styles.button}>
          <i 
            class="fa fa-sign-out"
            style={styles.buttonIcon}
          />
        </button>
      </div>
    </div>
  )
}

const styles = {
  sidebar: {
    width: '6rem',
    backgroundColor: '#f3f3f3',
    padding: '0.5 rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    fontFamily: '"Fauna One"',
    color: '#666',
    fontSize: '3rem'
  },
  logoImg: {
    width: '3rem',
    paddingLeft: '0.4 rem'
  },
  newNote: {
    marginTop: '2rem',
    position: 'relative',
    width: '4rem'
  },
  newNoteImg: {
    position: 'absolute',
    left: '0',
    width: '100%',
    transition: 'opacity 0.25s ease-in-out'
  },
  button: {
    backgroundColor: 'transparent',
    border: '0',
    color: '#008BF8',
    cursor: 'pointer',
    outline: 'none'
  },
  signOut: {
    position: 'absolute',
    bottom: '1rem'
  },
  buttonIcon: {
    fontSize: '2rem'
  }
}

export default Sidebar