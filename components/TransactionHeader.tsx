


import AccountsDropdown from "./AccountsDropdown";
import TransactionDateRange from "./DateRange";
import ExportFileComponent from "./ExportFileComponent";

const TransactionHeader = () => {
  return (
    <>
    <div className="pl-8 pr-6 space-y-3 py-6 md:border-b flex flex-col md:hidden items-center justify-between">
      <div className="text flex justify-between w-full">
       <AccountsDropdown/>
        <ExportFileComponent/>
      </div>
      <div className="text flex flex-col gap-2">
        <div className="text-xs flex items-center gap-2">
            Select Date Range:
        <TransactionDateRange/>
        </div>
      </div>
    </div>
    <div className="pl-8 pr-6 hidden py-6 border-b md:flex items-center justify-between">
      <div className="text">
       <AccountsDropdown/>
      </div>
      <div className="text flex gap-2">
        <div className="text flex items-center gap-2">
            Select Date Range:
        <TransactionDateRange/>
        </div>
        <ExportFileComponent/>
      </div>
    </div>
    </>
  );
};

export default TransactionHeader;
