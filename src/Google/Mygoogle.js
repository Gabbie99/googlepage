import React from 'react'
import './Mygoogle.css';
import googleimages from './googleimages.png'

function Mygoogle() {
  return (
    <div>
        <header className='head'>
            <ul id='first-ul'>
                <li>Gmail</li>
                <li>Images</li>
                <button className='g'>G</button>
            </ul>
        </header>
        <div className='gen-div'>
            <img src={googleimages} alt="google" /><br />
            <input type="search" name="search" id="search" /><br />
            <button className='gs'>Google Search</button>&nbsp; <button className='gs'>I'm Feeling Lucky</button>
            <p>Google offered in: <span className='lang'>Hausa Igbo Edo Yoruba Nigrian Pidgin</span></p>
        </div>
            <footer>
                    <p className='ja'>Nigeria</p> <hr />
                <div className='wrap-div'>
                    <div className='list1'>
                    <ul>
                    <li>About</li>
                    <li>Advertising</li>
                    <li>Business</li>
                    <li>HowSearchworks</li>
                </ul>
                </div>
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="leaf" width={20} height={15} />
                    Carbon Neutral Since 2007
                </div>
                <div className='list2'>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Settings</li>
                    </ul> 
                </div>
                </div>
                <p id='copy'>&copy;Copyright Gabbie A. Online Services 2022 | Developed by <span>Alexander Gabrielle</span></p>
            </footer>
    </div>
  )
}

export default Mygoogle