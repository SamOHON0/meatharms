// ===== SHARED FOOTER ===== //
const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="/images/logo-nav.png" alt="Paddy's, The Meath Arms" class="footer-logo">
        <p class="tagline">A family-run country inn and village bar on Main Street, Aughrim, Co. Wicklow. Ten en suite rooms, a proper pint and a warm Wicklow welcome.</p>
        <div class="socials">
          <!-- TODO: confirm Facebook URL with Niall (he typed "TheMesthArms") -->
          <a href="https://www.facebook.com/TheMeathArms/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="https://www.instagram.com/paddysbar_aughrim/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.booking.com/hotel/ie/meath-arms-country-inn.html" target="_blank" rel="noopener" aria-label="Booking.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rooms.html">Rooms</a></li>
          <li><a href="/bar.html">The Bar</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Find Us</h4>
        <ul>
          <li>Main Street</li>
          <li>Aughrim</li>
          <li>Co. Wicklow</li>
          <li>Ireland</li>
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <ul>
          <li><a href="tel:+35340236460">0402 36460</a></li>
          <li><a href="mailto:themeatharms@outlook.com">themeatharms@outlook.com</a></li>
          <li><a href="https://www.booking.com/hotel/ie/meath-arms-country-inn.html" target="_blank" rel="noopener">Book on Booking.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year"></span> The Meath Arms Country Inn. All rights reserved.</div>
      <div>Website by <a href="https://squaretwo.ie" target="_blank" rel="noopener">SquareTwo</a></div>
    </div>
  </div>
</footer>
`;

// ===== CHATBOT WIDGET ===== //
// TODO: ask Niall for a mobile number if he wants a WhatsApp button - landline won't work on wa.me
const widgetsHTML = `
<button class="chat-button" id="chatBtn" aria-label="Open chat">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  <span class="chat-badge">1</span>
</button>

<div class="chat-window" id="chatWin">
  <div class="chat-header">
    <div class="chat-header-info">
      <div class="chat-avatar">M</div>
      <div>
        <div class="chat-name">The Meath Arms</div>
        <div class="chat-status">Online</div>
      </div>
    </div>
    <button class="chat-close" id="chatClose" aria-label="Close chat">×</button>
  </div>
  <div class="chat-body" id="chatBody">
    <div class="msg bot">Hello and welcome to The Meath Arms! How can we help you today?</div>
  </div>
  <div class="quick-replies" id="quickReplies">
    <button class="chip" data-msg="How do I book a room?">Book a room</button>
    <button class="chip" data-msg="What are the bar opening hours?">Bar hours</button>
    <button class="chip" data-msg="Is there live music on?">Live music</button>
    <button class="chip" data-msg="Where are you located?">Where are you?</button>
  </div>
  <div class="chat-footer">
    <input class="chat-input" id="chatInput" type="text" placeholder="Type a message...">
    <button class="chat-send" id="chatSend" aria-label="Send">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </div>
  <div class="chat-handoff">
    <a href="tel:+35340236460">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Call us on 0402 36460
    </a>
  </div>
</div>
`;

// Inject footer + widgets where placeholders are
document.getElementById('footer-placeholder')?.insertAdjacentHTML('afterend', footerHTML);
document.getElementById('widgets-placeholder')?.insertAdjacentHTML('afterend', widgetsHTML);

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav scroll state (IntersectionObserver sentinel, no scroll listener)
const nav = document.getElementById('nav');
const sentinel = document.createElement('div');
sentinel.style.cssText = 'position:absolute;top:0;left:0;height:40px;width:1px;pointer-events:none;';
document.body.prepend(sentinel);
new IntersectionObserver(([entry]) => {
  nav.classList.toggle('scrolled', !entry.isIntersecting);
}).observe(sentinel);

// Hamburger
const hamb = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamb && navLinks) {
  hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open', navLinks.classList.contains('active'));
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      hamb.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (q) q.addEventListener('click', () => item.classList.toggle('open'));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Chatbot
const chatBtn = document.getElementById('chatBtn');
const chatWin = document.getElementById('chatWin');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const quickReplies = document.getElementById('quickReplies');

if (chatBtn) {
  chatBtn.addEventListener('click', () => {
    chatWin.classList.add('active');
    const badge = chatBtn.querySelector('.chat-badge');
    if (badge) badge.style.display = 'none';
  });
}
if (chatClose) chatClose.addEventListener('click', () => chatWin.classList.remove('active'));

const KB = [
  {
    keys: ['book', 'reserv', 'room', 'stay', 'night', 'accommodation', 'bed', 'sleep'],
    reply: "We've ten en suite rooms upstairs. The easiest way to book is through Booking.com (there's a Book a Room button at the top of the page), or ring us directly on 0402 36460."
  },
  {
    keys: ['hour', 'open', 'close', 'when', 'time', 'today'],
    reply: "The bar is open 2pm to 11:30pm Monday to Friday, and 12pm to 12:30am on Saturdays and Sundays."
  },
  {
    keys: ['music', 'band', 'session', 'entertainment', 'gig', 'trad'],
    reply: "We have live music at the weekends. Follow our Facebook page to see who's playing."
  },
  {
    keys: ['food', 'eat', 'menu', 'dinner', 'lunch', 'restaurant', 'kitchen'],
    reply: "The restaurant is closed at the minute so we're not serving food, but you're more than welcome for a drink. Keep an eye on our Facebook for updates."
  },
  {
    keys: ['breakfast'],
    reply: "Breakfast is sorted for guests staying with us. Give us a ring on 0402 36460 if you have any questions about your stay."
  },
  {
    keys: ['check-in', 'check in', 'checkin', 'checkout', 'check-out', 'check out', 'arrive'],
    reply: "Check-in is from 2pm and check-out is by 10am. If you need an earlier arrival or later departure, ring us on 0402 36460 and we'll see what we can do."
  },
  {
    keys: ['where', 'location', 'address', 'find', 'direction'],
    reply: "You'll find us on Main Street in Aughrim, Co. Wicklow, about an hour and a quarter south of Dublin. Take the N11 to Rathnew, then follow the signs for Rathdrum and on to Aughrim."
  },
  {
    keys: ['park', 'parking', 'car'],
    reply: "There's free parking at the inn and easy parking on the street in Aughrim."
  },
  {
    keys: ['pet', 'dog'],
    reply: "We're pet friendly. Let us know when you book and we'll look after you: 0402 36460."
  },
  {
    keys: ['walk', 'hike', 'golf', 'fish', 'wicklow way', 'do', 'activity', 'around'],
    reply: "Aughrim is a great base for hill walking, golf and fishing, with the Wicklow Mountains on the doorstep. We can help arrange taxis and luggage transfers for walkers too."
  },
  {
    keys: ['price', 'cost', 'rate', 'how much', 'expensive'],
    reply: "Room rates vary by date and room type. You'll see live prices on Booking.com, or ring us on 0402 36460 for the best direct rate."
  }
];

function botReply(text) {
  const lc = text.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => lc.includes(k))) return item.reply;
  }
  return "Thanks for your message! For a quick answer give us a ring on 0402 36460, or email themeatharms@outlook.com and we'll get back to you.";
}

function addMsg(text, who) {
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMsg(text) {
  const t = text.trim();
  if (!t) return;
  addMsg(t, 'user');
  chatInput.value = '';
  if (quickReplies) quickReplies.style.display = 'none';
  setTimeout(() => addMsg(botReply(t), 'bot'), 450);
}

if (chatSend) chatSend.addEventListener('click', () => sendMsg(chatInput.value));
if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMsg(chatInput.value); });
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => sendMsg(chip.dataset.msg));
});
