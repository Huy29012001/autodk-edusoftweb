//Kiểm tra số môn
var monhocArr;
var coursespos = 0;

//Chuyển alert vào console giúp xử lí khi alert hiện lên mà không bấm ok thì code không chạy tiếp 
window.alert = function (text) {
    console.log('Trạng thái: ' + text);
    if (text.includes("Server đang tải lại dữ liệu"))
        setTimeout(function(){location.reload();}, 500);
    return true;
};

// Overider some function in html DOM//

//Khi một môn được chọn thì update thông báo
function toDKSelectedChange_callback2(data) {
    var resArr = data.value.split("|");
    if (resArr[1] != ""){ // xet song hanh
        toastr["info"](resArr[1]);
    }
    document.getElementById("divKQ").innerHTML = resArr[0];
    document.body.disabled = "";
    document.body.style.cursor = "default";
    isProcessing = false;
    toastr["success"]("Đã chọn môn học thứ " + (coursespos + 1));
    coursespos++;
    fastDKOSB(monhocArr[coursespos]);
}

//check kết quả đăng kí để reload danh sách đăng kí
function LuuDanhSachDangKy_HopLe_callback(monHetCho) {
    var arr = monHetCho.value.split("||");
    document.body.style.cursor = 'default';
    if (arr.length == 1) {
        return false;
    }
    if (arr[0] != "" && arr[0] != null) {
        if (arr[0] == "false") {
            return false;
        } else {
            toastr["info"](arr[0]);
        }
    }
    //nếu lưu thành công -> load lại danh sách để xem kết quả
    if (!(arr[0].includes("Ngoài thời gian") || arr[0].includes("Beside allowed time of course registration!") || arr[0].includes("outOfTimeDK"))) {
        toastr["success"]("Đã lưu kết quả! Hãy xem lại danh sách");
        EduSoft.Web.UC.DangKyMonHoc.ShowDSDaDangKy(ShowDSDaDangKy_Callback);
        if(autoInterval){ // nếu đang ở chế độ găm môn
            let isDone = true;
            monhocArr.forEach(monhoc => {
                let mamonhoc = monhoc.split("|")[1];
                if(!$("#divKQ")[0].outerHTML.includes(mamonhoc)){ // nếu mã môn học chưa có trong danh sách đã đăng ký
                    isDone = false;
                    break;
                } 
            });

            if(isDone){
                toastr["success"]('Đã găm thành công tất cả các môn');
                clearInterval(autoInterval);
                autoInterval = 0;
                $("#autoDK").attr("class", "btn btn-primary btn-sm");
                $("#autoDK").html("Auto ĐK");
            }
        } else location.href = "#divKQ";
    }
}

// Bỏ check song hành: check auto đăng kí
function LuuDanhSachDangKy_callback(songhanh) {
    EduSoft.Web.UC.DangKyMonHoc.LuuDanhSachDangKy_HopLe(true, false, LuuDanhSachDangKy_HopLe_callback);
}

//Vì có một số môn không hiện trong TKB nên cho vào trong try để tích các môn đăng kí có trong thời khóa biểu!
function toggleSelectRow(maDK, isSelect) {
    try {
        var chk = document.getElementById("chk_" + maDK);
        chk.checked = isSelect;
        var row = chk.parentNode.parentNode;
        row.style.backgroundColor = (isSelect ? "#CCCCCC" : "White");
    }
    catch (err) {
    }
}


//Bỏ check điều kiện đăng kí tự động
function toDKSelectedChange_callback(res) {
    if (res.value == "") {
        window.open("default.aspx?page=dkmonhoc", '_blank');
    } else {
        var isValidCoso = false;
        var isValidTKB = false;

        var resArr = res.value.split("|");
        var maDK = resArr[1];
        if (resArr.length == 2) {
            toastr["info"](resArr[0]);
            toggleSelectRow(maDK, false);
            document.body.disabled = "";
            document.body.style.cursor = "default";
            isProcessing = false;
        } else {
            var isChecked = resArr[2] == 1;
            var oldMaDK = resArr[4];
            var isVuotTC = resArr[5];
            var isVuotTCNganh2 = resArr[34];
            var isMHDangKyCungKhoiSV = resArr[35];
            var MonTQ = resArr[6];
            var MonSH = resArr[7];
            var MonDPH = resArr[8];
            var isTGDK = resArr[28];
            var xetDienDK = resArr[29];
            var chuyenNganh1HopLe = resArr[30];
            var chuyenNganh2HopLe = resArr[31];
            var monHocRangBuocSTC = resArr[32];
            var HopLeSTCDuocPhepThayDoi = resArr[33];
            var hopLeNhomMHTuChon = resArr[36];

            var strCanhBaoCTDTKhoi  = resArr[38];

            if (resArr[0] == 'dhmxhetx') {
                if (confirm('Môn học học trực tuyến, tiếp tục đăng ký?')) {
                    isValidTKB = true;
                    toggleSelectRow(maDK, isChecked);
                    if (oldMaDK)
                        toggleSelectRow(oldMaDK, false);
                    EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                }
            }
            else if (isVuotTC == 1) //vuot tin chi max
            {
                toastr["error"](vuotTC);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            }
            else if (isVuotTCNganh2 == 1) //vuot tin chi max nganh 2
            {
                toastr["error"]("Vượt số tín chỉ tối đa ngoài ngành cho phép!");
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            }
            else if (chuyenNganh1HopLe == 0) {
                toastr["error"](errorChuyenNganhChinh);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (chuyenNganh2HopLe == 0) {
                toastr["error"](errorChuyenNganhChuyenSau);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (monHocRangBuocSTC == 0) {
                toastr["error"](errorGioiHanSTC + maDK);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (HopLeSTCDuocPhepThayDoi == 0) {
                toastr["error"](errorGioiHanSoTCThayDoi);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (hopLeNhomMHTuChon == 0) {
                toastr["error"]("Không được đăng ký môn học thuộc nhóm tự chọn khác nhóm " + resArr[37].toString());
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (resArr[21] == 1 && resArr[22] == 0) // co phai la mon hoc cai thien, neu cai thien, co phai la mon cai thien hop le 
            {
                var mess = resArr[23] == "0" ? errorCaiThienDiemD : errorCaiThienHocKy + resArr[23];
                toastr["error"](mess);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            } else if (xetDienDK) {
                toastr["error"](xetDienDK);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            }
            else if (MonDPH) //xem co phai la mon duoc phep hoc theo chương trinh dao tao he nganh hoac khoi lop
            {
                toastr["error"](MonDPH);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            }
            else if (MonTQ) // co vi pham tien quyet
            {
                toastr["error"](MonTQ);
                toggleSelectRow(maDK, false);
                document.body.disabled = "";
                document.body.style.cursor = "default";
                isProcessing = false;
            }
            else if (strCanhBaoCTDTKhoi != "") //Canh báo ngoài CTĐT khối
            {
                if (confirm(strCanhBaoCTDTKhoi)) {
                    toggleSelectRow(maDK, true);
                    EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);
                }
                else {
                    toggleSelectRow(maDK, false);
                    document.body.disabled = "";
                    document.body.style.cursor = "default";
                    isProcessing = false;
                }
            }
            else if (resArr[9] == 1) // xet trung thoi khoa bieu
            {
                if (resArr[17] == 1 || resArr[17] == 3) // canh bao khi trung thoi khoa bieu
                {
                    var strAlert;
                    if (resArr[17] == 3) // bao luon ca so tiet bi trung
                    {
                        strAlert = errorMucDoTrungTKB0 + resArr[19] + ", " + resArr[20] + "% " + errorMucDoTrungTKB1;
                    } else {
                        strAlert = trungTKBChoPhep;
                    }
                    if (confirm(strAlert)) {
                        isValidTKB = true;
                        toggleSelectRow(maDK, true);
                        if (oldMaDK)
                            toggleSelectRow(oldMaDK, false);
                        EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                    } else {
                        toggleSelectRow(maDK, false);
                        document.body.disabled = "";
                        document.body.style.cursor = "default";
                        isProcessing = false;
                    }
                } else // cam khong cho trung tkb
                {
                    toastr["error"](trungTKBKChoPhep);
                    toggleSelectRow(maDK, false);
                    document.body.disabled = "";
                    document.body.style.cursor = "default";
                    isProcessing = false;
                }
            } else if (resArr[10]) // Warning co so
            {
                if (resArr[11]) // Xet khac co so, 0 la chi canh bao
                {
                    if (confirm(resArr[10])) {
                        isValidCoso = true;
                        toggleSelectRow(maDK, true);
                        EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                    } else {
                        toggleSelectRow(maDK, false);
                        document.body.disabled = "";
                        document.body.style.cursor = "default";
                        isProcessing = false;
                    }
                } else if (resArr[11] == "1") // 1 la cam dang ky ko cho luu
                {
                    toggleSelectRow(maDK, false);
                    toastr["error"](resArr[10]);
                    document.body.disabled = "";
                    document.body.style.cursor = "default";
                    isProcessing = false;
                }
            }
            // edit 26.7.2010
            else if (resArr[24] != "") // trung thoi khoa bieu trong lich thi
            {
                if (resArr[24] == "khongchotrung") {
                    toastr["error"](errorTrungLichThiCam);
                    toggleSelectRow(maDK, false);
                    document.body.disabled = "";
                    document.body.style.cursor = "default";
                    isProcessing = false;
                } else if (resArr[24] == "choluachon") {
                    var strAlert = errorTrungLichThiLuaChon;
                    if (confirm(strAlert)) {
                        toggleSelectRow(maDK, true);
                        if (oldMaDK)
                            toggleSelectRow(oldMaDK, false);
                        EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                    } else {
                        toggleSelectRow(maDK, false);
                        document.body.disabled = "";
                        document.body.style.cursor = "default";
                        isProcessing = false;
                    }
                } else {
                    toastr["error"](errorTrungLichThiVuot + resArr[24]);
                    toggleSelectRow(maDK, false);
                    document.body.disabled = "";
                    document.body.style.cursor = "default";
                    isProcessing = false;
                }
            } else {
                if (resArr[0] == 0) {
                    if (MonSH) {
                        toastr["error"](MonSH);
                    }
                    toggleSelectRow(maDK, isChecked);
                    EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                } else {
                    toggleSelectRow(maDK, true);
                    toggleSelectRow(oldMaDK, false);
                    EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(isValidCoso, isValidTKB, resArr[1], resArr[12], resArr[13], resArr[14], resArr[15], resArr[16], isChecked.toString(), oldMaDK, resArr[25], resArr[26], resArr[27], isMHDangKyCungKhoiSV, toDKSelectedChange_callback2);

                }
            }
        }
    }
}

function toDKSelectedChange(o) {
    document.body.disabled = "false";
    document.getElementById("IDchk_all").checked = false;
    var arr = o.value.split("|");
    EduSoft.Web.UC.DangKyMonHoc.DangKySelectedChange(true, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11], arr[12], toDKSelectedChange_callback);
}

function ShowTatCaTDK_callback(doituongTDK) {
    try {
        document.body.style.cursor = 'default';
        if (doituongTDK == null)
            document.getElementById("divTDK").innerHTML = textKhongMoMH;
        else
            document.getElementById("divTDK").innerHTML = doituongTDK.value;
        var monHocLoc = document.getElementById("txtMaMH1");
        monHocLoc.value = "";
        var txtKhoa = document.getElementById("txtKhoa");
        if (txtKhoa != null)
            txtKhoa.value = "";
        var txtLop = document.getElementById("txtLop");
        if (txtLop != null)
            txtLop.value = "";
    }
    catch (err) {
    }
    appendGuiAutoDK(); //Sau khi lọc môn học thì thêm element copy vào #divTDK
}

// End overide some function in html DOM//

function appendGuiAutoDK() {
    try {
        if ($("#pnlDSMonhocDK")[0]) {
            $("table.title-table")[0].getElementsByTagName("tbody")[0].childNodes[0].getElementsByTagName("td")[0].setAttribute("width", "50px");
            if ($("#AUTODK")[0] == null) {
                $('#pnlDSMonhocDK')['append']('<div style="margin-top: 5px"><div><span class="d-block p-2 bg-success text-white" id="AUTODK" style="font-size:14px;font-weight:bold;">AUTO ĐĂNG KÍ</span></div><div><span style="width:110px;margin-left:5px;font-size:15px">Điền Value môn học:</span></div><div><textarea class="form-control" placeholder="Nhập vào đây value của các môn học, mỗi môn một dòng" style="margin-left:5px; width: 600px; height: 100px; resize: both;font-size:12px" id="subject" rows="4"></textarea></div> <div style="margin-left:5px;margin-top:5px"> <input type="checkbox" id="tudongluudk" checked=""> <label>Tự động lưu kết quả khi chọn xong tất cả các môn</label> </div><div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để chọn môn nhanh" id="btndangkymon" onclick="fastDK()">Chọn môn</button><button type="button" class="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để lưu kết quả đăng kí" id="btnluumon" onclick="LuuDanhSachDangKy()" style="margin-left:5px">Lưu kết quả</button></div> <div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để găm môn" id="autoDK" onclick="autoGamMon()">AutoDK</button> <span>sau mỗi</span>&nbsp;<input type="number" id="timeAuto" name="timeAuto" min="1" step="1" value="3" style="border-color: initial;max-width: 48px;text-align: center;">&nbsp;<span>giây</span><a></a></div><div style="margin-top:2px;margin-left:5px;font-size:14px">Hướng dẫn: Nhấn nút copy trước môn học cần đăng kí để sao chép value môn học rồi dán vào ô Điền Value môn học mỗi môn một dòng sau đó nhấn chọn môn để tool tự động chọn môn, kiểm tra danh sách môn đã chọn đã cập nhật hết số môn chưa, nếu rồi thì nhấn nút lưu để chọn môn.</div><div><span style="margin-left:5px;font-size:14px">Cần hỗ trợ liên hệ hãy vào group hỗ trợ </span><a style="font-size:14px" href="https://www.facebook.com/groups/165556974833741/" target="_blank">tại đây</a></div></div>');
            }
            if (document.getElementsByClassName("btnCopyValuethis").length == 0) {
                $('input').each(function () {
                    if ($(this).attr('disabled')) {
                        $(this).removeAttr('disabled');
                    }
                });
                var tableTDK = $("#divTDK")[0];
                var allChBox = tableTDK.querySelectorAll('input[type=checkbox]');
                var i;
                for (i = 0; i < allChBox.length; i++) {
                    //Create button copyValue
                    var copySelect = document.createElement("input");
                    copySelect.setAttribute("onclick", "copyValueThis(this)");
                    copySelect.setAttribute("class", "btn btn-primary btn-sm btnCopyValuethis");
                    copySelect.setAttribute("style", "margin-top:2px");
                    copySelect.setAttribute("type", "button");
                    copySelect.setAttribute("value", "Copy");

                    //Add button before checkbox
                    allChBox[i].parentNode.append(copySelect);
                }
            }
        }

    } catch (err) {
    }
}

function copyValueThis(object) {
    try {
        let textArea = document.createElement("textarea");
        let checkBox = object.parentNode.firstChild;
        textArea.value = checkBox.value;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        toastr["success"]("Đã copy giá trị môn học");
    } catch (err) {
    }
}

var autoInterval = 0;

function autoGamMon(){
    $('#tudongluudk')[0].checked = true;
    if(autoInterval){
        clearInterval(autoInterval);
        autoInterval = 0;
        $("#autoDK").attr("class", "btn btn-primary btn-sm");
        $("#autoDK").html("Auto ĐK");
    }else {
        var timeAuto = $("#timeAuto").val() * 1000;
        autoInterval = setInterval(fastDK, timeAuto < 1000 ? 1000 : timeAuto);
        $("#autoDK").attr("class", "btn btn-danger btn-sm");
        $("#autoDK").html("Stop");
        toastr["success"]("Bắt đầu tự động găm môn");
    }
}

function fastDK() {
    dsmonhoc = $('#subject').val();
    if(dsmonhoc.trim().length==0){
        toastr["error"]("Danh sách môn trống");
        return;
    }
    coursespos = 0;
    monhocArr = dsmonhoc.split('\n');
    fastDKOSB(monhocArr[coursespos]);
}

function fastDKOSB(valueMon) {
    let mamonhoc = valueMon.split("|")[1];
    if ($("#divKQ")[0].outerHTML.includes(mamonhoc)) { //kiểm tra đã lưu/chọn được môn chưa.
        toastr["info"]("Bỏ qua môn thứ " + (coursespos + 1));
        if (coursespos < monhocArr.length - 1) { // nếu chưa chọn hết môn  
            coursespos++; // chuyển sang môn tiếp theo
            fastDKOSB(monhocArr[coursespos]);
        } else { // đã chọn hết môn thì lưu hoặc đưa ra thông báo
            if ($("#tudongluudk")[0].checked == true)
                LuuDanhSachDangKy();
            else
                toastr["success"]("Đã chọn tất cả các môn! Bấm lưu đăng kí thật nhanh nào!");
        }
    }
    else { // chưa lưu/chọn thì chọn môn
        let arr = valueMon.split("|");
        EduSoft.Web.UC.DangKyMonHoc.DangKySelectedChange(true, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11], arr[12], toDKSelectedChange_callback);    
    }
}


if (document.title.includes("Failed to load viewstate")) {
    window.open("Default.aspx?page=dangnhap", "_self");
}

appendGuiAutoDK();