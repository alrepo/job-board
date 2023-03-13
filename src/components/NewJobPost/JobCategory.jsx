import React, {useState} from 'react';
import { Select } from '../SearchBar/search-bar.styled';

const categories = [
  '👨‍🍳 اختر تصنيف',
  'طاهي/شيف/معلم',
  'مدير تشغيل',
  'مقدم خدمة',
  'خباز',
  'مقدم قهوة/باريستا',
  'مدير مطعم',
  'مدير فرع',
  'كاشير',
  'مسؤول إعاشة',
  'محاسب',
  'موارد بشرية',
  'أنظمة وإجرائات',
];

function JobCategory(props) {
let [jobCateg, setJobCateg] = useState("");
  function updateCategory(e)
  {
    setJobCateg(e.target.value);
    props.onChange(e.target.value);
  }
  return (
    <Select style={{marginBottom: "1rem"}} name="JobCategory" onChange={updateCategory}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
}

export default JobCategory;
