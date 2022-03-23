import { useState } from 'react'
import CategoryButton from './CategoryButton'

const BoredButton = () => {
  const [activity, setActivity] = useState('')
  const [activityType, setActivityType] = useState('')
  const [loading, setLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const typeOptions = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']

  const getActivity = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity')
    const data = await response.json()
    setActivity(data.activity)
    // setLoading(false)
  }

  const handleClick = (e) => {
    if (activityType === e.target.innerText) {
      setActivityType('')
    } else {
      setActivityType(e.target.innerText)
    }
  }

  const clearAll = () => {
    if (activity) {
      setActivity('')
    }
    setActivityType('')
  }

  return (
    <div className='flex flex-col flex-center'>
      {activity && <h1 className='text-3xl lg:text-4xl xl:text-5xl mb-8 font-bold mx-auto'>{activity}</h1>}

      <div className='mx-auto'>
        <button className='btn btn-primary mb-4 mx-auto' onClick={getActivity}>
          What should I do?
        </button>

        {activity && (
          <div onClick={clearAll} className='btn btn-ghost mx-auto ml-2'>
            CLEAR
          </div>
        )}
      </div>

      <div className='mx-auto'>
        {typeOptions.map((opt) => (
          <CategoryButton category={opt} handleClick={handleClick} type={activityType}/>
        ))}
      </div>
    </div>
  )
}

export default BoredButton
