import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Lucas" };

  return (
    <section className="Home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bem vindo"
            user={loggedIn?.firstName || "Convidado"}
            subtext="Acesse & administre suas financias."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={23213.21}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
