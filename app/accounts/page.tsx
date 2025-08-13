import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { accounts } from "@/lib/helper";

export default function AccountsPage() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3">User</th>
                <th className="p-3">Email</th>
                <th className="p-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr key={acc.id} className="border-b">
                  <td className="p-3 flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${acc.email}`}
                      />
                      <AvatarFallback>{acc.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {acc.name}
                  </td>
                  <td className="p-3">{acc.email}</td>
                  <td className="p-3 text-blue-500 font-semibold">
                    ₦{acc.balance.toLocaleString()}
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
