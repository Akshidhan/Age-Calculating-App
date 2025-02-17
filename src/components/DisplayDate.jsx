import React, { useEffect, useState } from 'react'
import './componentsStyle.css'

export default function DisplayDate({data}) {
    const [date, setDate] = useState('--');
    const [month, setMonth] = useState('--');
    const [year, setYear] = useState('--');

    useEffect(() => {
      if (data?.days && data?.months && data?.years) {
        const animateValue = (startValue, endValue, setter, duration) => {
          let currentValue = startValue;
          const increment = endValue / duration;
          const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= endValue) {
              currentValue = endValue;
              clearInterval(interval);
            }
            setter(Math.floor(currentValue));
          }, 10);
        };
  
        animateValue(0, data.years, setYear, 100);
        animateValue(0, data.months, setMonth, 100);
        animateValue(0, data.days, setDate, 100);
      }
    }, [data]);
    return (
      <div className='display'>
          <div className='display_section'>
              <p className='display_section_data'>{year}</p>
              <p className='display_section_type'>years</p>
          </div>
          <div className='display_section'>
              <p className='display_section_data'>{month} </p>
              <p className='display_section_type'>months</p>
          </div>
          <div className='display_section'>
              <p className='display_section_data'>{date} </p>
              <p className='display_section_type'>days</p>
          </div>
      </div>
    )
}
