const Button = ({ yeet, children, onClick }) => {
  console.log(yeet);
  return (
    <div
      className="bg-red-500 hover:bg-red-600 hover:cursor-pointer"
      onClick={onClick}
    >
      <button
        type="button"
        className="btn"
        data-toggle="tooltip"
        data-placement="top"
        title="Bold Text"
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
