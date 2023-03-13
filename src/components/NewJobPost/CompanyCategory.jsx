import React, { useState } from 'react';
import { Select } from '../SearchBar/search-bar.styled';

const categories = [
  '🍴 اختر تصنيف',
  'فاين دايننق', 
  'أبر كاجوال',
  'كاجوال',
  'شعبي',
  'وجبات سريعة',
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

function CompanyCategory(props) {
  let [companyCateg, setCompanyCateg] = useState("");
  function updateCategory(e)
  {
    setCompanyCateg(e.target.value);
    props.onChange(e.target.value);
  }  return (
    <Select style={{marginBottom: "1rem"}} name="CompanyCategory" onChange={updateCategory}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
}

export default CompanyCategory;