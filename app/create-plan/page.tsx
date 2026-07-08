import TransitionButton from "../components/TransitionButton";
import Days from "../components/Days";
import {prisma} from "../lib/prisma";
import { cookies } from "next/headers";

export async function createPlan(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;
    // prisma.workoutPlan.create({
    //     data: {
    //         name: data['planName'] as string,
    //         userId: userId+""
    //     }
    // });
    console.log("plan created with name: ", data['planName'], " for userId: ", userId);
}

export default function CreatePage() {
    async function handleSubmit(formData: FormData) {
        'use server';
        await createPlan(formData);
    }


    return (
        <div>
            <h1>Create Plan</h1>
            <TransitionButton buttonText="Click here to return to the home page" pageText="Home" color="var(--lime)" />
            <form action={handleSubmit}>
                <input name="planName" type="text" placeholder="Enter Plan Name" />
                <button type="submit">Submit</button>
            </form>
            <Days text="Select Which days You want to have as Rest Days." work={1}/>
        </div>
    );
}