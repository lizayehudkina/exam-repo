import Header from "../Header";
import Footer from "../Footer";
import background from '../../img/background.png';
import { useEffect, useState } from "react";

const Contacts = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError || surnameError || emailError || numberError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, surnameError, emailError, numberError])

    
    const nameHandler = (e) => {
        setName(e.target.value)
        const re =/^[a-zA-Z ]{2,30}$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setNameError ('*Please enter correct name (without numbers)')
        } else {
            setNameError("")
        }
    };

    const surnameHandler = (e) => {
        setSurname(e.target.value)
        const re =/^[a-zA-Z ]{2,30}$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setSurnameError ('*Please enter correct surname (without numbers)')
        } else {
            setSurnameError("")
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError ('*Please enter correct email')
        } else {
            setEmailError("")
        }
    };

    const numberHandler = (e) => {
        setNumber(e.target.value)
        const re =/^\d{10}$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setNumberError ('*Please enter correct phonee number')
        } else {
            setNumberError("")
        }
    };

    return (
        <>
            <Header/>
                <main className="contacts-container" style={{ backgroundImage: `url(${background})`, width: '100%', backgroundSize: 'cover'}}>
                    <h2 className="color-yellow">Please, fill the form:</h2>
                    <form className="form-list">
                        <div class="list-item-first-name">
                            <label class for="text">First name:</label><br/>
                            <input 
                                onChange={e => nameHandler(e)} 
                                value={name} 
                                name="name" 
                                type="text"
                            />
                            {(nameError) && <div className="error">{nameError}</div>} 
                        </div>
                        <div class="list-item-last-name">
                            <label for="text">Last name:</label><br/>
                            <input 
                                value={surname} 
                                onChange={e => surnameHandler(e)} 
                                name="surname" 
                                type="text"
                            />
                            {(surnameError) && <div className="error">{surnameError}</div>} 
                        </div>
                        <div class="list-item-email">
                            <label for="email">E-mail:</label><br/>
                            <input 
                                value={email} 
                                onChange={e => emailHandler(e)} 
                                name="email" 
                                type="email"
                            />  
                            {(emailError) && <div className="error">{emailError}</div>}   
                        </div>
                        <div class="list-item-phone">
                            <label for="tel">Phone number:</label><br/>
                            <input 
                                value={number} 
                                onChange={e => numberHandler(e)} 
                                name="number" 
                                type="tel"
                            />
                            {(numberError) && <div className="error">{numberError}</div>} 
                        </div>
                        <div class="list-item-textarea">
                            <label for="textarea">Comments:</label><br/>
                            <textarea 
                                type="textarea" 
                                name="Your text" 
                                id="textarea" 
                                cols="30" 
                                rows="1">
                            </textarea> 
                        </div>

                        <button 
                            disabled={!formValid} 
                            type="submit" 
                            class="btn btn-form">
                                Submit
                        </button>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Contacts;