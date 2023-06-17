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
    }
]

export default RoutesConfig;