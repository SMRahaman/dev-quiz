import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
const Statics = () => {
    const statics = useLoaderData();
    const data = statics.data;
    return (
        <Container>
            <ResponsiveContainer width="100%" height={300} className="mt-5  " >
                <BarChart data={data} >
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}

export default Statics;