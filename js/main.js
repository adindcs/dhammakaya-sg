/* ══════════════════════════════════
   MOBILE MENU TOGGLE (ใช้ทุกหน้า)
   ══════════════════════════════════ */
function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    var btn = document.querySelector('.mobile-menu-btn i');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        btn.className = 'fas fa-bars';
    } else {
        menu.classList.add('show');
        btn.className = 'fas fa-times';
    }
}

// Close menu when clicking outside
document.addEventListener('click', function (e) {
    var menu = document.getElementById('mobileMenu');
    var btn = document.querySelector('.mobile-menu-btn');
    if (menu && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
        var icon = btn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
    }
});

/* ══════════════════════════════════
   DONATION PAGE: Amount & Hero
   ══════════════════════════════════ */
var currentAmt = 50;

function changeHero(i, el) {
    var heroImg = document.querySelector('#heroImg > img');
    var thumbImg = el.querySelector('img');
    if (heroImg && thumbImg) {
        heroImg.src = thumbImg.src;
        document.querySelectorAll('.thumb').forEach(function (t) { t.classList.remove('active'); });
        el.classList.add('active');
    }
}

function selectAmt(v, el) {
    document.querySelectorAll('.amt-btn').forEach(function (b) { b.classList.remove('selected'); });
    el.classList.add('selected');
    var ci = document.getElementById('customInput');
    if (v === -1) { ci.classList.add('show'); return; }
    ci.classList.remove('show');
    currentAmt = v;
    updateDisplay();
}

function updateCustom(v) {
    currentAmt = parseFloat(v) || 0;
    updateDisplay();
}

function updateDisplay() {
    var d = document.getElementById('donationAmt');
    var t = document.getElementById('totalAmt');
    if (d) d.textContent = 'SGD $' + currentAmt.toFixed(2);
    if (t) t.textContent = 'SGD $' + currentAmt;
}
