$(document).ready(function () {
  function search(separador) {
    $("#busca").keyup(function () {
      var valor = $(this).val().toUpperCase();
      var palavras = $.trim(valor).replace(new RegExp((separador + '+'), 'g'), separador).split(separador);
      $("#frontEndSearch tbody tr").hide(); // Esconda todas as linhas

      $("#frontEndSearch tbody td").each(function () {
        var cellText = $(this).text().toUpperCase();
        var cellMatches = true;

        $(palavras).each(function () {
          var palavra = this;
          if (cellText.indexOf(palavra) < 0) {
            cellMatches = false;
            return false; // Sair do loop each se a palavra não for encontrada nesta célula
          }
        });

        if (cellMatches) {
          $(this).parent().show(); // Mostrar a linha se houver correspondência na célula
        }
      });
    });
  }

  search(' ');
});
