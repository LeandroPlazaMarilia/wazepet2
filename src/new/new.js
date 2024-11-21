document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão e o menu de navegação
  const toggleNavButton = document.getElementById('toggle-nav');
  const navItems = document.getElementById('sidebar-nav');

  // Adiciona um ouvinte de evento para o clique do botão
  toggleNavButton.addEventListener('click', function() {
    // Alterna a classe 'hidden' para mostrar ou esconder os itens de navegação
    navItems.classList.toggle('hidden');

    // Altera o texto do botão dependendo do estado
    if (navItems.classList.contains('hidden')) {
      toggleNavButton.textContent = 'Mostrar Itens'; // Se estiver escondido, muda o texto do botão
    } else {
      toggleNavButton.textContent = 'Esconder Itens'; // Se estiver visível, muda o texto do botão
    }
  });
});

  
    // Configuração do gráfico usando Chart.js
    const ctx = document.getElementById('donationsChart').getContext('2d');
    const donationsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Doações',
          data: [50, 75, 100, 125, 150, 175],
          borderColor: '#00796b',
          backgroundColor: 'rgba(0, 121, 107, 0.2)',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  
    // Elementos do resumo mensal
    const totalDonations = document.getElementById("total-donations");
    const rescuedAnimals = document.getElementById("rescued-animals");
    const newUsers = document.getElementById("new-users");
  
    // Botão para atualizar resumo e gráfico
    document.getElementById("update-summary").addEventListener("click", () => {
      // Gera valores aleatórios para o resumo
      const newTotalDonations = Math.floor(Math.random() * 200 + 100);
      const newRescuedAnimals = Math.floor(Math.random() * 50 + 10);
      const newNewUsers = Math.floor(Math.random() * 100 + 20);
  
      // Atualiza os textos do resumo
      totalDonations.textContent = newTotalDonations;
      rescuedAnimals.textContent = newRescuedAnimals;
      newUsers.textContent = newNewUsers;
  
      // Atualiza os dados do gráfico com valores aleatórios
      donationsChart.data.datasets[0].data = [
        Math.floor(Math.random() * 50 + 50),
        Math.floor(Math.random() * 50 + 75),
        Math.floor(Math.random() * 50 + 100),
        Math.floor(Math.random() * 50 + 125),
        Math.floor(Math.random() * 50 + 150),
        newTotalDonations // Último valor será igual ao total de doações
      ];
      donationsChart.update(); // Atualiza o gráfico
    });
  