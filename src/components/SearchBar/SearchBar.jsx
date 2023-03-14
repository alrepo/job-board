import React from "react";
import { 
  SearchContainer,
  FilterContainer,
  Filter,
  Select,
  SearchButton,
  
} from "./search-bar.styled.js";

function SearchBar() {
  return (
    <SearchContainer dir="rtl">
      {/* <form action="/" method="post">
        <input type="text" placeholder="ابحث بالمسمى الوظيفي..." />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form> */}
      <FilterContainer>
        <Filter>
          <Select style={{marginTop: "0.5rem"}}>
            <option value="كل المناطق">
              <span role="img" aria-label="emoji">
                {/* 🌏{" "} */}
              </span>
              كل المناطق
            </option>
            <option value="الرياض">الرياض</option>
            <option value="مكة المكرمة">مكة المكرمة</option>
            <option value="المنطقة الشرقية">المنطقة الشرقية</option>
          </Select>
        </Filter>
        <Filter>
          <Select style={{marginTop: "0.5rem"}}>
            <option value="كل الفئات">
              <span role="img" aria-label="emoji">
                {/* 🍴{" "} */}
              </span>
              كل الفئات
            </option>
            <option value="فاين دايننق">فاين دايننق</option>
            <option value="وجبات سريعة">وجبات سريعة</option>
            <option value="أبر كاجوال">أبر كاجوال</option>
          </Select>
        </Filter>
        <Filter>
          <Select style={{marginTop: "0.5rem"}}>
            <option value="كل الوظائف">
              <span role="img" aria-label="emoji">
                {/* 👨‍🍳{" "} */}
              </span>
              كل الوظائف
            </option>
            <option value="full-time">طاهي/شيف</option>
            <option value="part-time">مدير تشغيل</option>
            <option value="freelance">باريستا</option>
          </Select>
        </Filter>
        <SearchButton>
          <span role="img" aria-label="emoji">
            {/* 🔎{" "} */}
          </span>
          بحث
        </SearchButton>
      </FilterContainer>
    </SearchContainer>
  );
}

export default SearchBar;
