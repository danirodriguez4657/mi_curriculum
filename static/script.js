document.addEventListener("DOMContentLoaded", () => {
    // Crear la portada
    const portada = document.createElement("div");
    portada.style.position = "fixed";
    portada.style.top = 0;
    portada.style.left = 0;
    portada.style.width = "100%";
    portada.style.height = "100%";
    portada.style.backgroundColor = "#3498db";
    portada.style.color = "#fff";
    portada.style.display = "flex";
    portada.style.justifyContent = "center";
    portada.style.alignItems = "center";
    portada.style.fontSize = "2rem";
    portada.style.zIndex = 9999;
    portada.innerText = "Bienvenido, redirigiéndote a mi currículum...";

    // Añadir la portada al cuerpo del documento
    document.body.appendChild(portada);

    // Desvanecer la portada después de unos segundos
    setTimeout(() => {
        portada.style.transition = "opacity 1s ease";
        portada.style.opacity = 0;

        // Remover la portada del DOM cuando la animación termine
        setTimeout(() => {
            document.body.removeChild(portada);
        }, 1000);
    }, 3000); // Cambiar duración del mensaje (en milisegundos) aquí

    // Animación de las habilidades
    const skills = document.querySelectorAll("li");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = 1;
            skill.style.transform = "translateY(0) scale(1.05)"; // Efecto de escala
            skill.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Suavizado
        }, index * 200); 
    });

    // Gráfico de habilidades
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python', 'R', 'SQL', 'Power BI', 'Inglés'],
            datasets: [{
                label: 'Nivel de habilidad',
                data: [4, 3, 4, 3, 5],
                backgroundColor: ['#3498db', '#9b59b6', '#e74c3c', '#2ecc71', '#f1c40f'],
                borderColor: ['#2980b9', '#8e44ad', '#c0392b', '#27ae60', '#f39c12'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem) {
                            return `Nivel: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5
                }
            }
        }
    });
});
