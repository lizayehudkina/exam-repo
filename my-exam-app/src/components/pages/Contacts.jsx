import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const Contacts = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [numberDirty, setNumberDirty] = useState(false);

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

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'surname':
                setSurnameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'number':
                setNumberDirty(true);
                break;
            default:;
        }
    }

    return (
        <>
        <Header/>
        <main className="contacts-container">
            <h2 className="color-yellow">Please, fill the form:</h2>
            <form className="form-list">
                <div class="list-item-first-name">
                    <label class for="text">First name:</label><br/>
                    <input 
                        onChange={e => nameHandler(e)} 
                        value={name} 
                        onBlur={e => blurHandler(e)} 
                        name="name" 
                        type="text"
                    />
                    {(nameDirty && nameError) && <div className="error">{nameError}</div>} 
                </div>
                <div class="list-item-last-name">
                    <label for="text">Last name:</label><br/>
                    <input 
                        value={surname} 
                        onChange={e => surnameHandler(e)} 
                        onBlur={e => blurHandler(e)} 
                        name="surname" 
                        type="text"
                    />
                    {(surnameDirty && surnameError) && <div className="error">{surnameError}</div>} 
                </div>
                <div class="list-item-email">
                    <label for="email">E-mail:</label><br/>
                    <input 
                        value={email} 
                        onChange={e => emailHandler(e)} 
                        onBlur={e => blurHandler(e)} 
                        name="email" 
                        type="email"
                    />  
                    {(emailDirty && emailError) && <div className="error">{emailError}</div>}   
                </div>
                <div class="list-item-phone">
                    <label for="tel">Phone number:</label><br/>
                    <input 
                        value={number} 
                        onChange={e => numberHandler(e)} 
                        onBlur={e => blurHandler(e)} 
                        name="number" 
                        type="tel"
                    />
                    {(numberDirty && numberError) && <div className="error">{numberError}</div>} 
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