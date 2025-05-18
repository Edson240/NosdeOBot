document.getElementById('suggestionForm').addEventListener('submit', function(e) {
  e.preventDefault();

  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  document.getElementById('formResponse').textContent = 'Obrigado pela sua sugestão!';

  this.reset();
});
