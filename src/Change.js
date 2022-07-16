import React, { useState } from 'react'
import musicIcon from './image/icon-music (1).svg'




const Change = () => {
  const [Plan, setPlan] = useState({
    Plan:'Annual plan',
    number:'$55.99 per year' 
    
  })
  
  function ChangeAction() {
    if(Plan.Plan === 'Annual plan'  && Plan.number === '$55.99 per year'){

      setPlan ({Plan:'Monthly Plan', number:'$ ' + Math.round(55.99/12) + ' per Month'})
    }else{
      setPlan ({Plan:'Annual plan', number:'$55.99 per year'})
    }
    
  }
  return (
    <div className='action'>
        <div className='flex'>
            <img src={musicIcon} alt="" className='musicIcon'/>
            <div>
            <h4 className='buttonText'>{Plan.Plan}</h4>
            <p><small>{Plan.number}</small> </p>

            </div>
        </div>
        <div>
        <p className='changeStyle'onClick={ChangeAction}><small>Change</small>  </p>
        </div>
        
    </div>
  )
}

export default Change