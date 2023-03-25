import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Scholarship Availed",
    value: "2,50,000 INR",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last month",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Applicants",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "New Applications",
    value: "560",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Approval Rate",
    value: "12%",
    footer: {
      color: "text-green-500",
      value: "",
      label: "",
    },
  },
];

export default statisticsCardsData;
