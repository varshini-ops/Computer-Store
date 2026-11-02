document.addEventListener('change', function (e) {
  var t = e.target;
  if (t && t.matches && t.matches('[data-variant-select]')) {
    var opt = t.options[t.selectedIndex];
    var out = document.querySelector('[data-variant-price]');
    if (out && opt.dataset.price) out.textContent = opt.dataset.price;
    var btn = document.querySelector('[data-add]');
    if (btn) { btn.disabled = opt.disabled; btn.lastChild.textContent = opt.disabled ? ' Sold out' : ' Add to Cart'; }
  }
  if (t && t.matches && t.matches('.qty input')) { t.form.submit(); }
});
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('[data-qty]');
  if (!b) return;
  var input = b.parentNode.querySelector('input');
  var v = parseInt(input.value, 10) || 0;
  input.value = Math.max(0, v + parseInt(b.dataset.qty, 10));
  input.form.submit();
});
document.addEventListener('click', function (e) {
  var h = e.target.closest && e.target.closest('.heart');
  if (h) { h.classList.toggle('on'); h.style.color = h.classList.contains('on') ? '#e30000' : ''; }
});
