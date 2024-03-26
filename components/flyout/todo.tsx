'use client';
import { cn } from '@/lib/cn';
import React, { Dispatch } from 'react';

interface TodoProps {
    id: number;
    text: string;
    isCompleted: boolean;
}

type ActionType =
    | { type: 'Create'; text: string }
    | { type: 'Toggle'; id: number }
    | { type: 'Delete'; id: number };

const TodosContext = React.createContext<TodoProps[] | undefined>(undefined);

const TodoActionContext = React.createContext<Dispatch<ActionType> | undefined>(
    undefined
);

const useTodosContext = () => {
    const todos = React.useContext(TodosContext);
    if (!todos) {
        throw new Error('useTodosContext must be used within a TodosProvider');
    }
    return todos;
};
const useTodoActionContext = () => {
    const dispath = React.useContext(TodoActionContext);
    if (!dispath) {
        throw new Error('useTodosContext must be used within a TodosProvider');
    }
    return dispath;
};

const dispatchFunction = (
    states: TodoProps[],
    action: ActionType
): TodoProps[] => {
    switch (action?.type) {
        case 'Create':
            const maxId = Math.max(...states.map((todo) => todo.id)) + 1;
            return [
                ...states,
                {
                    id: maxId,
                    text: action.text,
                    isCompleted: false,
                },
            ];
        case 'Delete':
            return states.filter((todo) => todo.id !== action.id);
        case 'Toggle':
            return states.map((todo) =>
                todo.id === action.id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            );

        default:
            throw new Error('Invalid action');
    }
};

export const Todo = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(dispatchFunction, [
        {
            id: 1,
            text: 'Learn React',
            isCompleted: false,
        },
        {
            id: 2,
            text: 'Learn React',
            isCompleted: false,
        },
        {
            id: 3,
            text: 'Learn React',
            isCompleted: false,
        },
    ]);

    return (
        <TodoActionContext.Provider value={dispatch}>
            <TodosContext.Provider value={state}>
                {children}
            </TodosContext.Provider>
        </TodoActionContext.Provider>
    );
};

const TodoList = () => {
    const todos = useTodosContext();
    return (
        <div className="flex flex-col space-y-3">
            <Create />
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem {...todo} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TodoItem = ({ id, isCompleted, text }: TodoProps) => {
    return (
        <div className={cn('flex space-x-4 justify-center items-center')}>
            <span className={cn(isCompleted && 'line-through')}>{text}</span>
            <Toggle id={id} />
        </div>
    );
};

const Create = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [text, setText] = React.useState('');
    const dispath = useTodoActionContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispath({ type: 'Create', text });
        setText('');
        setIsOpen(false);
    };
    return (
        <>
            <button
                onClick={() => setIsOpen((p) => !p)}
                className="bg-black text-white p-2 rounded-xl"
            >
                Create
            </button>
            {isOpen && (
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        value={text}
                        type="text"
                        placeholder="write a text "
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    );
};
const Toggle = ({ id }: { id: number }) => {
    const dispath = useTodoActionContext();

    return (
        <button
            onClick={() => dispath({ type: 'Toggle', id })}
            className="p-2 bg-black text-white rounded-xl"
        >
            Toggle
        </button>
    );
};

Todo.List = TodoList;
Todo.Item = TodoItem;
