$(document).ready(function() {
    $("#dangki").click(function() {
        $("#myModal").modal();
    });



    function kthoten() {
        var mahoten = $("#txthoten").val();
        var regex = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if (mahoten.trim() === '') {
            $("#tbhoten").html("Họ tên bắt buộc");
            return false;
        }

        if (!regex.test(mahoten)) {
            $("#tbhoten").html("Phải viết hoa chữ cái đầu và không dùng số");
            return false;
        }
        $("#tbhoten").html("*");
        return true;
    }

    function ktcmnd() {
        var macmnd = $("#txtcmnd").val();
        var regex = /^[0-9]{9,}$/;
        if (macmnd.trim() === '') {
            $("#tbcmnd").html("CMND bắt buộc");
            return false;
        }

        if (!regex.test(macmnd)) {
            $("#tbcmnd").html("Chỉ dùng 9 chữ số");
            return false;
        }
        $("#tbcmnd").html("*");
        return true;
    }

    function ktquequan() {
        var quequan = $("#txtquequan").val();
        var regex = /^([A-Z]{1}[A-Z]+)((\s{1}[A-Z]{1}[A-Z]+){1,})$/;
        if (quequan.trim() === '') {
            $("#tbquequan").html("Quê quán bắt buộc nhập");
            return false;
        }

        if (!regex.test(quequan)) {
            $("#tbquequan").html("Chỉ dùng chữ hoa");
            return false;
        }
        $("#tbquequan").html("*");
        return true;
    }

    function ktemail() {
        var email = $("txtemail").val();
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if ($("#txtemail").val() == "") {
            $("#tbemail").html("* Bắt buộc nhập");
            return false;
        }
        if (!regex.test($("#txtemail").val())) {
            $("#tbemail").html("Nhập đúng mẫu email");
            return false;

        }
        $("#tbemail").html("*");
        return true;
    }

    function ktdienthoai() {
        var dienthoai = $("#txtsdt").val();
        var regex = /^0[0-9]{2}\-\d{3}\-\d{4}$/;
        if (dienthoai.trim() === '') {
            $("#tbsdt").html("Điện thoại Bắt buộc nhập");
            return false;
        }

        if (!regex.test(dienthoai)) {
            $("#tbsdt").html("Điện thoại liên hệ theo mẫu: 0XX-XXX-XXXX");
            return false;
        }

        $("#tbsdt").html("*");
        return true;
    }

    function kthinhanh() {
        var hinhanh = $("#txthinhanh").val();
        if (hinhanh === '') {
            $("#tbhinhanh").html("Phải chọn hình ảnh đại diện");
            return false;
        }

        $("#tbhinhanh").html("*");
        return true;
    }

    $("#txthoten").blur(kthoten);
    $("#txtcmnd").blur(ktcmnd);
    $("#txtquequan").blur(ktquequan);
    $("#txtemail").blur(ktemail);
    $("#txtsdt").blur(ktdienthoai);
    $("#txthinhanh").blur(kthinhanh);
    var i = 1;
    $("#btnluu").click(function() {
        if (!kthoten() || !ktcmnd() || !ktquequan() || !ktemail() || !ktdienthoai() || !kthinhanh())
            return false;
        var hoten = $("#txthoten").val();
        var cmnd = $("#txtcmnd").val();
        var quequan = $("#txtquequan").val();
        var email = $("#txtemail").val();
        var sdt = $("#txtsdt").val();
        var hinhanh = $("#txthinhanh").val();

        var row = "<tr><td>" + i + "</td><td>" + hoten + "</td><td>" + cmnd + "</td><td>" + quequan + "</td><td>" + email + "</td><td>" + sdt + "</td><td>" + hinhanh;
        $("tbody").append(row);
        i++;
        $("#myModal").modal("hide");
    });
});