import styled from "styled-components";

// Define props type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // variant?: ButtonVariant;
  children: React.ReactNode;
}


const MyStyledButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const MyButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <MyStyledButton {...rest}>
      {children}
    </MyStyledButton>
  );
};
