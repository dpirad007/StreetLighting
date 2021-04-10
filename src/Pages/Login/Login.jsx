import React from "react";
import {
  Container,
  FlexboxGrid,
  FormGroup,
  Panel,
  ControlLabel,
  FormControl,
  Form,
  ButtonToolbar,
  Button,
  Content,
} from "rsuite";

const Login = () => {
  return (
    <div className="show-fake-browser login-page">
      <Container>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>Username or email address</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password" />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary">Sign in</Button>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
};

export default Login;
