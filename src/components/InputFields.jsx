import React, { useState } from 'react'
import './componentsStyle.css'
import arrowIcon from "../assets/icon-arrow.svg"
import DisplayDate from './DisplayDate';

export default function InputFields() {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errors, setErrors] = useState([]);
    const [foundDate, setFoundDate] = useState("");

    let today = new Date();

    const handleClick = () => {
        const isDayValid = checkDay();
        const isMonthValid = checkMonth();
        const isYearValid = checkYear();
    
        if (isDayValid && isMonthValid && isYearValid) { 
            settingDate();
        }
    };

    const settingDate = () => {
        const inputDate = new Date(year, month - 1, date);

        let ageYears = today.getFullYear() - inputDate.getFullYear();
        let ageMonths = today.getMonth() - inputDate.getMonth();
        let ageDays = today.getDate() - inputDate.getDate();

        if (ageDays < 0) {
            ageMonths -= 1;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (ageMonths < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        setFoundDate({ years: ageYears, months: ageMonths, days: ageDays });
    }

    const checkDay = () => {
        var error;
        if(date===''){
            error="This field is required";
        } else if(date>31 && date<=0){
            error="Must be a valid day";
        } else if (checkDate()) {
            error = 'Must be a valid date';
        }
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'date'),
                { type: 'date', error: error }
            ])
            return false;
        } else {
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'date')
            ])
            return true;
        }
    }
    
    const checkMonth = () => {
        var error;
        if(month===''){
            error='This field is required';
        } else if(month<=0 && month>12){
            error='Must be a valid month';
        }
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'month'),
                { type: 'month', error: error }
            ])
            return false;
        } else {
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'month')
            ])
            return true;
        }
    }

    const checkYear = () => {
        var error;
        if(year===''){
            error='This field is required';
        } else if(year>today.getFullYear()){
            error='Must be in past';
        } else if(checkDate()){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'date'),
                { type: 'date', error: 'Must be a valid date' }
            ])
        }
        if(error){
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'year'),
                { type: 'year', error: error }
            ])
            return false;
        } else {
            setErrors(prevErrors => [
                ...prevErrors.filter(err => err.type !== 'year')
            ])
            return true;
        }
    }

    const checkDate = () => {
        const dateCheck = new Date(year, month - 1, date);
        if(date && month && year){
            if (dateCheck.getDate().toString() !== date) {
                return true;
            }
        }
        return false;
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
                    {errors.find(err => err.type === 'date')?.error || ''}
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
                <span className='inputField_error'>
                    {errors.find(err => err.type === 'month')?.error || ''}
                </span>
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
                <span className='inputField_error'>
                    {errors.find(err => err.type === 'year')?.error || ''}
                </span>
            </div>
        </div>
        <div className='buttonSection'>
            <div className='buttonSection_line'></div>
            <button className='buttonSection_button' onClick={handleClick}>
                <img src={arrowIcon} alt="arrowIcon" />
            </button>
        </div>
        <DisplayDate data={foundDate} />
    </>
    )
}