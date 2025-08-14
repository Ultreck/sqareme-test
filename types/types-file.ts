import { LucideIcon } from "lucide-react";

export type StepsProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  color: string;
};

export type AccountsProps = {
  id: number;
  name: string;
  email: string;
  balance: number;
};

export type AccountDetailsProps = {
    id: number;
    name: string;
    balance: number;
}

export type BeneficiariesProps = {
    id: number;
    name: string;
}

export type RecentTransfersProps = {
    id: number;
    to: string;
    date: string;
    amount: number;
    status: string;
}

export type SelectDataProps = string[]

export type DateProps = { data: { month: string; value: number }[] };

export type MenuItemsProps = {
    label: string;
    icon: LucideIcon;
    href: string;
}

export type RevenuePoint = { month: string; value: number };

export type Transaction = {
  id: number;
  amount: string;
  transactionId: string;
  type: string;
  date: string;
  time: string;
  status: "Processed" | "Failed";
};