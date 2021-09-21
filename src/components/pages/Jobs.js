import React from 'react'

const Jobs = () => {
  const handleSubmmit = (e) => {
    e.preventDefault()
    console.log('clicked')
  }
  return (
    <div className='jobs'>
      <div className='jobs-container'>
        <h1>Kontakt /Jobs</h1>
        <form>
          <div className='top'>
            <div className='need'>
              <div>
                <label htmlFor='need'>Ich brauche</label>
                <select id='need' name='need' required={true}>
                  <option value='job'>Job</option>
                  <option value='pflege'>Pflege</option>
                </select>
              </div>
              <div>
                <label htmlFor='anrede'>Anrede</label>
                <select id='anrede' name='anrede' required={true}>
                  <option value='frau'>Frau</option>
                  <option value='herr'>Herr</option>
                </select>
              </div>
            </div>
            <div>
              <div className='name'>
                <label htmlFor='name'>Vorname / Name</label>
                <input type='text' id='fname' name='fname' required={true} />
              </div>
            </div>
          </div>
          <div className='mitte'>
            <div>
              <label htmlFor='bday'>Geburtsdatum</label>
              <input type='date' id='bday' name='bday' required={true} />
            </div>
            <div>
              <label htmlFor='phone'>Telefonnummer</label>
              <input type='tel' id='phone' name='phone' required={true} />
            </div>
          </div>
          <div className='bottom'>
            <div>
              <label htmlFor='text'>Ihre Nachricht</label>
              <textarea
                type='text'
                id='message'
                name='message'
                required={true}
              />
            </div>
          </div>
          <button onClick={handleSubmmit} type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Jobs
