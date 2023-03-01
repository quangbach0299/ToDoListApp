import React from "react";
import { Button, SmallButton } from "../Components/Button";
import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextField";

const DemoJSS = () => {
  return (
    <div>
      DemoJSS
      <Button className="button_style" primary>
        Hello Khải
      </Button>
      <SmallButton>Hello Bách</SmallButton>
      <StyledLink id="abc" name="abc">
        ahihi
      </StyledLink>
      <TextField inputColor="violet"></TextField>
    </div>
  );
};

export default DemoJSS;
