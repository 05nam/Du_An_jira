import './App.css';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../src/css/style.css'
import FormTemplate from './templates/FormTemplate';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProjectManagerTemplate from './templates/ProjectManagerTemplate';
import ProjectManager from './pages/projectManager/ProjectManager';
import User from './pages/users/User';
import CreateTask from './pages/components/CreateTask';
import ProjectDetail from './pages/projectDetail/ProjectDetail';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxst0yxug7VXfEhWfI4IKx-lqINt0RsxM",
  authDomain: "jara-e80af.firebaseapp.com",
  projectId: "jara-e80af",
  storageBucket: "jara-e80af.appspot.com",
  messagingSenderId: "904586310055",
  appId: "1:904586310055:web:a3df5ebbbb5bec21c70682",
  measurementId: "G-QTX8SJY82X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <CreateTask />
      <Switch>
        <FormTemplate exact path='/login' component={Login} />
        <FormTemplate exact path='/register' component={Register} />
        <ProjectManagerTemplate exact path='/home' component={ProjectManager} />
        <ProjectManagerTemplate exact path='/user' component={User} />
        <ProjectManagerTemplate exact path='/' component={ProjectManager} />
        <ProjectManagerTemplate exact path='/projectdetail/:id' component={ProjectDetail} />
      </Switch>
    </Router>
  );
}

export default App;


