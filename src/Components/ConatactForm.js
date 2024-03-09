import React from "react";

export default function ConatactForm() {
  return (
    <div>
      <form
      // onSubmit={(e) => {
      //   validate(e);
      // }}
      >
        <div>
          <input name="firstName" type="text" placeholder="First Name🐯" />
          <input name="lastName" type="text" placeholder="Last Name🐯" />
        </div>
        <div>
          <input name="email" type="email" placeholder="Email Address📬" />
        </div>
        <div>
          <input name="phone" type="text" placeholder="Phone Number📞" />
        </div>
        <div>
          <input name="Subject" type="text" placeholder="Subject🔖" />
        </div>
        <div>
          <textarea name="messsage" placeholder="Message✍️" />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
