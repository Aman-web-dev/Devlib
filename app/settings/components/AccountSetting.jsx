import React from "react";

function AccountSetting() {
  return (
    <div className="min-h-screen bg-[#23272f] text-[#adb9c5] ">
      <div className="w-[90%] m-auto">
        <p className="text-2xl border-b py-4">Change username</p>
        <p className="text-sm my-4">
          Changing Username May lead to Some Unexpected Results
        </p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Change username
        </button>
      </div>



      <div className="w-[90%] m-auto">
        <p className="text-2xl border-b py-4">Export Account History</p>
        <p className="text-sm my-4">
         You Can export your Account history and see What have you Done in the Past
        </p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Export Account History
        </button>
      </div>



      <div className="w-[90%] m-auto">
        <p className="text-2xl border-b py-4">Export Account Data</p>
        <p className="text-sm my-4">
         Export account Data and all saved articles, Videos and Documentation
        </p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Export Account Data
        </button>
      </div>
    </div>

  );
}

export default AccountSetting;
