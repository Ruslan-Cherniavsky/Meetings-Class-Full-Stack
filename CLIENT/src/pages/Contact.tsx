
import { useContext } from "react";
import { UserContext } from "../UserContext";


function Contact() {

    const { value, setValue } = useContext(UserContext)
    return (
        <>
            <h1> Hello, from Contact page!</h1>
            <h5>{value}</h5>
        </>
    );
}

export { Contact };
