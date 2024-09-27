import "./styles/app.scss"
import "./styles/sectionHome.scss"
import "./styles/sectionAboutMe.scss"
import "./styles/sectionWorks.scss"
import "./styles/sectionContact.scss"
import imgAvatarHome from "./assets/images/Group 2346.png"
import imgFundoAvatarHome from "./assets/images/doodles mixed round.png"
import imgChaoAvatarHome from "./assets/images/Ellipse 3.png"
import imgAvatarAboutMe from "./assets/images/Group 62.png"
import imgFundoAvatarAbouteMe from "./assets/images/doodle items.png"
import imgSongAboutMe from "./assets/images/Vector 141.png"
import imgLampadaAbout from "./assets/images/lightbulb.png"
import imgSetaAbout from "./assets/images/Vector 186.png"
import imgSetaHome from "./assets/images/Vector 187.png"
import imgFeed from "./assets/images/feed.png"
import imgCalculadora from "./assets/images/calculadora.png"
import imgTodoList from "./assets/images/todolis.png"
import imgAvatarContact from "./assets/images/Group 2372.png"
import imgIconSendMessage from "./assets/images/Vector.png"
import imgEmail from "./assets/images/mail.png"
import { Header } from './components/Header'
import { Card } from "./components/Card"
import { useState } from "react"
import emailJs from '@emailjs/browser'
import { LinkedinLogo, WhatsappLogo, GithubLogo } from "@phosphor-icons/react";




function App() {

      {/* FUNCIONALIDADE DO FORMULÁRIO */}

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      function sendEmail(e) {
            e.preventDefault();

            if(name === '' || email === '' || message === '') {
                  alert('Por favor, Preencha todos os campos!')
                  return;
            }

            const templateParams = {
                  from_name: name,
                  message: message,
                  email: email
            }

            emailJs.send('service_jwe2t9b', 'template_f6yw60o', templateParams,'57EJY33737UpjisjN')
            .then((response) => {
                  console.log('EMAIL ENVIADO', response.status, response.text)
                  setName('')
                  setEmail('')
                  setMessage('')
            }, (err) => {
                  console.log('ERRO: ', err)
            })
      }


  return (
    <>
        <Header />

        {/* HOME PAGE */}
        <section className="section-home-page" id="home" >
                <div className="content-home">
                  <img src={imgSetaHome} alt="Imagem Seta" id="imagem-seta-home" />
                      <h1>Hi, I'm Pablo Anjos.</h1>
                      <h2>Web Developer</h2>
                      <a href="https://docs.google.com/document/d/1NRBhlAX_EmYVdF8k2nCUB_gtg1INC-wLf2sa338afkc/edit#heading=h.eil6g8r00f3m" target="_blank" id="link-button">Download CV</a>
                </div>

                <div className="container-icons">
                      <a href="https://www.linkedin.com/in/pablo-anjos-363308269/" target="_blank"><LinkedinLogo className="icons" /></a>
                      <a href="https://github.com/PabloAnjos?tab=repositories" target="_blank"><GithubLogo className="icons" /></a>
                      <a href="https://wa.me/5531996031962" target="_blank"><WhatsappLogo className="icons" /></a>
                </div>

                <img src={imgFundoAvatarHome} alt="Imagem Avatar" />
                <img src={imgAvatarHome} alt="Imagem Avatar" />
                <img src={imgChaoAvatarHome} alt="Imagem Avatar" id="image-chao" />
        </section>


        {/* ABOUT ME */}
        <section className="section-about-me" id="about-me" >
                <div id="paragraph-about-me">
                      <img src={imgSongAboutMe} alt="Imagem Song" />
                      <img src={imgLampadaAbout} alt="Imagem Lampada" id="imagem-lampada-about" />      

                      <h1>About <span>Me</span></h1>
                      <p>Olá me chamo Pablo Anjos, sou um desenvolvedor Front-End apaixonado por criar interfaces. Desenvolvendo minhas habilidades desde 2023,
                         percebi que estava cada vez mais apaixonado e entusiasmado pelo desenvolvimento Web.
                         Atualmente cursando Ciência da Computação na Uni-BH (Centro Universitário de Belo Horizonte),
                         Tenho o objetivo de crescer como profissional e estou sempre buscando aprender sobre novas tecnologias.
                         Estou sempre em busca de novos conceitos para expandir o meu conhecimento em prol do Desenvolvimento Web.
                      </p>

                      <img src={imgSetaAbout} alt="Imagem Seta" id="imagem-seta-about" />
                </div>

                <div id="image-aboute-me">
                      <img src={imgFundoAvatarAbouteMe} alt="Imagem Avatar" id="fundo-imagem-avatar"/>
                      <img src={imgAvatarAboutMe} alt="Imagem Avatar" />
                      <img src={imgChaoAvatarHome} alt="Imagem Avatar" id="chao-avatar-about" />
                </div>
        </section>


        {/* WORKS */}
        <section className="section-works" id="works" >
                <h1>My recent <span>works</span></h1>

                <div className="container-cards-works">
                      <Card src={imgFeed} 
                      content={"Este é um pequeno projeto agradável para interações do usuário. Este projeto permite os usuários fazer comentários, excluir comentários e curtir posts."} 
                      hrefDeploy={"https://pabloanjos.github.io/Feed/"}
                      hrefCode={"https://github.com/PabloAnjos/Feed"}
                      />

                      <Card src={imgCalculadora} 
                      content={"Uma calculadora agradável desenvolvida pra você fazer seus cálculos e tirar suas dúvidas do dia a dia. Seja a complexidade do cálculo."}
                      hrefDeploy={"https://calculadora-murex-eight.vercel.app/"}
                      hrefCode={"https://github.com/PabloAnjos/calculadora"}
                      />

                      <Card src={imgTodoList} 
                      content={"My todo é uma aplicação web que permite aos usuários organizar suas tarefas diárias, colocando elas em uma lista e removendo ao estarem concluídas."}
                      hrefDeploy={"https://pabloanjos.github.io/my-todo/"}
                      hrefCode={"https://github.com/PabloAnjos/my-todo"}
                      />
                </div>
        </section>


        {/* CONTACT */}
        <section className="section-contact" id="contact" >
                  <div className="container-images-contact">
                        <h1>Contact <span>me</span></h1>
                        <img src={imgAvatarContact} alt="Imagem Avatar" />
                        <img src={imgSetaAbout} alt="Imagem Seta" id="imagem-seta-contact" />
                        <img src={imgChaoAvatarHome} alt="Imagem Avatar" id="imagem-chao-contact" />
                  </div>

                  <div className="container-form">
                        
                        <form onSubmit={sendEmail}>
                              <label>Your Name:</label>
                              <input 
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              type="text" 
                              placeholder="Name" 
                              className="input-form" 
                              />

                              <label>Email:</label>
                              <input 
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              type="text" 
                              placeholder="Email" 
                              className="input-form" />

                              <textarea 
                              onChange={(e) => setMessage(e.target.value)} 
                              placeholder="Digite sua mensagem..."
                              value={message}
                              />

                              <input className="button" type="submit" value="Enviar" />
                              <img src={imgIconSendMessage} alt="Imagem Enviar" id="imagem-enviar" />
                        </form>

                        <img src={imgEmail} alt="Imagem envelope" id="imagem-envelope" />
                  </div>
        </section>
    </>
  )
}

export default App