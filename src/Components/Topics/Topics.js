import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();


    return (
        <Container className='py-5'>
            <Row>

                {
                    Object.entries(topics.data).map(topic => <Topic
                        key={topic[1].id}
                        topic={topic[1]}
                    ></Topic>)
                }

            </Row>

        </Container>
    );
};

export default Topics;