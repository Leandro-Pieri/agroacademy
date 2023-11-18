document.addEventListener("DOMContentLoaded", function () {
  // Obtenha todos os links do menu e o ícone de menu
  const menuLinks = document.querySelectorAll(".menu a");
  const menuIcon = document.querySelector(".menu-icon");

  // Adicione um ouvinte de evento de clique para cada link do menu
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link

      // Obtenha o valor do atributo data-page
      const pageName = link.getAttribute("data-page");

      // Redirecione para a página correspondente
      redirectToPage(pageName);
    });
  });

  // Adicione um ouvinte de evento de clique para o ícone de menu
  menuIcon.addEventListener("click", function () {
    // Redirecione para a página do menu
    redirectToPage("menu");
  });

  // Função para redirecionar para a página correspondente
  function redirectToPage(pageName) {
    // Determine a URL da página com base no valor de pageName
    let url = "";
    switch (pageName) {
      case "sobre":
        url = "pages/sobre.html"; // Substitua pelo nome do arquivo da página "Sobre"
        break;
      case "fazemos":
        url = "pages/fazemos.html"; // Substitua pelo nome do arquivo da página "O que fazemos"
        break;
      case "cursos":
        url = "pages/cursos.html"; // Substitua pelo nome do arquivo da página "Cursos"
        break;
      case "certificados":
        url = "pages/certificados.html"; // Substitua pelo nome do arquivo da página "Certificados"
        break;
      case "webnarios":
        url = "pages/webnarios.html"; // Substitua pelo nome do arquivo da página "Webnários"
        break;
      case "repositorio":
        url = "pages/repositorio.html"; // Substitua pelo nome do arquivo da página "Repositório"
        break;
      case "parceiros":
        url = "pages/parceiros.html"; // Substitua pelo nome do arquivo da página "Parceiros"
        break;
      case "suporte":
        url = "pages/suporte.html"; // Substitua pelo nome do arquivo da página "Ajuda e Suporte"
        break;
      case "menu":
        // Se o ícone do menu for clicado, não faça nada (mantenha na mesma página)
        case "curso1":
      url = "pages/curso1.html"; // substitua pelo nome real do arquivo da página do curso 1
      break;

    case "curso2":
      url = "pages/curso2.html"; // substitua pelo nome real do arquivo da página do curso 2
      break;

    case "curso3":
      url = "pages/curso3.html"; // substitua pelo nome real do arquivo da página do curso 3
      break;

        return;
      default:
        console.error("Página não encontrada");
        return;
    }

    // Redirecione para a URL da página correspondente
    window.location.href = url;
  }
  document.addEventListener("DOMContentLoaded", function () {
    const enrollmentForm = document.getElementById("enrollment-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const enrollButton = document.getElementById("enroll-button");
  
    enrollButton.addEventListener("click", function () {
      const name = nameInput.value;
      const email = emailInput.value;
  
      // Configuração da Gmail API com suas credenciais
      const CLIENT_ID = '491575260101-1r1ii94lg1nu0n9o8k63s7n81kgmo5c3.apps.googleusercontent.com';
      const CLIENT_SECRET = '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';
  
      // Lógica de autenticação e acesso à Gmail API
      // Substitua esta seção com a lógica real de autenticação e solicitações à Gmail API
  
      // Exemplo simplificado de matrícula
      // Envio de um e-mail para o endereço de e-mail do usuário
      // Lembre-se de que isso é um esboço e requer uma configuração real
  
      // Envio do e-mail de matrícula
      // Substitua com sua lógica de envio de e-mail usando a Gmail API
      const sendEnrollmentEmail = () => {
        // Lógica para enviar e-mail de matrícula
      };
  
      // Chamada da função de envio de e-mail de matrícula
      sendEnrollmentEmail();
  
      // Lógica adicional de matrícula (redirecionamento, confirmação, etc.)
    });
  });
    

  
  });
  
