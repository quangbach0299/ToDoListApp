import styled from "styled-components";
import React from "react";

export const Link = ({ className, children, id, ...restProps }) => (
  <a href className={className} id={id} {...restProps}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: yellow;
  // Bị ảnh hưởng bởi thự viện của css
  font-weight: bold;
  background-color: green;
`;
