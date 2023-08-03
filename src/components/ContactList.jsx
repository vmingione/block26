import { useEffect } from 'react';
import { useState } from "react";
import ContactRow from "./ContactRow";

export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    "https://jsonplace-univclone.herokuapp.com/users"
                );
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                setError(error);
            }
        }
        fetchContacts();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                    return (
                        <ContactRow key={contact.id} contact={contact}
                            setSelectedContactId={setSelectedContactId} />
                    );
                })}
            </tbody>
        </table>
    );
}