
import './Contact.css'

function Contact(){

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-top">
          <h2 style={{marginBottom: 0, color: 'black'}}>Registered Address</h2>
          <h4 style={{marginTop: 0}}>
            Akarsh Bhavan, Komban House, Ayyappankavu Road, Pavaratty,<br/>Thrissur - 680 508, Kerala, India
          </h4>

          <h2 style={{marginBottom: 0, color: 'black'}}>Contact</h2>
          <h4 style={{marginTop: 0}}>
            +91 62824 62172<br/>
            akarsh@thengakola.com
          </h4>
          <h2 style={{marginBottom: 0, color: 'black'}}>We're Open</h2>
          <h4 style={{marginTop: 0}}>
            Monday to Saturday
          <br/>
            From 10 AM to 7 PM
          </h4>
        </div>
      </div>
    </>
  );
};

export default Contact;
