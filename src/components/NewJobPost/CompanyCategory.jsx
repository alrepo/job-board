import React from 'react';
import { Select } from '../SearchBar/search-bar.styled';

const categories = [
  '🍴 اختر تصنيف',
  'فاين دايننق', 
  'أبر كاجوال',
  'كاجوال',
  'وجبات سريعة',
  'شعبي',
  'كافيه',
  'بوفيه',
  'فود ترك',
  'درايف ثرو',
  'عصيرات',
  'آيس كريم',
  'مقهى',
  'حلويات',
  'مخبز',
  'فرانشايز',
  'توريد',
  'استشارات',
  'تقنية',
];

function CompanyCategory({ value, onChange }) {
  return (
    <Select style={{marginBottom: "1rem"}} name="CompanyCategory" value={value} onChange={onChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
}

export default CompanyCategory;