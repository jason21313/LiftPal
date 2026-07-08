'use client';

import TransitionButton from "../../components/TransitionButton";
import { useState, useRef } from "react";
import {prisma} from "../../lib/prisma";

type Item = {
    id: string;
    type: string;
    placeholder: string;
}

export default function Fri_Create(){
    const [items, setItems] = useState<Item[]>([]);
    const indexRef = useRef(0);

    function addExercise() {
        const currentIndex = indexRef.current;
        const newItems: Item[] = [
            {
                id: `name-${currentIndex}`,
                type: 'text',
                placeholder: 'Enter Exercise Name Here:',
            },{
                id: `sets-${currentIndex}`,
                type: 'number',
                placeholder: 'Enter Number of Sets Here:',
            },{
                id: `reps-${currentIndex}`,
                type: 'text',
                placeholder: 'Enter Number of Reps Here:',
            },{
                id: `weight-${currentIndex}`,
                type: 'number',
                placeholder: 'Enter Weight Here:',
            },{
                id: `break-${currentIndex}`,
                type: 'break',
                placeholder: '',
            }
        ]
        setItems((prev)=>[...prev, ...newItems]);
        indexRef.current += 1;
    }

    async function handleSubmit(formData: FormData) {
        await createExercise(formData);
    }

    async function createExercise(formData: FormData) {
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <>
            <div>
                <h2>Create Your Workout for Friday</h2>
                <input type="text" placeholder="Enter Workout Name Here:" />
                <TransitionButton buttonText="Click here to return to the home page" pageText="create-plan" color="var(--lime)" />
                <button onClick={addExercise}>Add Exercise</button>
                <label style={{ display: 'block', marginTop: '10px' }}></label>
            </div>
            <form action={handleSubmit}>
                {items.map((item) => {
                    if (item.type === 'text' || item.type === 'number') {
                        return (
                            <input
                                name={item.id}
                                key={item.id}
                                type={item.type}
                                placeholder={item.placeholder}
                            />
                        );
                    }
                    if(item.type === 'break'){
                        return (
                            <label key={item.id} style={{ display: 'block', marginTop: '10px' }}></label>
                        );
                    }
                    return null;
                })}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}