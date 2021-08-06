import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Welcome To Home Page</h1>
            <h2>Go To <Link to='/activities'>Activities</Link></h2>
        </Container>
    )
}