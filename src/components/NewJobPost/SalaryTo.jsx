import React from 'react';
import { Select } from '../SearchBar/search-bar.styled';

const salaryTo = [
  '💰 يصل إلى',
  '1000 ريال',
  '2000 ريال',
  '3000 ريال',
  '4000 ريال',
  '5000 ريال',
  '6000 ريال',
  '7000 ريال',
  '8000 ريال',
  '9000 ريال',
  '10000 ريال',
  '11000 ريال',
  '12000 ريال',
  '13000 ريال',
  '14000 ريال',
  '15000 ريال',
  '16000 ريال',
  '17000 ريال',
  '18000 ريال',
  '19000 ريال',
  '20000 ريال',
  '21000 ريال',
  '22000 ريال',
  '23000 ريال',
  '24000 ريال',
  '25000 ريال',
  '26000 ريال',
  '27000 ريال',
  '28000 ريال',
  '29000 ريال',
  '30000 ريال',
  'أكثر من 30000 ريال',
];

function SalaryTo({ value, onChange }) {
  return (
    <Select style={{marginBottom: "1rem"}} name="SalaryTo" value={value} onChange={onChange}>
      {salaryTo.map((salary) => (
        <option key={salary} value={salary}>
          {salary}
        </option>
      ))}
    </Select>
  );
}

export default SalaryTo;
