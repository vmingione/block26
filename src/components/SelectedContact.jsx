import { useEffect } from 'react';
import { useState } from "react";

export default function SelectedContact({
    selectedContactId,
    setSelectedContactId,
}) {
    const [contact, setContact] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(
                    `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
                );
                const contact = await response.json();
                setContact(contact);
            } catch (error) {
                setError(error);
            }
        } 
        fetchSelectedContact();
    }, []);

    // Copied from solution to test my code, still no success.
    return (
        <div>
            {contact && (
                <div>
                    <p>
                        <b>Name:</b> {contact.name}
                    </p>
                    <p>
                        <b>Email:</b> {contact.email}
                    </p>
                    <p>
                        <b>Phone:</b> {contact.phone}
                    </p>
                    <div>
                        <b>Address:</b>
                        <p>
                            <b>Street:</b>
                            {contact.address.street}
                            <br />
                            <b>City and Zip Code:</b>
                            {contact.address.city}
                            {contact.address.zipcode}
                        </p>
                    </div>
                    <p>
                        <b>Company:</b> {contact.company.name}
                    </p>
                </div>
            )}
        </div>
    );
}