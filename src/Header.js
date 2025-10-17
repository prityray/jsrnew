import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
        <div>
            <header className ="toparea">
                <Container>
                   <Row>
                         <Col>
                            This Site updated on : October 14, 2025    
                         </Col>
                         <Col>
                            gpa2010@rediffmail.com
                         </Col>
                   </Row>
                </Container>
            </header>
        </div>
    )
}

export default Header