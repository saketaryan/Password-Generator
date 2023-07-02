import React, {useState} from 'react'
import Strength from './Strength'
import arrow from '../assets/arrow.png'
import PBox from './PBox'

const PasswordGenerator = () => {

    const [length, setLength] = useState(4);
    const [password, setPassword] = useState('PassW!rd');
    const [strength, setStrength] = useState(0);

    const updateLength = () => {
        const slider = document.getElementById('slider')
        setLength(slider.value)
        calculateStrength();
    }

    const generatePassword = () => {
        const uppercase = document.getElementById('uppercase').checked;
        const lowercase = document.getElementById('lowercase').checked;
        const numbers = document.getElementById('numbers').checked;
        const symbols = document.getElementById('symbols').checked;

        if(!uppercase && !lowercase && !numbers && !symbols) {
            alert('Please select at least one option');
            return;
        }

        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbersList = '0123456789';
        const symbolsList = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let characters = '';
        let password = '';

        if (uppercase) characters += uppercaseLetters;
        if (lowercase) characters += lowercaseLetters;
        if (numbers) characters += numbersList;
        if (symbols) characters += symbolsList;

        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(password);
        calculateStrength();
    }

    const calculateStrength = () => {
        const uppercase = document.getElementById('uppercase').checked;
        const lowercase = document.getElementById('lowercase').checked;
        const numbers = document.getElementById('numbers').checked;
        const symbols = document.getElementById('symbols').checked;

        let strength = 0;
        if (uppercase) strength += 26;
        if (lowercase) strength += 26;
        if (numbers) strength += 10;
        if (symbols) strength += 32;

        strength *= length;
        strength = Math.floor(strength / 235);
        setStrength(strength);
    }




  return (
    <div>
    <PBox password={password} />
    <div className='box'>
    <div className='flex justify-between my-2'>
        <h5 className='my-auto'>Character Length</h5>
        <h3 className='my-auto counter'>{length}</h3>
    </div>
     <div className='flex my-10'>
        <input onChange={updateLength} defaultValue={4} className='w-100 slider mx-auto' type='range' min='4' max='16' id='slider' />
     </div>

    <div className='my-2'>
        <div className='my-1 flex'>
            <input type='checkbox' id='uppercase' />
            <h4 className='ml-2' htmlFor='uppercase'>Include Uppercase Letters</h4>
        </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='lowercase' />
            <h4 className='ml-2' htmlFor='lowercase'>Include Lowercase Letters</h4>
            </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='numbers' />
            <h4 className='ml-2' htmlFor='numbers'>Include Numbers</h4>
        </div>
        <div className='my-1 flex'>
            <input type='checkbox' id='symbols' />
            <h4 className='ml-2' htmlFor='symbols'>Include Symbols</h4>
        </div>
    </div>

    <Strength strength={strength} />

    <div onClick={generatePassword} className='mx-auto box generate'>
        <div className='flex justify-center'>
            <div className='my-auto'>GENERATE</div>
            <img src={arrow} alt='arrow' className='relative my-auto'/>
        </div>
    </div>

    </div>
    </div>
  )
}

export default PasswordGenerator