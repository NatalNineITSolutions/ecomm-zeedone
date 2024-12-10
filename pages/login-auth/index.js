// pages/index.js
import React, { useState } from 'react';
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import { login } from '../../helpers/api'; 
import { toast } from 'react-toastify';

const Index = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const loginAuth = async () => {
        try {
            const userData = await login(email, password); 
            if (userData.token) {
                localStorage.setItem("authToken", userData.token);
                toast.success('Login successful!');
                router.push('/page/account/checkout'); 
            } else {
                setError("Invalid credentials. Please try again."); 
            }
        } catch (error) {
            setError("Invalid credentials. Please try again."); 
            console.error("Login failed:", error); 
        }
    };

    const registerAuth = () => {
        router.push('/page/account/register'); 
    };

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
                <title>Zeedone-Login</title>
            </Helmet>
            <CommonLayout parent="home" title="login">
                <section className="login-page section-b-space">
                    <Container>
                        <Row>
                            <Col lg="6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <Label className="form-label" htmlFor="email">Email</Label>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label className="form-label" htmlFor="password">Password</Label>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>
                                        {error && <div className="error-message text-danger">{error}</div>} {/* Display error message */}
                                        <button type="button" className="btn btn-solid" onClick={loginAuth}>
                                            Login
                                        </button>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg="6" className="right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create An Account</h6>
                                    <p>
                                        Sign up for a free account at our store. Registration is quick and easy.
                                        It allows you to be able to order from our shop. To start shopping, click
                                        register.
                                    </p>
                                    <button type="button" className="btn btn-solid" onClick={registerAuth}>
                                        Create an Account
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    );
};

export default Index;
