import React from 'react'
export default function Input({id,title,type,name,changeData,errors,value}) {
    // console.log(errors);
return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input type={type} className="form-control" id={id} name={name} value={value} onChange={changeData}/>
        {errors[name] && <p className='text-danger'>{errors[name]}</p>}
        
    </div>
    
)
}
