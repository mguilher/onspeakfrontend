import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';
import LessonList from './Lessons/LessonList';
import QuizTitle from './Quiz/QuizTitle';
import QuizResult from './Quiz/QuizResult';
import HomepageLayout from './HomepageLayout';
import CreditCardForm from './Payment/CreditCardForm';
import AfterSignUpForm from './Login/AfterSignUpForm';
import UserWrong from './Login/UserWrong';

function App() {
  return (
    <div>

      

      <Route exact path="/" render={()=>(
          <HomepageLayout />
        )
        } /> 


      <Route path="/lessons" render={()=>(
            <LessonList/>
          )} 
        />   

      <Route path="/welcome" render={()=>(
            <AfterSignUpForm/>
          )} 
        />  

        <Route path="/userwrong" render={()=>(
            <UserWrong/>
          )} 
        />            

          

    </div>
  );
}

export default App;
