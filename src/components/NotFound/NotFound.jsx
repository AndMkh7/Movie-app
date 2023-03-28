import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import s from './NotFound.module.css';


function NotFound () {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate ('/home');
    }
    return (
        <Container fluid className={s.container}>
            <Row className={s.row}>
                <Col md={{span: 8}} className={s.col}>
                    <h1 className={s.title}>404</h1>
                    <p className={s.text}>
                        Oops! The page you are looking for does not exist. Click the button below to go back to the
                        homepage.
                    </p>
                    <Link to="/" className={s.link}>
                        <Button variant="outline-light" className={s.button} onClick={handleClick}>
                            Go back to homepage
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}


export default NotFound;
