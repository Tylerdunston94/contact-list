import { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null); // State to hold the fetched contact

  useEffect(() => {
    // Function to fetch the selected contact
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setContact(data); // Set the fetched contact into state
        console.log("Fetched Contact: ", data); // Log the contact
      } catch (error) {
        console.error("Error fetching contact: ", error);
      }
    };

    if (selectedContactId) {
      fetchContact(); // Call the fetch function only if selectedContactId is available
    }
  }, [selectedContactId]); // Dependencies array includes selectedContactId

  // If no contact is fetched, show a loading message or similar
  if (!contact) {
    return <div>Loading...</div>;
  }

  // Display the contact information (you can customize this)
  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone || "N/A"}</p>
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
}
