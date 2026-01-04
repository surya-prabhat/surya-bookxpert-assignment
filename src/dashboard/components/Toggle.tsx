import { useState } from 'react'

const Switcher1 = ( { formData, setFormData} : {formData: any, setFormData: any}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={formData.isActive && isChecked}
            onChange={(e) => {
                setFormData({ ...FormData, isActive: e.target.checked})
                handleCheckboxChange();}}
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
      </label>
    </>
  )
}

export default Switcher1