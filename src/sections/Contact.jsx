import React, {useState} from 'react';

function Contact() {
    const initialState = {
        name: "",
        message: "",
        email: "",
    };

    const [formdetails, setformdetails] = useState(initialState);

    const onValueChange = (fieldName, value) => {
        const updatedformdetails = { ...formdetails,
            [fieldName]: value,
        };
        setformdetails(updatedformdetails);

    };

    const onHandleSubmit = (e) => {
        e.preventDefault(); //prevents the reload of teh whole page after the submit button get clicked
        console.log(formdetails);
        setformdetails(initialState);
    };

    return (
        <section>
            <h1 className="text-left text-4xl font-bold text my-6">Contact Me</h1>
            <div className="bg-white text-left font-mono text-secondary-foreground rounded-xl p-8">
                <p>
                    Interested in working together? Contact me at {""}
                    <a href="mailto:">test@gmail.com</a> 
                </p>
                <form onSubmit={onHandleSubmit} className="mt-3 flex flex-col gap-6">
                    <input type="text"
                    placeholder="your name"
                    className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                    value={formdetails.name}
                    onChange={(e) => onValueChange("name", e.target.value)}
                    />
                    <input type="email"
                    placeholder="your email"
                    className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                    value={formdetails.email}
                    onChange={(e) => onValueChange("email", e.target.value)}
                    />
                    <textarea placeholder="your message"
                    rows="4"
                    className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
                    value={formdetails.message}
                    onChange={(e) => onValueChange("message", e.target.value)}/>
                    <button type ="submit" className="bg-primary text-white">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;