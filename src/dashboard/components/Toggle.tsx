const Switcher1 = ({ enabled, onChange }: { enabled: boolean, onChange: (state: boolean) => void; }) => {
  


  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={enabled} 
          onChange={(e) => onChange(e.target.checked)}    
          className='sr-only'
        />
        <div className={`block h-8 w-14 rounded-full transition ${
          enabled ? 'bg-blue-600' : 'bg-[#E5E7EB]'
        }`}></div>
        <div className={`dot absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
          enabled ? 'left-7' : 'left-1'
        }`}></div>
      </div>
    </label>
  );
};

export default Switcher1;