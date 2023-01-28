import React from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    const navigate = useNavigate();
    const quizHandler = () => {
        navigate(`/quiz/${id}`)
    }


    return (
        <Col lg={3} md={6} sm={12}>
            <div className='my-3 border border-5 rounded-3 p-2 '>
                <img src={logo} alt="" className='bg-info img-fluid rounded-3' />
                <h3 className='my-2'>{name}</h3>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='fw-bold'>Total Quiz:{total}</span>
                    <Button onClick={quizHandler} variant='primary' className=''><small>Start Practice</small></Button>
                </div>


            </div>
        </Col>
    );
};

export default Topic;