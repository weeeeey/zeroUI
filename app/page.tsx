'use client';
import { Todo } from '@/components/flyout/todo';

const MainPage = () => {
    return (
        <div className="w-full h-full flex justify-center items-center p-20 ">
            <Todo>
                <Todo.List />
            </Todo>
        </div>
    );
};

export default MainPage;
