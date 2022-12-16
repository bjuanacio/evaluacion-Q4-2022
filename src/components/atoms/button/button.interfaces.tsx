export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  color?: "white";
  size?: "small";
  disabled?: boolean;
}
