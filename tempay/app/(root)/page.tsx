import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Lucas",
    lastName: "Corrêa",
    email: "lucas@gmail.com",
  };

  return (
    <section className="Home font-inter">
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
        RECENTE TRANSAÇÃO
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  );
};

export default Home;
