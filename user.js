function simpan() {

    $.ajax({
        type: "POST",
        url: "ajax/ajax_user.php",
        data: {
            aksi: "simpan",
            id_user: $("#id_user").val(),
            nama_user: $("#nama_user").val(),
            email: $("#hf-email").val(),
            lev_user: $("#lev_user").val()
        },
        dataType: "json",
        beforeSend: function (e) {
            if (e && e.overrideMimeType) {
                e.overrideMimeType("application/json;charset=UTF-8");
            }
        },
        success: function (response) {
            // respon dari server
            if (response.validasi == "success") {
                window.location = "index.php?page=user";
            }
        },
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status);
            console.log(throwError);
        }
    });

}

function hapus(id_user) {

    swal({
            title: "Apakah anda yakin ?",
            text: "Anda akan menghapus data tersebut!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: "POST",
                    url: "ajax/ajax_user.php",
                    data: {
                        aksi: "hapus",
                        id_user: id_user
                    },
                    dataType: "json",
                    beforeSend: function (e) {
                        if (e && e.overrideMimeType) {
                            e.overrideMimeType("application/json;charset=UTF-8");
                        }
                    },
                    success: function (response) {
                        // respon dari server
                        if (response.validasi == "success") {
                            window.location = "index.php?page=user";
                        }
                    },
                    error: function (xhr, ajaxOptions, throwError) {
                        console.log(xhr.status);
                        console.log(throwError);
                    }
                });
            } else {
                swal("Anda batal menghapus data tersebut!");
            }
        });

}

function get_data(id_user) {

    $.ajax({
        type: "POST",
        url: "ajax/ajax_user.php",
        data: {
            aksi: "get_data",
            id_user: id_user
        },
        dataType: "json",
        beforeSend: function (e) {
            if (e && e.overrideMimeType) {
                e.overrideMimeType("application/json;charset=UTF-8");
            }
        },
        success: function (response) {
            // respon dari server
            $("#id_user").val(response.id_user);
            $("#nama_user").val(response.nama_user);
            $("#hf-email").val(response.email);
            $("#lev_user").val(response.lev_user);
        },
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status);
            console.log(throwError);
        }
    });

}

function update() {

    $.ajax({
        type: "POST",
        url: "ajax/ajax_user.php",
        data: {
            aksi: "update",
            id_user: $("#id_user").val(),
            nama_user: $("#nama_user").val(),
            email: $("#hf-email").val(),
            lev_user: $("#lev_user").val()
        },
        dataType: "json",
        beforeSend: function (e) {
            if (e && e.overrideMimeType) {
                e.overrideMimeType("application/json;charset=UTF-8");
            }
        },
        success: function (response) {
            // respon dari server
            if (response.validasi == "success") {
                window.location = "index.php?page=user";
            }
        },
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status);
            console.log(throwError);
        }
    });
}

$(document).ready(function () {

    $("#btn-tambah").click(function () {
        $(".validasi-id-user").hide();
        $(".validasi-nama-user").hide();
        $(".validasi-email").hide();
        $(".validasi-level").hide();
        $("#btn-simpan").show();
        $("#btn-update").hide();


        $("#id_user").val("");
        $("#nama_user").val("");
        $("#hf-email").val("");
        $("#lev_user").val("");

    });

    $("#btn-simpan").click(function () {
        var id_user = $("#id_user").val();
        var nama_user = $("#nama_user").val();
        var email = $("#hf-email").val();
        var lev_user = $("#lev_user").val();


        if (id_user == "") {
            $(".validasi-id-user").show();
        } else if (nama_user == "") {
            $(".validasi-nama-user").show();
        } else if (email == "") {
            $(".validasi-email").show();
        } else if (lev_user == "") {
            $(".validasi-level").show();
        } else {
            simpan();
        }
    });

    $(".item").click(function () {
        $(".validasi-id-user").hide();
        $(".validasi-nama-user").hide();
        $(".validasi-email").hide();
        $(".validasi-level").hide();
        $("#btn-simpan").hide();
        $("#btn-update").show();
    });

    $("#btn-update").click(function () {
        var id_user = $("#id_user").val();
        var nama_user = $("#nama_user").val();
        var email = $("#hf-email").val();
        var lev_user = $("#lev_user").val();

        $("#btn-simpan").hide();
        if (id_user == "") {
            $(".validasi-id-user").show();
        } else if (nama_user == "") {
            $(".validasi-nama-user").show();
        } else if (email == "") {
            $(".validasi-email").show();
        } else if (lev_user == "") {
            $(".validasi-level").show();
        } else {
            update();
        }
    });

});