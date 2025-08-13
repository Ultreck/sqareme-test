"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { accountDetails, beneficiaries, recentTransfers } from "@/lib/helper";

export default function TransfersPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Make a Transfer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text flex">
            <div className="w-1/2 pr-5 space-y-2">
              <Label>From Account</Label>
              <Select>
                <SelectTrigger className="w-full h-12 py-4">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  {accountDetails.map((acc) => (
                    <SelectItem key={acc.id} value={acc.name}>
                      {acc.name} — ₦{acc.balance.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/2 pl-5 space-y-2">
              <Label>To Beneficiary</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select beneficiary" />
                </SelectTrigger>
                <SelectContent>
                  {beneficiaries.map((b) => (
                    <SelectItem key={b.id} value={b.name}>
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text flex">
            <div className="w-1/2 pr-5 space-y-2">
              <Label>Amount (₦)</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <div className="w-1/2 pl-5 space-y-2">
              <Label>Description (Optional)</Label>
              <Input placeholder="What's this for?" />
            </div>
          </div>

          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            Send Transfer
          </Button>
        </CardContent>
      </Card>

      {/* Recent Transfers */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transfers</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th className="text-left py-2">Beneficiary</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransfers.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="py-2">{t.to}</td>
                  <td className="py-2">{t.date}</td>
                  <td className="py-2">₦{t.amount.toLocaleString()}</td>
                  <td className="py-2">
                    <Badge
                      variant={
                        t.status === "Success"
                          ? "default"
                          : t.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {t.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
