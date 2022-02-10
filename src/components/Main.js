import React from 'react';
// Components
import Tasks from './Tasks';
import AddTask from './AddTask';

const Main = () => {
    return (
        <main>
            <AddTask />
            <Tasks />
        </main>
    );
};

export default Main;