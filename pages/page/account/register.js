import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        const userData = {
            first_name: firstName,  
            last_name: lastName,    
            email: email,
            password: password,
        };

        try {
            const response = await fetch(`${apiBaseUrl}/client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`, 
                },
                body: JSON.stringify(userData), 
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful!');
                localStorage.setItem('user', 'true');
                router.push('/page/account/checkout'); 
            } else {
                alert(`Registration failed: ${data.message || 'Unknown error occurred'}`);
                console.error('Error during registration:', data);
            }
        } catch (error) {
            alert('An error occurred while registering. Please try again.');
            console.error('Error during registration:', error);
        }
    };

    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>Create Account</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="fname">First Name</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="fname"
                                                placeholder="First Name"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="lname">Last Name</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="lname"
                                                placeholder="Last Name"
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="email">Email</Label>
                                            <Input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="password">Password</Label>
                                            <Input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Col>
                                        <Col md="12">
                                            <button type="button" className="btn btn-solid w-auto" onClick={handleRegister}>
                                                Create Account
                                            </button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Register;
