import React from "react";
import Add from "../../assets/plus.png";
import addnewstyle from "./AddNew.module.css";

function AddNew() {
  return (
    <div class="pl-[10%] pr-[10%] bg-[#e8f2fb] pt-20 pb-20">
      <div class="flex flex-col border-2 pt-6 pb-6 pl-10 pr-10 rounded-lg bg-[#ffffff]">
        <div className={addnewstyle.heading}>
          <img src={Add} alt="plus" class="size-6 mr-6" />
          <div class="font-bold text-[20px]">Add your own</div>
        </div>
        <div className={addnewstyle.para}>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and add your Own page
        </div>
        <div>
          <button className={addnewstyle.button}>Add new</button>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
