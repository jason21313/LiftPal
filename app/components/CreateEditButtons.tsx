import TransitionButton from './TransitionButton';

export default function CreateEditButtons(){
    return(
        <div>
            <TransitionButton buttonText="Click here to create your workout plan" pageText="create-plan" color="var(--lime)" />
            <TransitionButton buttonText="Click here to edit your workout plan" pageText="edit-plan" color="var(--lime)" />
        </div>
    )
}
