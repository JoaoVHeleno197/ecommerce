import { addCart, noStock } from "../../assets";
import * as S from "./styles";

interface ButtonPProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const ButtonP = ({ onClick, children, disabled }: ButtonPProps) => {
  return (
    <S.Button onClick={onClick} className="btn" disabled={disabled}>
      {!disabled ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={addCart}></img> {children}
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={noStock}></img> {children}
        </div>
      )}
    </S.Button>
  );
};

export default ButtonP;
