$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaLinha = $(`<li class='task-item'></li>`);
    const novaTarefa = $("#nova-tarefa").val().toUpperCase();
    $(novaLinha).text(novaTarefa);
    $(novaLinha).appendTo(".task-list");
    $("#nova-tarefa").val("");
  });
});
$(".task-list").on("click", "li", function () {
  $(this).toggleClass("task-feita");

  $("#botao-limpar").click(function () {
    $("li").removeClass("task-item");
    $("li").html(" ");
  });
});
