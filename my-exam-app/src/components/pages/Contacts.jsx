import Header from "../Header";
import Footer from "../Footer";

const Contacts = () => {
    return (
        <>
        <Header/>
        <main className="contacts-container">
            <h2 className="color-yellow">Please, fill the form:</h2>
            <ul className="form-list">
                <li class="list-item-first-name">
                    <label class for="text">First name:</label><br/>
                    <input class="input-half" type="text"/> 
                </li>
                <li class="list-item-last-name">
                    <label for="text">Last name:</label><br/>
                    <input class="input-half" type="text"/>
                </li>
                <li class="list-item-email">
                    <label for="email">E-mail:</label><br/>
                    <input type="email"/>    
                </li>
                <li class="list-item-phone">
                    <label for="tel">Phone number:</label><br/>
                    <input type="tel"/>
                </li>
                <li class="list-item-textarea">
                    <label for="textarea">Comments:</label><br/>
                    <textarea type="textarea" name="Your text" id="textarea" cols="30" rows="1"></textarea> 
                </li>
            </ul>
            <button class="btn btn-form">
                <label for="">Submit</label>
            </button>


        </main>
        <Footer/>
        </>
    )
}

export default Contacts;