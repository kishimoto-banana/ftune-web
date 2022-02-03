const Form = ({
  year,
  handleYear,
  month,
  handleMonth,
  day,
  handleDay,
  handleFormConfirm,
}) => {
  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const today = new Date();
  const thisYear = today.getFullYear();
  const datesOfFebruary = isLeapYear(year) ? 29 : 28;
  const datesOfYear = [
    31,
    datesOfFebruary,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const yearOptions = [];
  for (let i = 1920; i <= thisYear; i++) {
    yearOptions.push(i);
  }
  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dayOptions = [];
  for (let i = 1; i <= datesOfYear[month - 1]; i++) {
    dayOptions.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4 pb-4">
      <form>
        <label className="block">
          <span className="text-gray-700">生年月日</span>
          <div className="flex flex-row gap-1 items-center justify-center pt-1">
            <select
              value={year}
              onChange={handleYear}
              className="block w-22 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {yearOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-gray-700 font-bold">年</label>
            <select
              value={month}
              onChange={handleMonth}
              className="block w-18 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {monthOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-gray-700 font-bold">月</label>
            <select
              value={day}
              onChange={handleDay}
              className="block w-18 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {dayOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-gray-700 font-bold">日</label>
          </div>
        </label>
        <button
          type="button"
          onClick={handleFormConfirm}
          className="mt-2 text-white bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 font-medium rounded-full text-md sm:w-auto px-10 py-2.5 text-center"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Form;
