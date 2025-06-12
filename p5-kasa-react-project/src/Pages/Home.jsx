import Banner from "../Components/Banner/Banner";
import bannerImage from "../assets/imageBanner.png";
import "./home.scss";

function Home() {
    return (
        <main className="home">
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
        </main>
    )
}

export default Home