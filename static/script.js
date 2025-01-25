document.addEventListener("DOMContentLoaded", () => {
    // Crear portada
    const portada = document.createElement("div");
    portada.id = "portada";
    portada.style.position = "fixed";
    portada.style.top = 0;
    portada.style.left = 0;
    portada.style.width = "100vw";
    portada.style.height = "100vh";
    portada.style.backgroundColor = "#3498db";
    portada.style.color = "white";
    portada.style.display = "flex";
    portada.style.flexDirection = "column";
    portada.style.justifyContent = "center";
    portada.style.alignItems = "center";
    portada.style.fontSize = "2rem";
    portada.style.zIndex = 1000;
    portada.style.transition = "opacity 1s ease";

    portada.innerHTML = `
        <h1>Bienvenido</h1>
        <p>Redirigiéndote a mi currículum...</p>
    `;

    document.body.appendChild(portada);

    // Función para inicializar animaciones
    const iniciarAnimaciones = () => {
        // Restablecer las habilidades
        const skills = document.querySelectorAll("li");
        skills.forEach(skill => {
            skill.style.opacity = 0;
            skill.style.transform = "translateY(20px) scale(0.95)";
            skill.style.transition = "none";
        });

        // Mostrar habilidades con animación
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.opacity = 1;
                skill.style.transform = "translateY(0) scale(1.05)";
                skill.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            }, index * 200);
        });

        // Reiniciar la portada
        document.body.appendChild(portada);
        portada.style.opacity = 1;

        setTimeout(() => {
            portada.style.opacity = 0;
            setTimeout(() => {
                portada.remove();
            }, 1000);
        }, 3000);
    };

    // Animar y ocultar la portada al cargar
    setTimeout(() => {
        portada.style.opacity = 0;
        setTimeout(() => {
            portada.remove();
        }, 1000);
    }, 3000);

    // Configurar gráfico de habilidades
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
                        label: function (tooltipItem) {
                            return `Nivel: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, max: 5 }
            }
        }
    });

    // Manejador para el botón
    const boton = document.querySelector(".button");
    boton.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar la navegación predeterminada
        iniciarAnimaciones(); // Reiniciar las animaciones
        window.scrollTo({
            top: 0,
             // Desplazamiento suave
        });
    });
});
