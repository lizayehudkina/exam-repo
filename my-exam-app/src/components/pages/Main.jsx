import Header from "../Header";
import Footer from "../Footer";
import heroPhoto from '../../img/hero-photo.PNG';
import Brauni from '../../img/brauni-1.PNG';

const dogs = [
    {
        id: 1,
        name: 'Brauni',
        gender: 'male',
        age: '8 month',
        puppy: true,
        weight_will_be: '25 kg',
        breed: 'large',
        // img: {Brauni},
        // img: url('../../img/brauni-1.PNG'),
      },
      {
        id: 2,
        name: 'Malysh',
        gender: 'male',
        age: '3 month',
        puppy: true,
        weight_will_be: '10 kg',
        breed: 'medium',
        img: '',
      },
      {
        id: 3,
        name: 'Miia',
        gender: 'female',
        age: '3 month',
        puppy: true,
        weight_will_be: '15 kg',
        breed: 'large',
        img: '',
      },
]


const Main = () => {
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
                        <input id="male" type="radio" name="radio"/>
                        <label for="male"><span class="spanradio"></span>Male</label>
                        <input id="female" type="radio" name="radio"/>
                        <label for="female"><span class="spanradio"></span>Female</label>
                    </li>

                    <li class="filter-list">Puppy/Adult:
                        <input id="puppy" type="radio" name="radio"/>
                        <label for="puppy"><span class="spanradio"></span>Puppy</label>
                        <input id="adult" type="radio" name="radio"/>
                        <label for="adult"><span class="spanradio"></span>Adult</label>
                    </li>

                    <li class="filter-list">Age (years):
                        <input id="young" type="radio" name="radio"/>
                        <label for="young"><span class="spanradio"></span>0-1</label>
                        <input id="middle" type="radio" name="radio"/>
                        <label for="middle"><span class="spanradio"></span>1-3</label>
                        <input id="grown" type="radio" name="radio"/>
                        <label for="grown"><span class="spanradio"></span>3-5</label>
                    </li>

                    <li class="filter-list">Breed:
                        <input id="small" type="radio" name="radio"/>
                        <label for="small"><span class="spanradio"></span>Small</label>
                        <input id="medium" type="radio" name="radio"/>
                        <label for="medium"><span class="spanradio"></span>Medium</label>
                        <input id="large" type="radio" name="radio"/>
                        <label for="large"><span class="spanradio"></span>Large</label>
                    </li>  
                </aside>
                
                <div className="all-dogs-section">
                    <ul className="list-all-dogs">
                        {
                        dogs.map(dog => (
                        <li className="card-each-dog" key = {dog.id}>
                            <a className="name-dogs" href="#">{dog.name}</a>
                            <img className="img-dogs" src={Brauni} alt="dog`s photo"/>
                            <li className="gender-dogs">{dog.gender}</li>
                            <li className="age-dogs">{dog.age}</li>
                        </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Main;