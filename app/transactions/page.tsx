"use client";
import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="space-y-5">
      <TransactionHeader />
      <h1 className="text-[20px] mx-5 md:hidden font-semibold text-gray-800">
        Transactions
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block  pl-6">
        <table className="w-full border-collapse text-[15px]">
          <thead className="bg-gray-50 text-[#84919A] font-medium">
            <tr>
              <th className="p-4 text-left">
                <Checkbox />
              </th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Transaction ID</th>
              <th className="p-4 text-left">Transaction Type</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="shadow-sm bg-white border rounded-tl-2xl rounded-bl-2xl border-gray-100">
            {loading ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((tx) => (
                <tr key={tx.id} className=" hover:bg-gray-50">
                  <td className="p-3 rounded-tl-2xl rounded-bl-2xl">
                    <Checkbox />
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
      <TransactionPagination/>
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
