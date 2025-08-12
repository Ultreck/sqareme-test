"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTransactions } from "@/redux/transactionsSlice";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { GoDotFill } from "react-icons/go";
import TransactionHeader from "@/components/TransactionHeader";
import TransactionPagination from "@/components/TransactionPagination";

export default function TransactionsPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading } = useSelector(
    (state: RootState) => state.transactions
  );
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isAllSelected = data.length > 0 && selectedIds.length === data.length;

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(data.map((t) => t.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelectOne = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };
  return (
    <div className="space-y-5 pb-10">
      <TransactionHeader />
      <h1 className="text-[20px] mx-5 md:hidden font-semibold text-gray-800">
        Transactions
      </h1>

      {/* Desktop Table */}
      <div className="hidden border-0 md:block  pl-6">
        <table className="w-full border-collapse text-[15px]">
          <thead className="bg-gray-50 text-[#84919A] font-medium">
            <tr>
              <th className="p-4 text-left">
                <Checkbox
                className="data-[state=checked]:bg-[#3976E8] data-[state=checked]:border-[#3976E8]"
                  checked={isAllSelected}
                  onCheckedChange={(value) => toggleSelectAll(Boolean(value))}
                />
              </th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Transaction ID</th>
              <th className="p-4 text-left">Transaction Type</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="shadow-sm bg-white rounded-tl-2xl rounded-bl-2xl">
            {loading ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((tx, i) => (
                <tr key={tx.id} className=" hover:bg-gray-50">
                  <td
                    className={`p-3 ${i === 0 && "rounded-tl-2xl"} ${
                      i === 6 && "rounded-bl-2xl"
                    } `}
                  >
                    <Checkbox
                    className="data-[state=checked]:bg-[#3976E8] data-[state=checked]:border-[#3976E8]"
                      checked={selectedIds.includes(tx.id)}
                      onCheckedChange={(value) =>
                        toggleSelectOne(tx.id, Boolean(value))
                      }
                    />
                  </td>
                  <td className="p-3 border-b border-gray-200 font-medium">
                    {tx.amount}
                  </td>
                  <td className="p-3 text-[#535379] border-b border-gray-200">
                    {tx.transactionId}
                  </td>
                  <td className="p-3 text-[#535379] border-b border-gray-200">
                    {tx.type}
                  </td>
                  <td className="p-3 text-[#535379] border-b border-gray-200">
                    {tx.date}
                  </td>
                  <td className="p-3 text-[#535379] border-b border-gray-200">
                    {tx.time}
                  </td>
                  <td className="p-3 border-b border-gray-200">
                    <Badge
                      className={`px-2.5 py-0.5 rounded-full w-[106px] h-[30px] text-[12px] font-medium ${
                        tx.status === "Processed"
                          ? "bg-green-200/30 border border-[#5DC090] text-[#144909]"
                          : "bg-red-200/30 border border-[#F14156] text-[#740613]"
                      }`}
                    >
                      <GoDotFill
                        className={`text-2xl ${
                          tx.status === "Processed"
                            ? " text-[#92EF80]"
                            : "text-[#F14156]"
                        }`}
                      />
                      {tx.status}
                    </Badge>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
      </div>
      <div className="text">
        <TransactionPagination />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 px-5">
        {loading ? (
          <div className="p-4 text-center text-gray-500">Loading...</div>
        ) : (
          data.map((tx) => (
            <div
              key={tx.id}
              className="bg-white rounded-lg  border border-gray-300 pl-4"
            >
              <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
                <span className="text-[#252C32] text-[16px]">Amount</span>
                <span className="font-semibold">{"70%"}</span>
              </div>
              <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
                <span className="text-[#252C32] text-[16px]">Type</span>
                <span>{tx.type}</span>
              </div>
              <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
                <span className="text-[#252C32] text-[16px]">Date</span>
                <span>
                  {tx.date}, {tx.time}
                </span>
              </div>
              <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
                <span className="text-[#252C32] text-[16px]">Status</span>
                <Badge
                  className={`px-2.5 py-0.5 rounded-full w-[90px] h-[30px] text-[12px] font-medium ${
                    tx.status === "Processed"
                      ? "bg-green-200/30 border border-[#5DC090] text-[#144909]"
                      : "bg-red-200/30 border border-[#F14156] text-[#740613]"
                  }`}
                >
                  <GoDotFill
                    className={`text-2xl ${
                      tx.status === "Processed"
                        ? " text-[#92EF80]"
                        : "text-[#F14156]"
                    }`}
                  />
                  {tx.status}
                </Badge>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
