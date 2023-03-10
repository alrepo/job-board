import React from 'react';
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

function JobCity({ value, onChange }) {
  return (
    <Select name="JobCity" value={value} onChange={onChange}>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </Select>
  );
}

export default JobCity;
