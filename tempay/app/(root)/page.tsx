import HeaderBox from '@/components/HeaderBox'

const Home = () => {
   const loggedIn = {firstName: 'Lucas'};

    return (
      <section className="Home">
       <div className="home-content">
        <header className="home-header">
         <HeaderBox
         type="greeting"
         title="Bem vindo"
         user={loggedIn?.firstName|| 'Convidado'}
         subtext="Acesse & administre suas financias."
         />
        </header>
       </div>
      </section>
    )
}

export default Home
