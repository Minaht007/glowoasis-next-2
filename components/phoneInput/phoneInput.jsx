"use client"
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
// import 'flag-icon-css/css/flag-icon.min.css'; // Підключіть стилі прапорців

function PhoneNumberInput() {
  return (
    <div>
      <PhoneInput
        country={'ua'} // Код країни за замовчуванням
        enableAreaCodes // Дозволяє обирати код регіону
        placeholder="Enter phone number"
        inputStyle={{ width: '100%' }} // Стилі для поля введення
      />
    </div>
  );
}

export default PhoneNumberInput;