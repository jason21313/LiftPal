'use client';

import TransitionButton from "../../components/TransitionButton";
import { useState, useRef } from "react";

type Item = {
    id: string;
    type: string;
    placeholder: string;
}

export default function Mon_Create(){
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

    return (
        <>
            <div>
                <h2>Create Your Workout for Monday</h2>
                <input type="text" placeholder="Enter Workout Name Here:" />
                <TransitionButton buttonText="Click here to return to the home page" pageText="create-plan" color="var(--lime)" />
                <button onClick={addExercise}>Add Exercise</button>
                <label style={{ display: 'block', marginTop: '10px' }}></label>
            </div>
            <div>
                {items.map((item) => {
                    if (item.type === 'text' || item.type === 'number') {
                        return (
                            <input
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
            </div>
            <button>Submit</button>
        </>
    )
}