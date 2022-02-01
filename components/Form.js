const Form = ({
  birthday,
  handleBirthdayChange,
  handleFormConfirm,
  inValidBirthDay,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="grid grid-cols-1 gap-2 pb-4 pt-4">
        <label className="block">
          <span className="text-gray-700">生年月日</span>
          <input
            type="date"
            value={birthday}
            onChange={handleBirthdayChange}
            className="self-center mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {inValidBirthDay && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              生年月日が正しくなさそうです
            </p>
          )}
        </label>
        <button
          type="button"
          onClick={handleFormConfirm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Form;
