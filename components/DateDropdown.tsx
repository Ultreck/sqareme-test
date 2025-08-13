import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type DateSelectProps = {
  data: string[];
  className?: string;
};

const DateDropdown = ({ data, className }: DateSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px] bg-white", className)}>
        <SelectValue placeholder={data[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Date range</SelectLabel>
          {data.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DateDropdown;
