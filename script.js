// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("randi_hamburger");
  const menu = document.querySelector(".randi_menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  // Form Validation for Guest Book
  const guestForm = document.getElementById("randi_guest-form");
  if (guestForm) {
    guestForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("randi_name").value.trim();
      const email = document.getElementById("randi_email").value.trim();
      const message = document.getElementById("randi_message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Harap lengkapi semua field!");
        return;
      }

      if (!isValidEmail(email)) {
        alert("Harap masukkan alamat email yang valid!");
        return;
      }

      // Simulasi pengiriman data
      alert("Terima kasih! Pesan Anda telah berhasil dikirim.");
      this.reset();
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // News Filter
  const newsFilter = document.getElementById("randi_news-filter");
  if (newsFilter) {
    newsFilter.addEventListener("change", function () {
      const selectedCategory = this.value;
      const newsItems = document.querySelectorAll(".randi_news-item");

      newsItems.forEach((item) => {
        if (
          selectedCategory === "all" ||
          item.dataset.category === selectedCategory
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "&uarr;";
  scrollToTopBtn.id = "randi_scroll-top";
  scrollToTopBtn.style.display = "none";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Add styles for scroll to top button
  const style = document.createElement("style");
  style.textContent = `
        #randi_scroll-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: #9f654f;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        #randi_scroll-top:hover {
            background-color: #873e23;
            transform: translateY(-3px);
        }
    `;
  document.head.appendChild(style);
});
// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("randi_hamburger");
  const menu = document.querySelector(".randi_menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on menu items
  const menuItems = document.querySelectorAll(".randi_menu a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
      }
    });
  });

  // Form Validation for Guest Book
  const guestForm = document.getElementById("randi_guest-form");
  if (guestForm) {
    guestForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("randi_name").value.trim();
      const email = document.getElementById("randi_email").value.trim();
      const subject = document.getElementById("randi_subject").value.trim();
      const message = document.getElementById("randi_message").value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
        showNotification("Harap lengkapi semua field!", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Harap masukkan alamat email yang valid!", "error");
        return;
      }

      // Simulasi pengiriman data
      showNotification(
        "Terima kasih! Pesan Anda telah berhasil dikirim.",
        "success"
      );
      this.reset();
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // News Filter
  const newsFilter = document.getElementById("randi_news-filter");
  if (newsFilter) {
    newsFilter.addEventListener("change", function () {
      const selectedCategory = this.value;
      const newsItems = document.querySelectorAll(".randi_news-item");

      newsItems.forEach((item) => {
        if (
          selectedCategory === "all" ||
          item.dataset.category === selectedCategory
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // Election Countdown Timer
  const electionDate = new Date("2024-02-14").getTime();
  const countdownElement = document.getElementById("randi_election-countdown");

  if (countdownElement) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = electionDate - now;

    if (distance < 0) {
      countdownElement.innerHTML =
        '<div class="randi_countdown-finished">Pemilu 2024 telah selesai</div>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
            <div class="randi_countdown-item">
                <span class="randi_countdown-number">${days}</span>
                <span class="randi_countdown-label">Hari</span>
            </div>
            <div class="randi_countdown-item">
                <span class="randi_countdown-number">${hours}</span>
                <span class="randi_countdown-label">Jam</span>
            </div>
            <div class="randi_countdown-item">
                <span class="randi_countdown-number">${minutes}</span>
                <span class="randi_countdown-label">Menit</span>
            </div>
            <div class="randi_countdown-item">
                <span class="randi_countdown-number">${seconds}</span>
                <span class="randi_countdown-label">Detik</span>
            </div>
        `;
  }

  // Voter Data Check Simulation
  const voterCheckForm = document.getElementById("randi_voter-check-form");
  if (voterCheckForm) {
    voterCheckForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nik = document.getElementById("randi_nik").value.trim();
      const name = document.getElementById("randi_voter-name").value.trim();

      if (nik === "" || name === "") {
        showNotification("Harap lengkapi NIK dan nama lengkap!", "error");
        return;
      }

      if (nik.length !== 16) {
        showNotification("NIK harus terdiri dari 16 digit!", "error");
        return;
      }

      // Simulasi pencarian data
      simulateVoterCheck(nik, name);
    });
  }

  function simulateVoterCheck(nik, name) {
    const resultElement = document.getElementById("randi_voter-result");
    const loadingElement = document.getElementById("randi_voter-loading");

    // Show loading
    loadingElement.style.display = "block";
    resultElement.style.display = "none";

    // Simulate API call delay
    setTimeout(() => {
      loadingElement.style.display = "none";
      resultElement.style.display = "block";

      // Random result for simulation
      const isRegistered = Math.random() > 0.3;
      const tps = Math.floor(Math.random() * 100) + 1;

      if (isRegistered) {
        resultElement.innerHTML = `
                    <div class="randi_voter-success">
                        <h3>Data Ditemukan!</h3>
                        <p><strong>Nama:</strong> ${name}</p>
                        <p><strong>NIK:</strong> ${nik}</p>
                        <p><strong>Status:</strong> Terdaftar sebagai pemilih</p>
                        <p><strong>TPS:</strong> ${tps}</p>
                        <p><strong>Alamat TPS:</strong> SD Negeri 01 Jakarta Pusat</p>
                    </div>
                `;
      } else {
        resultElement.innerHTML = `
                    <div class="randi_voter-error">
                        <h3>Data Tidak Ditemukan</h3>
                        <p>Data pemilih dengan NIK ${nik} dan nama ${name} tidak ditemukan dalam Daftar Pemilih Tetap (DPT).</p>
                        <p>Silakan hubungi KPU setempat untuk verifikasi lebih lanjut.</p>
                    </div>
                `;
      }
    }, 2000);
  }

  // Statistics Animation
  const statElements = document.querySelectorAll(".randi_stat-number");
  if (statElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(
              entry.target,
              0,
              parseInt(entry.target.textContent.replace(/,/g, "")),
              2000
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statElements.forEach((stat) => {
      observer.observe(stat);
    });
  }

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Image Modal for News
  const newsImages = document.querySelectorAll(".randi_news-image img");
  newsImages.forEach((img) => {
    img.addEventListener("click", function () {
      createImageModal(this.src, this.alt);
    });
  });

  function createImageModal(src, alt) {
    const modal = document.createElement("div");
    modal.className = "randi_modal";
    modal.innerHTML = `
            <div class="randi_modal-content">
                <span class="randi_modal-close">&times;</span>
                <img src="${src}" alt="${alt}">
                <p>${alt}</p>
            </div>
        `;

    document.body.appendChild(modal);

    modal.querySelector(".randi_modal-close").addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "&uarr;";
  scrollToTopBtn.id = "randi_scroll-top";
  scrollToTopBtn.style.display = "none";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Notification System
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `randi_notification randi_notification-${type}`;
    notification.innerHTML = `
            <span class="randi_notification-message">${message}</span>
            <button class="randi_notification-close">&times;</button>
        `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add("randi_notification-show");
    }, 100);

    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
      closeNotification(notification);
    }, 5000);

    // Close on button click
    notification
      .querySelector(".randi_notification-close")
      .addEventListener("click", () => {
        clearTimeout(autoRemove);
        closeNotification(notification);
      });
  }

  function closeNotification(notification) {
    notification.classList.remove("randi_notification-show");
    notification.classList.add("randi_notification-hide");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }
});

// Additional CSS for JavaScript features
const additionalStyles = `
    /* Countdown Timer */
    .randi_countdown {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 30px 0;
    }
    
    .randi_countdown-item {
        background: white;
        padding: 20px 15px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 80px;
    }
    
    .randi_countdown-number {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        color: #9f654f;
    }
    
    .randi_countdown-label {
        display: block;
        font-size: 0.9rem;
        color: #666;
        margin-top: 5px;
    }
    
    .randi_countdown-finished {
        text-align: center;
        font-size: 1.2rem;
        color: #009933;
        font-weight: bold;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    /* Voter Check */
    .randi_voter-check {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        margin: 30px 0;
    }
    
    .randi_voter-loading {
        text-align: center;
        padding: 20px;
        display: none;
    }
    
    .randi_voter-loading::after {
        content: '';
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #9f654f;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        display: inline-block;
    }
    
    .randi_voter-success {
        background: #f0fff0;
        border: 1px solid #009933;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
    }
    
    .randi_voter-error {
        background: #fff0f0;
        border: 1px solid #cc3300;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
    }
    
    /* Modal */
    .randi_modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    
    .randi_modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 90%;
        max-height: 90%;
        position: relative;
    }
    
    .randi_modal-close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 2rem;
        cursor: pointer;
        color: #333;
    }
    
    .randi_modal-content img {
        max-width: 100%;
        max-height: 70vh;
        display: block;
    }
    
    .randi_modal-content p {
        text-align: center;
        margin-top: 10px;
        color: #666;
    }
    
    /* Notifications */
    .randi_notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        z-index: 10001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .randi_notification-show {
        transform: translateX(0);
    }
    
    .randi_notification-hide {
        transform: translateX(400px);
    }
    
    .randi_notification-success {
        background: #009933;
    }
    
    .randi_notification-error {
        background: #cc3300;
    }
    
    .randi_notification-info {
        background: #9f654f;
    }
    
    .randi_notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 15px;
    }
    
    /* Animations */
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Scroll to Top Button */
    #randi_scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #9f654f;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        display: none;
    }
    
    #randi_scroll-top:hover {
        background-color: #873e23;
        transform: translateY(-3px);
    }
`;

// Inject additional styles
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
