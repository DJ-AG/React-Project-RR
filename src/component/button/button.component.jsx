import React from "react";
import { Btn } from "./button.styles";

const Button = ({ to, children, ...props }) => (
  <Btn to='/#' {...props}>
    {children}
  </Btn>
);
export default Button;
