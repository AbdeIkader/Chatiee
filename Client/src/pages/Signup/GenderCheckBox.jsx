import React from 'react'

export default function GenderCheckBox() {
  return <>
    <div className="flex justify-start items-center gap-8">
        
<div class="flex items-center mb-4">
    <input id="MaleCheckbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
    <label for="MaleCheckbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div class="flex items-center mb-4">
    <input id="FemaleCheckbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
    <label for="FemaleCheckbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>

    </div>
  </>
}
