document.addEventListener("DOMContentLoaded", function () {
    // ✅ 1. Typewriter Effect for Tagline
    const taglineElement = document.getElementById("tagline");
    const tagline = "Innovating with Diverse Minds";
    let i = 0;

    function typeWriter() {
        if (i < tagline.length) {
            taglineElement.innerHTML += tagline.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    if (taglineElement) typeWriter();

    // ✅ 2. Scroll Animations
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    // ✅ 3. Project Search Filtering
    const searchInput = document.getElementById("projectSearch");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchValue = this.value.toLowerCase();
            document.querySelectorAll(".project-card").forEach(card => {
                const title = card.querySelector("h3").innerText.toLowerCase();
                card.style.display = title.includes(searchValue) ? "block" : "none";
            });
        });
    }

    // ✅ 4. Back-to-Top Button
    const topButton = document.createElement("button");
    topButton.innerText = "⬆️ Top";
    topButton.id = "backToTop";
    document.body.appendChild(topButton);

    Object.assign(topButton.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        cursor: "pointer",
        display: "none",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        transition: "opacity 0.3s ease-in-out"
    });

    window.addEventListener("scroll", () => {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ✅ 5. Dark Mode Toggle
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "🌙 Dark Mode";
    darkModeButton.id = "darkModeToggle";
    document.body.appendChild(darkModeButton);

    Object.assign(darkModeButton.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "8px 12px",
        cursor: "pointer",
        backgroundColor: "#222",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "14px"
    });

    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeButton.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // ✅ 6. Interactive Navbar (Highlight Active Section)
    const navLinks = document.querySelectorAll("nav ul li a");

    function updateActiveNav() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
});

// ✅ 7. Workout Section Switching
function showWorkout(type) {
    document.getElementById("workout-options").style.display = "none";
    document.querySelectorAll(".workout-section").forEach(section => section.style.display = "none");
    document.getElementById(type).style.display = "block";
}

function goBack() {
    document.querySelectorAll(".workout-section").forEach(section => section.style.display = "none");
    document.getElementById("workout-options").style.display = "block";
}
document.getElementById('specializationFilter').addEventListener('change', function () {
    const selected = this.value;
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      const specialization = card.getAttribute('data-specialization');
      if (selected === 'all' || specialization === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
