import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Base = ({id}) => {
    const navigate = useNavigate();
    

    useEffect(() => {navigate(`/project/${id}/Dashboard`);},[id, navigate])
  return (
    <div>
      Base
    </div>
  )
}

export default Base
