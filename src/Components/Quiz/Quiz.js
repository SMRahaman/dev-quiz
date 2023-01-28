import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Quiz = ({ quiz, score, setScore }) => {
    const { question, options, correctAnswer } = quiz;
    const [check, setCheck] = useState('');
    const [disable, setDisable] = useState('');
    const [message, setMessage] = useState('');
    const removep = question.replace('<p>', ' ').replace("</p>", " ").replace("?<p>", " ").replace("? <p>", "? ").replace("<p>Hint", "Hint");

    const correctansware = () => {

        if (check === correctAnswer) {

            setScore(score + 1);
            setDisable(true);
            setMessage(<small className='text-warning fw-bold mb-3'>Answer is correct</small>)
        }

        else if (check === "") {


            alert('Please select your answre')
        }

        else {


            setDisable(true);
            setMessage(<small className='text-danger fw-bold mb-3'>Correct answer: {correctAnswer}</small>)
        }





    }

    return (


        <div className='border border-1 w-lg-75 w-sm-100 m-auto p-5 mb-5 mt-5 rounded'>
            <h5 className='text-start mb-3'>{removep}</h5>
            {
                options.map(option =>

                    <Form.Check
                        key={option.id}
                        className='d-flex justify-content-start mb-3 fw-bold text-success'
                        label={option}
                        value={option}
                        name="group1"
                        type={'radio'}
                        onChange={(e) => setCheck(e.target.value)}
                    />


                )


            }
            <div className='text-end '>
                <Button variant='primary' onClick={correctansware} disabled={disable}  >Submit your ansawre</Button>
            </div>
            {
                message
            }


        </div >




    );
};

export default Quiz;