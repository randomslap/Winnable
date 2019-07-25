import React from "react";
import { Menu, Form, Icon, Input, Button, Checkbox } from "antd";

const Login = () => {
	return (
		<Form className="login-form">
			<Form.Item>
				<Input
					prefix={
						<Icon
							type="user"
							style={{ color: "rgba(0,0,0,.25)" }}
						/>
					}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={
						<Icon
							type="lock"
							style={{ color: "rgba(0,0,0,.25)" }}
						/>
					}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				{/* {getFieldDecorator("remember", {
					valuePropName: "checked",
					initialValue: true
				})(<Checkbox>Remember me</Checkbox>)} */}
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Log in
				</Button>
			</Form.Item>
			<Form.Item>
				<a className="login-form-forgot" href="">
					Forgot password
				</a>
			</Form.Item>
		</Form>
	);
};

export default Login;
