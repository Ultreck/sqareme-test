import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input defaultValue="John Doe" />
            </div>
            <div>
              <Label>Email</Label>
              <Input defaultValue="john@example.com" />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input type="password" />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
