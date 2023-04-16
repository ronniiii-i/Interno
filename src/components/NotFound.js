import React from 'react'

function NotFound() {
  return (
    <main>
      <div className="bg full-width">
        <h1 className='big m-auto t-center'>404</h1>
        <h1 className="t-center">Page Not Found</h1>
        <h4 className="t-center">It appears that you have put in an incorrect url</h4>
        <h4 className="t-center">Click <a className='underline h4' href="/">here</a> to go back home</h4>
        </div>
    </main>
  )
}

export default NotFound