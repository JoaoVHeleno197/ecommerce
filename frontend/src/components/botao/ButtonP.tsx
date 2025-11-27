interface ButtonPProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const ButtonP = ({ onClick, children, disabled }: ButtonPProps) => {
  return (
    <button onClick={onClick} className="btn" disabled={disabled}>
        {children}
    </button>
    );
};

export default ButtonP;