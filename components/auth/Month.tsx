

interface MonthProps {
  currentMonth: MonthInput;
  selectedMonth: MonthInput;
  setSelectedMonth: Function;
}

const Month: React.FC<MonthProps> = ({ currentMonth, selectedMonth,setSelectedMonth }) => {
  return (
    <div
    className={`border h-[50px] mx-1 rounded-full flex justify-center items-center min-w-[50px] ${
      selectedMonth.month == currentMonth.month ? "bg-primary text-white" : "border-primary bg-white text-primary"
    }`}
    onClick={() => setSelectedMonth(currentMonth)}
  >
    <p className=" font-medium lg:text-xl ">
      {currentMonth.month}
      <sup className="font-light">{currentMonth.sup}</sup>
    </p>
  </div>
  );
};

export default Month;
