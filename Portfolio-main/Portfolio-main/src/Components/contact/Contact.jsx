import "./contact.scss"

const Contact = () =>{
    return(
        <div className="contact">
            <div className="textContainer">
                <h1>Let's work together</h1>
                <div className="mail">
                    <h2>Mail</h2>
                    <span>elias_ghabriel@hotmail.com</span>
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <span>Mtayleb, Mount Lebanon</span>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <span>+961 76392539</span>
                </div>
                </div>
                <div className="formContainer">
                    <form>
                    <input text="text" required placeholder="Name"/>
                    <input text="email" required placeholder="Email"/>
                    <textarea rows={8} placeholder="Message"/>
                    <button>Submit</button>
                    </form>


                </div>
            
        </div>
    )
}

export default Contact;