const RegisteredInfo = ({ birthday }) => {
  return (
    <div className="flex justify-center">
      <h2 className="text-xl">{birthday}生まれのあなた</h2>
    </div>
  );
};

export default RegisteredInfo;
