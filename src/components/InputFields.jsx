import React, { useState } from 'react'
import './componentsStyle.css'
import arrowIcon from "../assets/icon-arrow.svg"

export default function InputFields() {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errors, setErrors] = useState([]);

    let currentDate = new  Date();

    const handleClick = () => {
        if(checkDay() && checkMonth() && checkYear()){
            console.log('All good fucker!')
        }
    }

    const checkDay = () => {
        var error;
        const dateCheck = new Date(year, month - 1, date);
        if(date===''){
            error="This field is required";
        } else if(date>31 && date<=0){
            error="Must be a valid day";
        } else if (dateCheck.getDate() !== date || dateCheck.getMonth() !== month - 1 || dateCheck.getFullYear() !== year) {
            error = 'Must be a valid date';
        }
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'date'),
                { type: 'date', error: error }
            ])
            return false;
        } else {
            return true;
        }
    }
    
    const checkMonth = () => {
        debugger;
        var error;
        if(month===''){
            error='This field is required';
        } else if(month<=0 && month>12){
            error='Must be a valid month'
        }
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'month'),
                { type: 'month', error: error }
            ])
            return false;
        } else {
            return true;
        }
    }

    const checkYear = () => {
        var error;
        if(year===''){
            error='This field is required';
        } else if(year>currentDate.getFullYear()){
            error='Must be in past';
        } 
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'year'),
                { type: 'year', error: error }
            ])
            return false;
        } else {
            return true;
        }
    }

    const checkDate = () => {
        const dateCheck = new Date(year, month - 1, date);
        if (dateCheck.getDate() !== date || dateCheck.getMonth() !== month - 1 || dateCheck.getFullYear() !== year) {
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'date'),
                { type: 'date', errorMessage: 'Must be a valid date' }
            ]);
            return false;
        }
        return true;
    }

    return (
    <>
        <div className='inputField_container'>
                <div className={errors.some(err => err.type === 'date') ? 'inputField error' : 'inputField'}>
                <p className='inputField_heading'>DAY</p>
                <input
                    className='inputField_input'
                    name='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    id='date'
                    placeholder='DD'
                />
                <span className='inputField_error'>
                    {errors.find(err => err.type === 'date')?.errorMessage || ''}
                </span>
            </div>
            <div className={errors.some(err => err.type === 'month') ? 'inputField error' : 'inputField'}>
                <p className='inputField_heading'>MONTH</p>
                <input
                    className='inputField_input'
                    name='month'
                    value={month}
                    onChange={e => setMonth(e.target.value)}
                    id='month'
                    placeholder='MM'
                />
            </div>
            <div className={errors.some(err => err.type === 'year') ? 'inputField error' : 'inputField'}>
                <p className='inputField_heading'>YEAR</p>
                <input
                    className='inputField_input'
                    name='year'
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    id='year'
                    placeholder='YYYY'
                />
            </div>
        </div>
        <div className='buttonSection'>
            <div className='buttonSection_line'></div>
            <button className='buttonSection_button' onClick={handleClick}>
                <img src={arrowIcon} alt="arrowIcon" />
            </button>
        </div>
        <div>
            {date}<br/>
            {month}<br/>
            {year}<br/>
        </div>
    </>
    )
}