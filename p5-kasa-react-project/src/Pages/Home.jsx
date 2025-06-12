import Banner from "../Components/Banner/Banner";
import bannerImage from "../assets/imageBanner.png";
import logements from "../data.json"
import Card from "../Components/Card/Card"
import "./home.scss";

function Home() {
    return (
        <main className="home">
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
             <section className="cards-container">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id}
                        title={logement.title}
                        image={logement.cover}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home