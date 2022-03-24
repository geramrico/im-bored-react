import { useState } from 'react'
import CategoryButton from './CategoryButton'

const BoredButton = () => {
  const [activity, setActivity] = useState('Click to get something to do 👇')
  const [activityType, setActivityType] = useState('')
  const [loading, setLoading] = useState(true)
  const [btnText, setBtnText] = useState('Click me!')

  const typeOptions = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']

  const getActivity = async () => {
    const params = new URLSearchParams({
      type: activityType,
    })
    const response = await fetch(`http://www.boredapi.com/api/activity?${params}`)
    const data = await response.json()
    setBtnText('Show me more')
    setActivity(data.activity)
    setLoading(false)
  }

  const handleClick = (e) => {
    if (activityType === e.target.innerText) {
      setActivityType('')
    } else {
      setActivityType(e.target.innerText)
      getActivity()
    }
  }

  const clearAll = () => {
    if (activity) {
      setActivity('Click to get something to do 👇')
    }
    setActivityType('')
    setBtnText('Click me!')
  }

  return (
    <div className='flex flex-col flex-center'>
      {activity && <h1 className='text-3xl lg:text-4xl xl:text-5xl mb-8 font-bold mx-auto text-center'>{activity}</h1>}

      <div className='mx-auto mb-4 text-center flex flex-col sm:flex-row'>
        <button className='btn btn-primary mx-auto' onClick={getActivity}>
          {btnText}
        </button>

        {activity !== 'Click to get something to do 👇' && (
          <div onClick={clearAll} className='btn btn-ghost mx-auto ml-2 text-center'>
            CLEAR
          </div>
        )}
      </div>

      <div
        className='
                  mx-auto 
                  grid 
                  grid-cols-2
                  sm:grid-cols-3 
                  md:grid-cols-3 
                  lg:grid-cols-2 
                  xl:grid-cols-9 
                  gap-1'
      >
        {typeOptions.map((opt) => (
          <CategoryButton category={opt} handleClick={handleClick} type={activityType} />
        ))}
      </div>
    </div>
  )
}

export default BoredButton
