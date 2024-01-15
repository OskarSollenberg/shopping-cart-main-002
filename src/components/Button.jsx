function Button({ onClick, children }) {
  return (
    <button
      className={`px-4 py-2 border border-transparent text-sm font-medium shadow-sm rounded-sm hover:rounded-md active:bg-brown active:scale-100 hover:scale-110 transition-all duration-100 text-white bg-orange hover:bg-orange-900;`}
      onClick={(e) => {
        e.preventDefault();

        onClick();
      }}
    >
      {children}
    </button>
  );
}
export default Button;
