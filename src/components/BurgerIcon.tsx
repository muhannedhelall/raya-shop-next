"useClient";
import { RxHamburgerMenu } from "react-icons/rx";

function BurgerIcon({
  className,
  size = 25,
  children,
  onClick = () => { }
}: {
  className?: string;
  size?: number;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <label>
      <input type="checkbox" className="hidden peer" />
      <RxHamburgerMenu
        size={size}
        className={`lg:hidden cursor-pointer ${className}`}
        onClick={onClick}
      />
      {children}
    </label>
  );
}

export default BurgerIcon;
