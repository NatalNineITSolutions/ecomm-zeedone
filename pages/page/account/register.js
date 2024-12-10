import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { register } from '../../../helpers/api';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

const Register = () => {

    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { mutate, isLoading, isError, error } = useMutation(register, {
        onSuccess: () => {
            toast.success('Registration successful!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            localStorage.setItem('user', 'true');
            router.push('/page/account/login-auth');
        },
        onError: (error) => {
            toast.error('An error occurred while registering. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
            console.error('Error during registration:', error.response ? error.response.data : error.message);
        },
    });
    

    const handleRegister = () => {
        const userData = {
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            email_notifications: "yes",
        };
        console.log(userData);
        mutate(userData);
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
                                            {isError && (
                                                <div className="text-danger mt-2">
                                                    An error occurred: {error.response ? error.response.data.message : error.message}
                                                </div>
                                            )}
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



