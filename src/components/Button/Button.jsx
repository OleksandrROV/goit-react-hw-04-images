export const Button = ({ onClick }) => {
  return (
    <div>
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
