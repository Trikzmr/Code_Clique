import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Gitcal = () => {
  return (
    <div className='gitcal bg-[#f4fef8] rounded-2xl shadow mx-auto p-6 space-y-2 my-4'>
      <GitHubCalendar username="Trikzmr" theme={{
    light: ['#ffe5e5', '#ff9999', '#ff4d4d', '#ff1a1a', '#cc0000'],
    dark: ['#ffe5e5', '#ff9999', '#ff4d4d', '#ff1a1a', '#cc0000'],
  }} colorScheme	="light" />
    </div>
  )
}

export default Gitcal
