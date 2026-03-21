import * as React from 'react';
import {useNavigate} from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    );
}
