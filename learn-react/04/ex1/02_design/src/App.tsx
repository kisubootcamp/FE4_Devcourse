import ProfileCard from './components/ProfileCard';

export default function App() {
    return (
        <>
            <ProfileCard
                bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                uname="Sally Ramos"
                instaId="@sallytheramos"
                onClick={(name: string) => alert(name)}
            />

            <ProfileCard
                bg="https://cdn.pixabay.com/photo/2022/02/19/07/17/tree-blossoms-7022041_1280.jpg"
                userImg="https://cdn.pixabay.com/photo/2016/11/29/11/24/woman-1869158_1280.jpg"
                uname="Sally 22"
                instaId="@sally22"
                onClick={() => alert('Sally 22')}
            />
        </>
    );
}
