import React from 'react'

export default function GenderCheckBox({onCheckBoxChange, selectedGender}) {
  return <>


    <div className="flex justify-start items-center gap-8">

      <div className="flex items-center mb-4">

        <input id="Male"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
          checked={selectedGender === "Male"}
          onChange={() => onCheckBoxChange("Male")}
        />

        <label htmlFor="Male" className={`${selectedGender === "Male" ? "selected" : ""} ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>Male</label>
     
      </div>



      <div className="flex items-center mb-4">

        <input id="Female"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" 
          checked={selectedGender === "Female"}
          onChange={() => onCheckBoxChange("Female")}
          />

<label htmlFor="Female" className={`${selectedGender === "Female" ? "selected" : ""} ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>Female</label>
      </div>

    </div>
  </>
}
