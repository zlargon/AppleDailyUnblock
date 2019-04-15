fetch(location.href)
  .then(res => res.text())
  .then(html => new DOMParser().parseFromString(html, 'text/html'))
  .then(doc => {
    document.querySelector('.thoracis').innerHTML = doc.querySelector('.thoracis').innerHTML;
    document.querySelectorAll('div').forEach(div => div.style.display = '');
    document.querySelector('.ndPaywall').style.display = 'none';
    document.querySelector('.thoracis').style.display = 'none';
  });
