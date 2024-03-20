'use client';
import React from 'react';

export const ShuffleTableLayout = () => {
    return (
        <div className="w-full h-full bg-indigo-500 flex justify-center items-center py-40 px-10">
            <ShuffleTable />
        </div>
    );
};

const ShuffleTable = () => {
    const [isMount, setIsMount] = React.useState(false);
    React.useEffect(() => {
        setIsMount(true);
    }, []);
    if (!isMount) return null;
    return (
        <table className="w-full  border ">
            <thead className="w-full border-b ">
                <tr className="uppercase text-slate-300 text-xl divide-x-2 ">
                    <th className="pr-40">team member</th>
                    <th>rank</th>
                    <th>max rank</th>
                </tr>
            </thead>
            <tbody className="w-full  ">
                <TbodyContent bg="red" />
                <TbodyContent bg="blue" />
                <TbodyContent bg="orange" />
                <TbodyContent bg="green" />
            </tbody>
        </table>
    );
};

const TbodyContent = ({ bg }: { bg: string }) => {
    return (
        <tr className="even:bg-slate-200">
            <td className="flex justify-start items-center pr-40 pl-5">
                <div className={`bg-${bg}-400 w-5 h-5 rounded-full`} />
                <div className="flex flex-col justify-start items-center space-x-2">
                    <div>name</div>
                    <div>email</div>
                </div>
            </td>
            <td>1st</td>
            <td>41st</td>
        </tr>
    );
};
