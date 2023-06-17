import AuthPage from "../pages/AuthPage";
import GuestPage from "../pages/GuestPage";
import HomePage from "../pages/HomePage";

const RoutesConfig = [
    {
        element: <HomePage/>,
        name: 'At-Work – сервис поиска  резюме, вакансий, надежных специалистов, доска объявлений',
        url: '/'
    },
    {
        element: <GuestPage/>,
        name: 'Title new',
        url: '/router'
    },
    {
        element: <AuthPage/>,
        name: 'Авторизация',
        url: '/auth'
    }
    

]

export default RoutesConfig;