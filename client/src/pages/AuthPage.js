import React from 'react'

export const AuthPage = () =>{
    
    
    
    const [form, setForm] = useState(
        {email: '', password:''}
    )
    

    const changeHandler = event => {
        setForm({})
    }
    
    
    
    
    return(
       <div className="row" >
            <div className="col s6 offset-s3">
                <h1 className="bbb">AuthPage</h1>
                <div className="card orange darken-3">
                        <div className="card-content white-text">
                           <span className="card-title black-text" style={{fontWeight: 400}}>Авторизація</span>
                           
                           <div className="input-field">
                                <input
                                    
                                    id="email"
                                    type="text"
                                    name="email"
                                />
                                <label className="white-text"  htmlFor="email">Введіть тут Email</label>
                            </div>

                            <div className="input-field">
                                <input

                                    className="input-yellow"
                                    id="password"
                                    type="password"
                                    name="password"
                                />
                                <label htmlFor="password" className="white-text">Введіть тут Password</label>
                            </div>

                      
                        </div>
                    <div className="card-action">
                       <button className="btn grey lighten-5 black-text" style={{marginRight:10}}>Вхід</button>
                       <button className="btn green darken-1">Реєстрація</button>
                    </div>
                </div>
               
               
            </div>
        </div> 
       
    )
}