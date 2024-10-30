$(document).ready(function()
  {
  $('.nav-bar').on('click', function()
    {
    $('.menu-lateral').toggleClass('active'); // função para abrir ou fechar o menu no click
    $('.nav-bar i').toggleClass("fa-bars fa-xmark"); // função para trocar o ícone de menu bars para um X, para fechar o menu
    }
  );
  }
);