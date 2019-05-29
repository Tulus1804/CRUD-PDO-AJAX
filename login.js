function aksi_login1() {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "") {
        alert("Email e diisi Cuk!");
    } else if (password == "") {
        alert("Password iseh kosong Cuk!");
    } else if (email == "181530029@gmail.com" && password == "UTSB") {
        alert("Anda Berhasil Login");
        window.location = "index.php";
    } else {
        alert("Email & Password yang anda masukkan salah");
    }
}

function aksi_login2() {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "") {
        $(".register-link").show();
        $("#validasi").html("Email Belum Diisi").show();
    } else if (password == "") {
        $(".register-link").show();
        $("#validasi").html("Password Belum Diisi").show();
    } else if (email == "181530029@gmail.com" && password == "UTSB") {

        window.location = "index.php";
    } else {
        $(".register-link").show();
        $("#validasi").html("Email & password yang anda masukkan salah").show();
    }
}


$(document).ready(function () {

    $(".register-link").hide();

    $("#btnlogin").click(function () {
        aksi_login2();
    });

});