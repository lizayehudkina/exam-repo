import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import heroPhoto from '../../img/hero-photo.PNG';
import DogsList from "../DogsList";
import { useState } from "react";

// const dogs = [
//     {
//         id: 1,
//         name: 'Brauni',
//         gender: 'male',
//         age: '8 month',
//         puppy: true,
//         weight_will_be: '25 kg',
//         breed: 'large',
//         img: 'img/brauni-1.PNG',
//     },
//     {
//         id: 2,
//         name: 'Malysh',
//         gender: 'male',
//         age: '3 month',
//         puppy: true,
//         weight_will_be: '10 kg',
//         breed: 'medium',
//         img: 'img/malysh-1.PNG',
//     },
//     {
//         id: 3,
//         name: 'Miia',
//         gender: 'female',
//         age: '3 month',
//         puppy: true,
//         weight_will_be: '15 kg',
//         breed: 'large',
//         img: 'img/mia-1.PNG',
//     },
//     {
//         id: 4,
//         name: 'Mimi',
//         gender: 'female',
//         age: '3 month',
//         puppy: true,
//         weight_will_be: '15 kg',
//         breed: 'large',
//         img: 'img/mimi-1.PNG',
//     },
//     {
//         id: 5,
//         name: 'Pusha',
//         gender: 'female',
//         age: '2 years',
//         puppy: false,
//         weight_will_be: '15 kg',
//         breed: 'large',
//         img: 'img/pusha-1.PNG',
//     },
//     {
//         id: 6,
//         name: 'Knopa',
//         gender: 'female',
//         age: '1,5 years',
//         puppy: false,
//         weight_will_be: '15 kg',
//         breed: 'large',
//         img: 'img/knopa-1.PNG',
//     },
//     {
//         id: 7,
//         name: 'Molli',
//         gender: 'female',
//         age: '4 month',
//         puppy: true,
//         weight_will_be: '15 kg',
//         breed: 'large',
//         img: 'img/molli-1.PNG',
//     },
//     {
//         id: 8,
//         name: 'Slyvka',
//         gender: 'female',
//         age: '3 years',
//         puppy: false,
//         weight_will_be: '7 kg',
//         breed: 'medium',
//         img: 'img/slyvka-1.PNG',
//     },
//     {
//         id: 9,
//         name: 'Zaichyk',
//         gender: 'male',
//         age: '1,5 years',
//         puppy: false,
//         weight_will_be: '30 kg',
//         breed: 'large',
//         img: 'img/zaichyk-1.PNG',
//     },
// ]

const Main = () => {
    
    const [data, setData]=useState (DogsList);

    const filterResultGender=(genderDogs)=>{
    const resultGender=DogsList.filter((genDogs)=>{
        return genDogs.gender===genderDogs;
            });
        setData(resultGender); 
    }
    const filterAgeYoung=()=>{
    const resultAge=DogsList.filter((aDigit)=>{
        return aDigit.ageDigit<1;
            });
        setData(resultAge); 
    }

    const filterAgeMiddle=()=>{
    const resultAge=DogsList.filter((aDigit)=>{
        return aDigit.ageDigit>=1 && aDigit.ageDigit<3;
            });
        setData(resultAge); 
    }

    const filterAgeGrown=()=>{
    const resultAge=DogsList.filter((aDigit)=>{
        return aDigit.ageDigit>=3;
            });
        setData(resultAge); 
    }

    const filterResultBreede=(breedeDogs)=>{
    const resultBreede=DogsList.filter((brDogs)=>{
        return brDogs.breed===breedeDogs;
            });
        setData(resultBreede); 
    }

    const filterResultHair=(DogsHair)=>{
    const resultHair=DogsList.filter((DogsH)=>{
        return DogsH.typeOfHair===DogsHair;
            });
        setData(resultHair); 
}

    return (
        <>
        <Header/>
        <main className="main-container">

            <div className="hero-section">

                <div className="text-section-hero"> 
                    <h1><span className="color-yellow">Find</span> your new <span className="color-yellow">friends</span></h1>
                    <div className="text-holder">
                        <p>Make your life more happy with us to have 
                            a little new friends</p>
                    </div>
                    <button className="btn">Search Friend</button>
                </div>

                <div className="img-section-hero">
                    <div className="img-holder">
                        <img src={heroPhoto} alt="logo"/>
                    </div>
                </div>
            </div>
                
            <h2 className="color-yellow">Search Friend</h2>
                
            <div className="main-section">

                <aside className="sidebar-section">
                    <h3>Filter</h3>
                    
                    <li class="filter-list">Gender:
                        <input onClick={()=>filterResultGender('male')} id="male" type="radio" name="radio"/>
                        <label for="male"><span class="spanradio"></span>Male</label>
                        <input onClick={()=>filterResultGender('female')} id="female" type="radio" name="radio"/>
                        <label for="female"><span class="spanradio"></span>Female</label>
                    </li>

                    <li class="filter-list">Age (years):
                        <input onClick={()=>filterAgeYoung()} id="young" type="radio" name="radio"/>
                        <label for="young"><span class="spanradio"></span>Less than 1</label>
                        <input onClick={()=>filterAgeMiddle()}id="middle" type="radio" name="radio"/>
                        <label for="middle"><span class="spanradio"></span>1-3</label>
                        <input onClick={()=>filterAgeGrown()} id="grown" type="radio" name="radio"/>
                        <label for="grown"><span class="spanradio"></span>More than 3</label>
                    </li> 

                    <li class="filter-list">Breed:
                        <input onClick={()=>filterResultBreede('small')} id="small" type="radio" name="radio"/>
                        <label for="small"><span class="spanradio"></span>Small</label>
                        <input onClick={()=>filterResultBreede('medium')} id="medium" type="radio" name="radio"/>
                        <label for="medium"><span class="spanradio"></span>Medium</label>
                        <input onClick={()=>filterResultBreede('large')} id="large" type="radio" name="radio"/>
                        <label for="large"><span class="spanradio"></span>Large</label>
                    </li>

                    <li class="filter-list">Type of hair:
                        <input onClick={()=>filterResultHair('smooth')} id="smooth" type="radio" name="radio"/>
                        <label for="smooth"><span class="spanradio"></span>Smooth-haired</label>
                        <input onClick={()=>filterResultHair('shaggy')} id="shaggy" type="radio" name="radio"/>
                        <label for="shaggy"><span class="spanradio"></span>Shaggy</label>
                    </li>

                    <button className="btn" onClick={()=>setData(DogsList)}>See all</button>  
                </aside>
                
                <div className="all-dogs-section">
                    <ul className="list-all-dogs">
                        {data.map((values)=>{
                            const{id, name, img, gender, ageDigit, ageText, weight_will_be}=values;
                            return(
                                <>
                                <li className="card-each-dog" key = {id}>
                                    <a className="name-dogs" href="#">{name}</a>
                                    <img className="img-dogs" src={img} alt={name}/>
                                    <li className="gender-dogs"><span className="threats">Gender:</span> {gender}</li>
                                    <li className="age-dogs"><span className="threats">Age:</span> {ageDigit} {ageText}</li>
                                    <li className="weight-dogs"><span className="threats">Weight will be (around):</span> {weight_will_be}</li>
                                </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Main;