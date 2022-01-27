const Form = ({
  birthday,
  handleBirthdayChange,
  gender,
  handleGenderChange,
  handleFormConfirm,
  inValidBirthDay,
}) => {
  return (
    <form class="grid grid-cols-1 gap-2 pb-4">
      <label class="block">
        <span class="text-gray-700">生年月日</span>
        <input
          type="date"
          value={birthday}
          onChange={handleBirthdayChange}
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {inValidBirthDay && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            生年月日が正しくなさそうです
          </p>
        )}
      </label>
      <label class="block">
        <span class="text-gray-700">性別</span>
        <select
          value={gender}
          onChange={handleGenderChange}
          class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option>女性</option>
          <option>男性</option>
          <option>回答しない</option>
        </select>
      </label>
      <button
        type="button"
        onClick={handleFormConfirm}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        送信
      </button>
    </form>
  );
};

export default Form;
