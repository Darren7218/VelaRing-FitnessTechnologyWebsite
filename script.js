const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const visibleCount = 2; // one screen 2 cards

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const collapseEl = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(collapseEl, {
          toggle: false
        });
        bsCollapse.hide();
      });
    });
  });


const hero = document.querySelector('.hero');
let isScrollControlEnabled = false;


hero.addEventListener('animationend', () => {
  isScrollControlEnabled = true;
});

function updateHeroOnScroll() {
  if (!isScrollControlEnabled) return;  

  const scrollY = window.scrollY;
  const maxScroll = 600;
  const progress = Math.min(scrollY / maxScroll, 1);

  const scale = 1 + progress * 0.2;
  const opacity = 1 - progress * 0.5;

  hero.style.transform = `scale(${scale})`;
  hero.style.opacity = opacity;
}

window.addEventListener('scroll', updateHeroOnScroll);



function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= cards.length - visibleCount;
}

function moveToCard(index) {
  if (index < 0) index = 0;
  if (index > cards.length - visibleCount) index = cards.length - visibleCount;

  const cardWidth = cards[0].getBoundingClientRect().width + 16; // 16是gap宽度
  track.style.transform = `translateX(-${cardWidth * index}px)`;
  currentIndex = index;

  updateButtons();
}

prevBtn.addEventListener('click', () => moveToCard(currentIndex - visibleCount));
nextBtn.addEventListener('click', () => moveToCard(currentIndex + visibleCount));

moveToCard(0);




cards.forEach(card => {
  const expandBtn = card.querySelector('.expand-btn');
  if (!expandBtn) return; 

  const closeBtn = card.querySelector('.close-btn');

  expandBtn.addEventListener('click', e => {
    e.stopPropagation();

    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove('expanded');
        const btn = c.querySelector('.expand-btn');
        if (btn) btn.textContent = '+';
      }
    });

    card.classList.toggle('expanded');

    expandBtn.textContent = card.classList.contains('expanded') ? '×' : '+';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      card.classList.remove('expanded');
      expandBtn.textContent = '+';
    });
  }

  card.addEventListener('click', () => {
    card.classList.remove('expanded');
    expandBtn.textContent = '+';
  });
});

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".card").forEach((card) => {
    gsap.fromTo(card, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();

    const card = btn.closest('.card');
    const title = card.querySelector('.card-title').innerText;
    const desc = card.querySelector('.card-summary').innerText;

    if (window.innerWidth <= 768) {  
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDesc').textContent = desc;
      document.getElementById('mobileFullModal').classList.remove('hidden');
    } else {
      console.log('Desktop expand logic here');
    }
  });
});

// close btn
document.getElementById('closeFullModal').addEventListener('click', () => {
  document.getElementById('mobileFullModal').classList.add('hidden');
});


/* product */ 
// JS - intersection observer ctrl fade in
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  // Desktop >= 769px
  mm.add("(min-width: 769px)", () => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(section, 
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  });

  // Mobile <= 768px
  mm.add("(max-width: 768px)", () => {
    document.querySelectorAll(".card, .section, .left-content, .right-content")
      .forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
  });
});

/* video*/
const videoModalEl = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const videoTitleOverlay = document.getElementById('modal-title-video');
const videoDescOverlay = document.getElementById('modal-desc-video');
const bootstrapModal = new bootstrap.Modal(videoModalEl);


document.querySelectorAll('.amb-card.video').forEach(card => {
  card.addEventListener('click', (e) => {
    e.stopPropagation(); 

    const videoSrc = card.getAttribute('data-video-src');
    const title = card.querySelector('.info h4').textContent;
    const desc = card.querySelector('.info p').textContent;

    modalVideo.src = videoSrc;
    videoTitleOverlay.textContent = title;
    videoDescOverlay.textContent = desc;

    bootstrapModal.show();
    modalVideo.play();
  });
});

// pause vid
videoModalEl.addEventListener('hidden.bs.modal', () => {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = ''; // prevent volume 
});



/* word card */
const textModalEl = document.getElementById('textModal');
const textModal = new bootstrap.Modal(textModalEl);

document.querySelectorAll('.amb-card.text').forEach(card => {
  card.querySelector('.expand-btn').addEventListener('click', e => {
    e.stopPropagation();

    const quote = card.querySelector('p').textContent;
    const author = card.querySelector('h5').childNodes[0].textContent.trim();
    const sub = card.querySelector('h5 span').textContent.trim();

    document.getElementById('modal-text-desc').textContent = quote;
    document.getElementById('modal-text-title').textContent = author;
    document.querySelector('.sub-info').textContent = sub;

    textModal.show();
  });
});


/* pic （js) */
document.querySelectorAll('.plus-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const card = btn.closest('.pic-card');
    const name = card.dataset.name;
    const desc = card.dataset.desc;
    const img = card.dataset.img;

    document.getElementById('modalImg').src = img;
    document.getElementById('modalImg').alt = name;
    document.getElementById('modalTitleOverlay').textContent = name;
    document.getElementById('modalDescOverlay').textContent = desc;

    const bsModal = new bootstrap.Modal(document.getElementById('picModal'));
    bsModal.show();
  });
});


/* API subscribe*/
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const message = document.getElementById('subscribe-message');

  if (document.cookie.includes('subscribed=true')) {
    emailInput.value = "You've already subscribed!";
    emailInput.disabled = true;
    subscribeBtn.disabled = true;
    message.textContent = 'Thank you for subscribing!';
  }

  subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!email) {
      message.textContent = 'Please enter your email.';
      return;
    }

    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(res => {
      if (res.ok) {
        document.cookie = "subscribed=true; max-age=" + 30*24*60*60 + "; path=/";
        message.textContent = 'Subscription successful!';
        emailInput.disabled = true;
        subscribeBtn.disabled = true;
      } else {
        message.textContent = 'Subscription failed. Please try again.';
      }
    })
    .catch(() => {
      message.textContent = 'Network error. Please try again later.';
    });
  });


  $(document).ready(function () {
    const currentURL = window.location.href;
    const encodedURL = encodeURIComponent(currentURL);
    const shareText = encodeURIComponent("Check out this page: " + currentURL);

    // Facebook share link
    const fbURL = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
    $('#fbShareLink').attr('href', fbURL);

    // WhatsApp share link
    const waURL = `https://api.whatsapp.com/send?text=${shareText}`;
    $('#waShareLink').attr('href', waURL);
  });

});



