$(document).ready(function () {
  $(".search_box").focus();
  let numberPage = document.querySelector(".added_page");
  $.getJSON(
    `https://randomuser.me/api/?seed=erfan&results=5&page=${numberPage}`,
    function (data) {
      let results = data.results;
      for (const result of results) {
        // console.log(result);
        let html =
          "<tr><td>" +
          result.name.first +
          "</td><td>" +
          result.name.last +
          "</td><td><img src='" +
          result.picture.thumbnail +
          "'/></td><td>" +
          result.phone +
          "</td><td>" +
          result.location.country +
          "</td><td>" +
          result.email +
          "</td><td><i class='fa fa-trash'></i> / <i class='fa fa-edit'></i></td><td><i onclick='openContact()' class='eyeModalShow fa fa-eye'></i></td></tr>";
        $("#listcontact").append(html);
      }
      // let paginated = data.info.page;
      // console.log(paginated);
    }
  );
});
$(".search_box").on("keyup", function () {
  searchValue = "";
  let searchValue = $(this).val().toLowerCase();
  $("#listcontact tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
    $(".result_serch").text(searchValue);
  });
});

function openContact() {
  let modalShow = $(".Modal").addClass("modalShow");
  if (modalShow) {
    $.getJSON("https://randomuser.me/api/?noinfo&id=10", function (response) {
      console.log(response);
      let res = response.results[0];
      let html =
        "<tr><td>" +
        res.name.first +
        "</td><td>" +
        res.name.last +
        "</td><td>" +
        res.phone +
        "</td><td>" +
        res.location.country +
        "</td><td>" +
        res.email +
        "</td></tr>";
      $("#personInfo").append(html);
    });
  }
}
$(".close_modal").click(function () {
  $(".Modal").removeClass("modalShow");
});

function pagedNewAdd (){
  
}
