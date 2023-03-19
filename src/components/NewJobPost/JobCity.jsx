import React, { useState } from 'react';
import { Select } from '../SearchBar/search-bar.styled';

const cities = [
  '🌏 اختر مدينة',
  'الرياض',
  'مكة المكرمة',
  'جدة',
  'الطائف',
  'ينبع',
  'المدينة المنورة',
  'القصيم',
  'الدمام',
  'الخبر',
  'الظهران',
  'الجبيل',
  'الأحساء',
  'أبها',
  'خميس مشيط',
  'تبوك',
  'حائل',
  'الحدود الشمالية',
  'جازان',
  'الباحة',
  'نجران',
  'الجوف',
];

function JobCity(props) {
  let [jobCity, setJobCity] = useState("");
  function updateJobCity(e)
  {
    setJobCity(e.target.value);
    props.onChange(e.target.value);
  }
  return (
    <Select style={{marginBottom: "1rem"}} name="JobCity" onChange={updateJobCity} value={jobCity} submitClicked={props.submitClicked}>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </Select>
  );
}

export default JobCity;
