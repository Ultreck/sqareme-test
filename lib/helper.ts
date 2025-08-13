import {
  AccountDetailsProps,
  AccountsProps,
  BeneficiariesProps,
  MenuItemsProps,
  RecentTransfersProps,
  SelectDataProps,
  StepsProps,
} from "@/types/types-file";
import {
  LayoutDashboard,
  User,
  ArrowRightLeft,
  CreditCard,
  Settings,
} from "lucide-react";

export const steps: StepsProps[] = [
  {
    title: "Explore Your Dashboard",
    desc: "Get an overview of your activity and performance in one place.",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    title: "Manage Accounts",
    desc: "View, edit, and monitor all your user accounts.",
    icon: User,
    href: "/accounts",
    color: "text-green-500",
  },
  {
    title: "Make Transfers",
    desc: "Easily transfer funds between accounts securely.",
    icon: ArrowRightLeft,
    href: "/transfers",
    color: "text-yellow-500",
  },
  {
    title: "Track Transactions",
    desc: "Review and analyze your recent transaction history.",
    icon: CreditCard,
    href: "/transactions",
    color: "text-purple-500",
  },
  {
    title: "Adjust Settings",
    desc: "Personalize your dashboard to suit your preferences.",
    icon: Settings,
    href: "/settings",
    color: "text-red-500",
  },
];

export const accounts: AccountsProps[] = [
  { id: 1, name: "John Doe", email: "john@example.com", balance: 250000 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", balance: 480000 },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    balance: 320000,
  },
  { id: 4, name: "Emily Brown", email: "emily@example.com", balance: 150000 },
  { id: 5, name: "David Wilson", email: "david@example.com", balance: 520000 },
  {
    id: 6,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    balance: 410000,
  },
  {
    id: 7,
    name: "Daniel Anderson",
    email: "daniel@example.com",
    balance: 275000,
  },
  {
    id: 8,
    name: "Olivia Thomas",
    email: "olivia@example.com",
    balance: 390000,
  },
];

export const accountDetails: AccountDetailsProps[] = [
  { id: 1, name: "Main Wallet", balance: 350000 },
  { id: 2, name: "Savings", balance: 800000 },
];

export const beneficiaries: BeneficiariesProps[] = [
  { id: 1, name: "John Doe - GTBank" },
  { id: 2, name: "Jane Smith - Zenith Bank" },
];

export const recentTransfers: RecentTransfersProps[] = [
  {
    id: 1,
    to: "John Doe",
    date: "2025-08-10",
    amount: 50000,
    status: "Success",
  },
  {
    id: 2,
    to: "Jane Smith",
    date: "2025-08-08",
    amount: 150000,
    status: "Pending",
  },
  {
    id: 3,
    to: "Michael Brown",
    date: "2025-08-07",
    amount: 75000,
    status: "Failed",
  },
];

export const selectData: SelectDataProps = [
  "Weekly",
  "Monthly",
  "Quarterly",
  "Yearly",
];

export const menuItems: MenuItemsProps[] = [
  { label: "Get Started", href: "/", icon: LayoutDashboard },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Accounts", href: "/accounts", icon: User },
  { label: "Transfers", href: "/transfers", icon: ArrowRightLeft },
  { label: "Transactions", href: "/transactions", icon: CreditCard },
  { label: "Settings", href: "/settings", icon: Settings },
];
