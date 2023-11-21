"use client"
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
// import 'flag-icon-css/css/flag-icon.min.css'; // Підключіть стилі прапорців

function PhoneNumberInput() {
  return (
    <div>
      <PhoneInput
        country={'ua'} 
        enableAreaCodes 
        placeholder="Enter phone number"
        inputStyle={{ width: '100%', textAlign: 'start', paddingLeft: '45px' } } />
    </div>
  );
}

export default PhoneNumberInput;