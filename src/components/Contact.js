const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="Form">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" value="name"></input>
            <label for="Email">Email</label>
            <input type="Email" name="Email" value="Email" required></input>
            <label for="message">Message</label>
            <textarea name="message" rows="10" cols="30"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
