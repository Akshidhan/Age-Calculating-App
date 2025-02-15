import React, { useState } from 'react'
import './componentsStyle.css'
import arrowIcon from "../assets/icon-arrow.svg"

export default function InputFields() {
    const [date, setDate] = useState('--');
    const [month, setMonth] = useState('--');
    const [year, setYear] = useState('--');

    let currentDate = new  Date();

    const handleDate = (value) => {
        if(value>0 && value<=31){
            setDate(value);
        } else {
            setDate("--");
        }
    }

    const handleMonth = (value) => {
        if(month>0 && month>=12){
            setMonth(value);
        } else {
            setMonth("--");
        }
    }

    const handleYear = (value) => {
        if(value<=currentDate.getFullYear()){
            setYear(value);
        } else {
            setYear('--')
        }
    }


    return (
    <>
        <div className='inputField_container'>
            <div className='inputField'>
                <p className='inputField_heading'>DAY</p>
                <input
                    className='inputField_input'
                    name='date'
                    onChange={e => handleDate(e.target.value)}
                    id='date'
                    placeholder='DD'
                />
            </div>
            <div className='inputField'>
                <p className='inputField_heading'>MONTH</p>
                <input
                    className='inputField_input'
                    name='month'
                    onChange={e => handleMonth(e.target.value)}
                    id='month'
                    placeholder='MM'
                />
            </div>
            <div className='inputField'>
                <p className='inputField_heading'>YEAR</p>
                <input
                    className='inputField_input'
                    name='year'
                    onChange={e => handleYear(e.target.value)}
                    id='year'
                    placeholder='YYYY'
                />
            </div>
        </div>
        <div className='buttonSection'>
            <div className='buttonSection_line'></div>
            <button className='buttonSection_button'>
                <img src={arrowIcon} alt="arrowIcon" />
            </button>
        </div>
    </>
    )
}