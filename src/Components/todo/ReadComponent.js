import React, { useEffect, useState } from 'react';
import { getOne } from '../../api/todoApi';
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    tno: 0,
    title: "",
    writer: "",
    dueDate: "",
    complete: false
};

const ReadComponent = ({ tno }) => {
    // Initialize state
    const [todo, setTodo] = useState(initState);
    const { moveToList } = useCustomMove();

    useEffect(() => {
        // Fetch the todo item data
        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        });
    }, [tno]);

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Content', todo.content)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

            {/* Buttons */}
            <div className="flex justify-end p-4">
                <button
                    type="button"
                    className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                    onClick={moveToList}
                >
                    List
                </button>
            </div>
        </div>
    );
};

// Helper function to create a div element
const makeDiv = (title, value) => (
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                {value}
            </div>
        </div>
    </div>
);

export default ReadComponent;