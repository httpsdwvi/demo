import React from "react";
import '../styles/Home.scss';

const Home = () => {
    return (
        <section className="signUp">
            <div className="signUp__container">
                <h3>Sign up for our newslatter</h3>
                <form className="signUp__form">
                    <label>email address</label>
                        <div className="signUp__email">
                            <input className="signUp__input" placeholder="Digite seu e-mail aqui"/>
                            <button className="signUp__ok"> OK </button>
                        </div>

                        <div className="signUp__error">
                            <p>ಥ_ಥ -- Por favor, digite um email válido </p>
                        </div>


                        <div className="signUp__success">
                            <p>༼ つ ◕_◕ ༽つ -- Email válido</p>
                        </div>
                </form>
            </div>
        </section>
    )
}

export default Home