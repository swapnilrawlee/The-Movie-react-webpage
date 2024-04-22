import React from 'react'

const Dropdown = ({title , options ,func}) => {
  return (
    <div className=" text-xl px-2 py-1 mr-4 ">
    <select
      className="p-3 bg-slate-300 rounded-lg "
      onChange={func}
    >
      <option className='px-3 bg-slate-300' value="0">{title}</option>
   {options.map((o, i)=>{
     return <option className='px-3 bg-slate-300' key={i} value={o}>{o.toUpperCase()}</option>
   })}
    </select>
  </div>  )
}

export default Dropdown