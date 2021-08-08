import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="Logo" style={{marginRight: '10px'}} />
                    Social App
                </Menu.Item>
                <Menu.Item as={NavLink} to='/Activities' name="Activities" />
                <Menu.Item as={NavLink} to='/Errors' name="Errors" />
                <Menu.Item>
                    <Button as={NavLink} to='/CreateActivity'  positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}