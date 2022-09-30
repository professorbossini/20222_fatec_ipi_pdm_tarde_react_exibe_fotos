import React from 'react'

const PexelsLogo = () => {
  return (
    <div>
      {/* a>img */}
      <a href="https://www.pexels.com" target="blank">
        <img
          width={75}
          src="https://images.pexels.com/lib/api/pexels.png" 
          alt="Logo da Pexels" />
      </a>
    </div>
  )
}

export default PexelsLogo