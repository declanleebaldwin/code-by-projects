import React, { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

const ContactForm = () => {
  const [order, setOrder] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        order,
      }),
    })
      .then(() => alert('succes'))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => setOrder(e.target.value)

  return (
    <div>
      <form
        style={{ color: 'white' }}
        data-netlify="true"
        name="pizzaOrder"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="pizzaOrder" />
        <label>
          What order did the pizza give to the pineapple?
          <input
            style={{ color: 'black' }}
            name="order" type="text" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;

