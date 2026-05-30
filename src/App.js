import React from 'react';
import { Route, Routes } from 'react-router-dom'

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
      <Routes>
        <Route exact path="/" element={<HomepageLayout />} />
        <Route path="/lessons" element={<LessonList />} />
        <Route path="/welcome" element={<AfterSignUpForm />} />
        <Route path="/userwrong" element={<UserWrong />} />
      </Routes>
    </div>
  );
}

export default App;
