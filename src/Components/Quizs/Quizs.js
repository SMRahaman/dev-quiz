import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Quizs = () => {
    const quizs = useLoaderData();
    const { total, name } = quizs.data;
    const [score, setScore] = useState(0);
    return (

        < div className='' >
            <Container>

                <div className='d-flex align-items-center justify-content-between mt-5'>
                    <h3 className='text-warning '>Topic Name:{name}</h3>
                    <h3 className='text-danger fw-bold '>Score:{score}/{total}</h3>
                </div>
                <Row>
                    <Col lg={12} md={12} sm={12} >
                        {
                            Object.entries(quizs.data.questions).map(quiz => <Quiz
                                key={quiz[1].id}
                                quiz={quiz[1]}
                                score={score}
                                setScore={setScore}
                            ></Quiz>)
                        }
                    </Col>


                </Row>
            </Container>
        </div >
    );
};

export default Quizs;