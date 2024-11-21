// Animação de rolagem das seções
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    // Função para detectar a rolagem e adicionar a classe de visibilidade
    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition + windowHeight > sectionTop + 100) {
          section.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chama logo ao carregar para verificar o estado inicial
  });
  
  // Mostrar mais detalhes da equipe ao clicar
  const teamMembers = document.querySelectorAll('.member');
  
  teamMembers.forEach(member => {
    member.addEventListener('click', () => {
      const name = member.querySelector('h3').innerText;
      alert(`Você clicou em ${name}! Aqui podem ser mostrados mais detalhes.`);
    });
  });
  