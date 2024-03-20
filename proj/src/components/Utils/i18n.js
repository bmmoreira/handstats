import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      close: "Close",
      english: "English",
      french: "French",
      portuguese: "Portuguese",
      spanish: "Spanish",
      type: "Type",
      code: "Code",
      yes: "Yes",
      no: "No",
      name: "Name",
      Jan: "Jan",
      Feb: "Feb",
      Mar: "Mar",
      Apr: "Apr",
      May: "May",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Aug",
      Sep: "Sep",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Dec",
      year: "Year",
      img: "en",
      details: "Details",
      about_app: "About this App",
      instructions: "Instructions",
      app_libraries: "Open source Libraries in this App",
      option_language: "Language",
      option_update: "Update",
      application_update: "Application Update",
      profile: "Profile",
      user_details: "User Details",
      app_settings: "App Settings",
      home: "Home",
      about: "About",
      logout: "Logout",
      timeline: "Timeline",
      download: "Download",
      select: "Select",
      filters: "Filters",
      results: "Results",
      help: "Help",
      settings: "Settings",
      download_data: "Download Data",
      about_json: "About JSON Format",
      language: "Language",
      where: "where",
      when: "when",
      how: "how",
      copyrights: "All rights reserved",
      submit: "Submit",
      indevelopment: "This application is under development",
      uab_text:
        "Dissertation project for MSc in Informatics Engineering and Web Technology UAB/UTAD",
      search_for: "Search for stations",
      search: "search...",
      mapaccess: "Acesse o mapa clicando aqui",
      click_download: "Click on the buttons to download data",
      signin: "SIGN IN",
      signup: "Sign up for MapHidro",
      username: "Username",
      email: "Email",
      password: "Password",
      register_access: "Register to access",
      home_text_01:
        "The definitive mobile app designed to revolutionize the way you track and analyze handball statistics during real-time gameplay.",
      home_text_02:
        "Whether you're a seasoned coach, a passionate player, or an enthusiastic fan, HandballIsFun is your go-to tool for gaining deep insights into every aspect of the game.",
      about_p_01:
        "This application is one the final projects of the CESAE DIGITAL FrontEnd Developer Course 2023/2024 taking place in Lisbon within the scope of PRO_MOV by Reskilling 4 Employment.",
      about_p_02:
        "Team members in alphabetical order: Alexandre Novas, Bruno Moreira, Carina Coelho, João Souza, Nuno Soares. Client Tutor: João Câncio. Project Supervisors: Helena Passos, José Alfaiate and Bruno Santos",
      create_username: "Create your username",
      create_password: "Create a password",
      email_placeholder: "you@example.com",
      user_alreadyregistered: "That username is already taken",
      valid_email: "You must provide a valid email",
      password_min: "Password must be at least 5",
      please_register: "Please register to access the map functionality.",
      visit_homepage: "You can visit the this link to sign up: ",
      homepage: "HomePage",
    },
  },
  pt: {
    translation: {
      close: "Fechar",
      english: "Inglês",
      french: "Francês",
      portuguese: "Português",
      spanish: "Espanhol",
      yes: "Sim",
      no: "Não",
      name: "Nome",
      Jan: "Jan",
      Feb: "Fev",
      Mar: "Mar",
      Apr: "Abr",
      May: "Mai",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Ago",
      Sep: "Set",
      Oct: "Out",
      Nov: "Nov",
      Dec: "Dez",
      year: "Ano",
      img: "pt",
      details: "Detalhes",
      about_app: "Sobre este App",
      instructions: "Instruções",
      app_libraries: "Bibliotecas de código aberto neste aplicativo",
      option_language: "Idioma",
      option_update: "Atualizar",
      application_update: "Atualizar aplicativo",
      profile: "Perfil",
      user_profile: "Perfil de Utilizador",
      user_details: "Detalhes de Usuário",
      app_settings: "App Configurações",
      home: "Home",
      about: "Sobre",
      logout: "Sair",
      timeline: "Linha de Tempo",
      download: "Descarregar",
      select: "Selecionar",
      help: "Ajuda",
      settings: "Configurações",
      usage_instructions: "Instruções de uso",
      download_data: "Descarregar Dados",
      about_json: "Sobre o Formato JSON",
      language: "Idioma",
      where: "onde",
      when: "quando",
      how: "como",
      copyrights: "Todos os direitos reservados",
      submit: "Enviar",
      indevelopment: "Este aplicativo está em desenvolvimento",
      click_download: "Clique nos botões para descarregar",
      signin: "Entrar",
      signup: "Registrar-se",
      username: "Nome de Usuário",
      email: "Email",
      password: "Senha",
      register_access: "Registre-se para acessar",
      home_text_01:
        "O aplicativo móvel definitivo projetado para revolucionar a maneira como você monitora e analisa estatísticas de handebol durante jogos em tempo real.",
      home_text_02:
        "Quer você seja um treinador experiente, um jogador apaixonado ou um torcedor entusiasmado, Handball.IsFun é a ferramenta ideal para obter insights profundos sobre todos os aspectos do jogo.",
      about_p_01:
        "Esta aplicação é um dos projetos finais do Curso CESAE DIGITAL FrontEnd Developer 2023/2024 que decorre em Lisboa no âmbito do PRO_MOV by Reskilling 4 Employment.",
      about_p_02:
        "Membros da equipa por ordem alfabética: Alexandre Novas, Bruno Moreira, Carina Coelho, João Souza, Nuno Soares. Cliente Tutor: João Câncio. Supervisores de Projeto: Helena Passos, José Alfaiate e Bruno Santos.",
      create_username: "Crie seu nome de usuário",
      create_password: "Crie sua senha",
      email_placeholder: "voce@exemplo.com",
      user_alreadyregistered: "Esse nome de usuário já está em uso",
      valid_email: "Você deve inserir um e-mail valido",
      password_min: "A senha deve ser pelo menos 5",
      please_register:
        "Por favor registre-se para acessar a funcionalidade do mapa.",
      visit_homepage: "Você pode visitar este link para registrar-se: ",
      homepage: "Página inicial",
    },
  },
  fr: {
    translation: {
      close: "Fermer",
      english: "Anglais",
      french: "Français",
      portuguese: "Portugais",
      spanish: "Espagnol",
      type: "Taper",
      yes: "Oui",
      no: "Non",
      name: "Nom",
      Jan: "Janv",
      Feb: "Févr",
      Mar: "Mars",
      Apr: "Avr",
      May: "Mai",
      Jun: "Juin",
      Jul: "Juil",
      Aug: "Août",
      Sep: "Sept",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Déc",
      year: "An",
      img: "fr",
      details: "Détails",
      about_app: "à propos de cette App",
      instructions: "Instructions",
      app_libraries: "Bibliothèques open source dans cette application",
      option_language: "Language",
      option_update: "Update",
      application_update: "Application Update",
      profile: "Profile",
      user_details: "User Details",
      app_settings: "App Settings",
      home: "Home",
      about: "About",
      logout: "Logout",
      timeline: "Timeline",
      download: "Download",
      select: "Select",
      filters: "Filters",
      results: "Results",
      help: "Help",
      settings: "Settings",
      usage_instructions: "Usage Instructions",
      download_data: "Download Data",
      data_patern: "Data Patern",
      about_json: "About JSON Format",
      language: "Language",
      where: "where",
      when: "when",
      how: "how",
      copyrights: "All rights reserved",
      submit: "Submit",
      indevelopment: "This application is under development",
      click_download: "Click on the buttons to download data",
      signin: "SE CONNECTER",
      signup: "Inscrivez-vous à MapHidro",
      username: "Nom d'utilisateur",
      email: "Email",
      password: "Mot de passe",
      register_access: "Inscrivez-vous pour accéder",
      home_text_01:
        "L'application mobile définitive conçue pour révolutionner la façon dont vous suivez et analysez les statistiques de handball pendant le jeu en temps réel.",
      home_text_02:
        "Que vous soyez un entraîneur chevronné, un joueur passionné ou un fan enthousiaste, Handball.IsFun est votre outil incontournable pour obtenir des informations approfondies sur tous les aspects du jeu.",
      about_p_01:
        "Cette application est l'un des projets finaux du cours CESAE DIGITAL FrontEnd Developer 2023/2024 qui se déroule à Lisbonne dans le cadre de PRO_MOV by Reskilling 4 Employment.",
      about_p_02:
        "Membres de l'équipe par ordre alphabétique : Alexandre Novas, Bruno Moreira, Carina Coelho, João Souza, Nuno Soares. Tuteur client : João Câncio. Superviseurs de projet : Helena Passos, José Alfaiate et Bruno Santos.",

      create_username: "Créez votre nom d'utilisateur",
      create_password: "Créer un mot de passe",
      email_placeholder: "vous@exemple.com",
      user_alreadyregistered: "Ce nom d'utilisateur est déjà pris",
      valid_email: "vous devez fournir une adresse email valide",
      password_min: "Le mot de passe doit être au moins 5",
      please_register: "Please register to access the map functionality.",
      visit_homepage: "You can visit the this link to sign up: ",
      homepage: "HomePage",
    },
  },
  es: {
    translation: {
      close: "Cerrar",
      english: "Inglés",
      french: "Francés",
      portuguese: "Portugués",
      spanish: "Español",
      yes: "Sí",
      no: "No",
      name: "Nombre",
      Jan: "Ene",
      Feb: "Feb",
      Mar: "Mar",
      Apr: "Abr",
      May: "May",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Ago",
      Sep: "Sep",
      Oct: "Oct",
      Nov: "Nov",
      Dez: "Dic",
      year: "Año",
      details: "detalles",
      about_app: "acerca de esta App",
      instructions: "Instrucciones",
      app_libraries: "Bibliotecas de código abierto en esta aplicación",
      option_language: "Language",
      option_update: "Update",
      application_update: "Application Update",
      profile: "Profile",
      user_details: "User Details",
      app_settings: "App Settings",
      home: "Home",
      about: "About",
      logout: "Logout",
      timeline: "Timeline",
      download: "Download",
      select: "Select",
      filters: "Filters",
      results: "Results",
      help: "Help",
      settings: "Settings",
      usage_instructions: "Usage Instructions",
      download_data: "Download Data",
      about_json: "About JSON Format",
      language: "Language",
      where: "where",
      when: "when",
      how: "how",
      copyrights: "All rights reserved",
      submit: "Submit",
      indevelopment: "This application is under development",
      search_for: "Search for stations",
      search: "search...",
      mapaccess: "Acesse o mapa clicando aqui",
      click_download: "Click on the buttons to download data",
      signin: "INICIAR SESIÓN",
      signup: "Regístrate",
      username: "Nombre de usuario",
      email: "Correo electrónico",
      password: "Contraseña",
      register_access: "Regístrese para acceder",
      home_text_01:
        "Cette application est l'un des projets finaux du cours CESAE DIGITAL FrontEnd Developer 2023/2024 qui se déroule à Lisbonne dans le cadre de PRO_MOV by Reskilling 4 Employment.",
      home_text_02:
        "Ya seas un entrenador experimentado, un jugador apasionado o un aficionado entusiasta, Handball.IsFun es tu herramienta de referencia para obtener una visión profunda de cada aspecto del juego.",
      about_p_01:
        "Esta aplicación es uno de los proyectos finales del Curso de Desarrollador FrontEnd DIGITAL CESAE 2023/2024 que se lleva a cabo en Lisboa dentro del alcance de PRO_MOV por Reskilling 4 Empleo.",
      about_p_02:
        "Miembros del equipo por orden alfabético: Alexandre Novas, Bruno Moreira, Carina Coelho, João Souza, Nuno Soares. Tutor del cliente: João Câncio. Supervisores de Proyecto: Helena Passos, José Alfaiate y Bruno Santos.",
      create_username: "Crea tu nombre de usuario",
      create_password: "Crear una contraseña",
      email_placeholder: "tu@ejemplo.com",
      user_alreadyregistered: "Ese nombre de usuario ya se encuentra en uso",
      valid_email: "Tu debes proveer un correo valido",
      password_min: "La contraseña debe ser al menos 5",
      please_register: "Please register to access the map functionality.",
      visit_homepage: "You can visit the this link to sign up: ",
      homepage: "HomePage",
    },
  },
};
i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "es", "fr", "pt"],
    nonExplicitSupportedLngs: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
