//Kiểm tra số môn
var monhocArr = [];
var coursespos = 0;
var inAutoDKMode = false;

if(location.href.includes("dktool")){
    // inject panel đăng ký
    $(".base > table > tbody > tr")[1].innerHTML = " <td height='500px' valign='top'> <style type='text/css'> #dhtmltooltip{position: absolute; padding: 2px; visibility: hidden; z-index: 100;}.style1{width: 814px;}.style2{width: 68px;}.style3{width: 1252px;}#Select1{height: 66px; width: 238px;}#selectMonHoc1{width: 352px; height: 63px;}</style><div id='dhtmltooltip' style='background-image: url(&quot;App_Themes/Standard/Images/tooltip.png&quot;); text-align: center; left: -1000px; top: 463px; visibility: hidden;'><table cellpadding='0' border='0' cellspacing='0' style='text-align:left;font-size:10pt;font-family:tahoma;background-color:#2E6C92; color:White; '><tbody><tr height='20px'><td align='center'>29/06/2020--05/07/2020</td></tr></tbody></table></div><div id='ctl00_ContentPlaceHolder1_ctl00_UpdatePanel2'> <div id='divfilters' class='filters' visible='false'> <table> <tbody><tr> <td> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlLocMonHoc'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblLocMH' style='display:inline-block;width:110px;'>Lọc Theo Môn Học</span> <input type='text' id='txtMaMH1' onkeypress='txtMaMH1_keypress(event)'> <input type='button' value='Lọc >>' id='btnLocTheoMaMH1' onclick='btnLocTheoMaMH1_click()'> </div></td></tr><tr> <td valign='top'> </td></tr></tbody></table> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlThongbao'> </div><table id='pnlDSMonhocDK'> <tbody><tr> <td align='center'> <div align='left'> <table cellspacing='0' cellpadding='0' class='title-table'> <tbody><tr align='center' height='30px'> <td width='50px'><asp:label id='lblG1DK' runat='server'> </asp:label> </td><td width='56px'><asp:label id='lblG1MMH' runat='server'>Mã MH</asp:label></td><td width='170px'><asp:label id='lblG1TMH' runat='server'>Tên môn học </asp:label></td><td width='35px'><asp:label id='lblG1NMM' runat='server'>NMH</asp:label></td><td width='35px'><asp:label id='lblG1TTH' runat='server'>TTH</asp:label></td><td width='25px'><asp:label id='lblG1STC' runat='server'>STC</asp:label></td><td width='35px'><asp:label id='lblG1STCHP' runat='server'>STCHP</asp:label></td><td width='90px'><asp:label id='lblG1MaLop' runat='server'>Mã lớp</asp:label></td><td width='28px'><asp:label id='lblG1SCP' runat='server'>Sĩ số</asp:label></td><td width='28px'><asp:label id='lblG1CL' runat='server'>CL</asp:label></td><td width='20px'><asp:label id='lblG1TH' runat='server'>TH</asp:label></td><td width='35px'><asp:label id='lblG1Thu' runat='server'>Thứ </asp:label></td><td width='40px'><asp:label id='lblG1TBD' runat='server'>Tiết BD</asp:label></td><td width='30px'><asp:label id='lblG1ST' runat='server'>ST</asp:label></td><td width='60px'><asp:label id='lblG1Phong' runat='server'>Phòng</asp:label> </td><td width='100px'><asp:label id='lblG1TenGV' runat='server'>Giảng viên</asp:label> </td><td><asp:label id='lblG1Tuan' runat='server'>Tuần</asp:label></td></tr></tbody></table> </div><div style='height: 320px' class='grid-roll'> <div id='divTDK'></div></div></td></tr></tbody></table> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlDaChon'> <div style='margin-top: 5px;' id='titleDSDK'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblDaChon' class='Label' style='font-size:14px;font-weight:bold;'>DANH SÁCH MÔN HỌC ĐÃ CHỌN</span> <table cellspacing='0' cellpadding='0' class='title-table'><tbody><tr><td colspan='11' align='right' style='background-color:#6699FF;height:5px;'><input type='button' id='btnLuu' value='LƯU CÁC MÔN ĐÃ CHỌN ĐĂNG KÝ &amp; XÓA' onclick='LuuDanhSachDangKy()'> </td><td align='center' style='background-color:#6699FF;height:5px;'> <input type='button' id='bntXoaChon' value='Xóa' onclick='xoaTuDanhSach(this.form.chk_xoa, false)'> </td></tr><tr align='center'> <td style='width: 30px;'><asp:label id='lblG2STT' runat='server'>STT</asp:label></td><td style='display:none'><asp:label id='lblG2MaDK' runat='server'>Regis ID </asp:label></td><td style='width: 56px;'><asp:label id='lblG2MMH' runat='server'>Mã MH </asp:label></td><td style='width: 180px;'><asp:label id='lblG2TMH' runat='server'>Tên môn học </asp:label></td><td style='width: 35px;'><asp:label id='lblG2NMH' runat='server'>NMH </asp:label></td><td style='width: 45px;'><asp:label id='lblG2TTH' runat='server'>TTH </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STC' runat='server'>STC </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STCHP' runat='server'>STCHP </asp:label></td><td style='width: 80px;'><asp:label id='lblG2HP' runat='server'>Học Phí</asp:label></td><td style='width: 80px;'><asp:label id='lblG2MG' runat='server'>Miễn Giảm</asp:label></td><td style='width: 80px;'><asp:label id='lblG2PD' runat='server'>Phải Đóng</asp:label></td><td><asp:label id='lblG2TrangThai' runat='server'>Trạng Thái môn học </asp:label></td><td align='left' style='width:50px;'><input type='checkbox' id='IDchk_all' name='chk_all' onclick='check(this.form.chk_xoa);'></td></tr></tbody></table> </div><div id='divTemp' class='grid-roll' style='height: 240px'> <div id='divKQ'></div></div><br><strong> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNote' class='Label'>Ghi chú: ĐK: đăng ký; Mã MH: mã môn học; NMH: Nhóm môn học; TTH: Tổ thực hành; STC: Số tín chỉ; STCHP: Số tín chỉ học phí; CL: Còn lại; TH: Thực hành</span> </strong> <br></div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlDanhGia'> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVong'> <br><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVongSV'> </div><table> <tbody><tr> <td width='530px'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNguyenVong'>Sinh viên đăng ký vào đây các môn hết chỗ hoặc các môn không được mở</span> <input type='text' id='IDtxtMonNV' name='txtMonNV' style='width: 100px' onkeypress='IDtxtMonNV_keypress(event)' onkeyup='IDtxtMonNV_blur(this)'> </td><td width='200px'> <div id='divToNhomNguyenVong'> </div></td><td align='left'> <input type='button' id='butLuuNV' value='Lưu' '='' onclick='LuuNguyenVong_Click()'> <input type='button' id='btbXemTatCaMNV' value='Xem danh sách đã yêu cầu' onclick='XemMonNV()'> </td></tr></tbody></table> </div></div></td>";
" <td height='500px' valign='top'> <style type='text/css'> #dhtmltooltip{position: absolute; padding: 2px; visibility: hidden; z-index: 100;}.style1{width: 814px;}.style2{width: 68px;}.style3{width: 1252px;}#Select1{height: 66px; width: 238px;}#selectMonHoc1{width: 352px; height: 63px;}</style><div id='dhtmltooltip' style='background-image: url(&quot;App_Themes/Standard/Images/tooltip.png&quot;); text-align: center; left: -1000px; top: 463px; visibility: hidden;'><table cellpadding='0' border='0' cellspacing='0' style='text-align:left;font-size:10pt;font-family:tahoma;background-color:#2E6C92; color:White; '><tbody><tr height='20px'><td align='center'>29/06/2020--05/07/2020</td></tr></tbody></table></div><div id='ctl00_ContentPlaceHolder1_ctl00_UpdatePanel2'> <div id='divfilters' class='filters' visible='false'> <table> <tbody><tr> <td> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlLocMonHoc'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblLocMH' style='display:inline-block;width:110px;'>Lọc Theo Môn Học</span> <input type='text' id='txtMaMH1' onkeypress='txtMaMH1_keypress(event)'> <input type='button' value='Lọc >>' id='btnLocTheoMaMH1' onclick='btnLocTheoMaMH1_click()'> </div></td></tr><tr> <td valign='top'> </td></tr></tbody></table> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlThongbao'> </div><table id='pnlDSMonhocDK'> <tbody><tr> <td align='center'> <div align='left'> <table cellspacing='0' cellpadding='0' class='title-table'> <tbody><tr align='center' height='30px'> <td width='50px'><asp:label id='lblG1DK' runat='server'> </asp:label> </td><td width='56px'><asp:label id='lblG1MMH' runat='server'>Mã MH</asp:label></td><td width='170px'><asp:label id='lblG1TMH' runat='server'>Tên môn học </asp:label></td><td width='35px'><asp:label id='lblG1NMM' runat='server'>NMH</asp:label></td><td width='35px'><asp:label id='lblG1TTH' runat='server'>TTH</asp:label></td><td width='25px'><asp:label id='lblG1STC' runat='server'>STC</asp:label></td><td width='35px'><asp:label id='lblG1STCHP' runat='server'>STCHP</asp:label></td><td width='90px'><asp:label id='lblG1MaLop' runat='server'>Mã lớp</asp:label></td><td width='28px'><asp:label id='lblG1SCP' runat='server'>Sĩ số</asp:label></td><td width='28px'><asp:label id='lblG1CL' runat='server'>CL</asp:label></td><td width='20px'><asp:label id='lblG1TH' runat='server'>TH</asp:label></td><td width='35px'><asp:label id='lblG1Thu' runat='server'>Thứ </asp:label></td><td width='40px'><asp:label id='lblG1TBD' runat='server'>Tiết BD</asp:label></td><td width='30px'><asp:label id='lblG1ST' runat='server'>ST</asp:label></td><td width='60px'><asp:label id='lblG1Phong' runat='server'>Phòng</asp:label> </td><td width='100px'><asp:label id='lblG1TenGV' runat='server'>Giảng viên</asp:label> </td><td><asp:label id='lblG1Tuan' runat='server'>Tuần</asp:label></td></tr></tbody></table> </div><div style='height: 320px' class='grid-roll'> <div id='divTDK'></div></div></td></tr></tbody></table> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlDaChon'> <div style='margin-top: 5px;' id='titleDSDK'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblDaChon' class='Label' style='font-size:14px;font-weight:bold;'>DANH SÁCH MÔN HỌC ĐÃ CHỌN</span> <table cellspacing='0' cellpadding='0' class='title-table'><tbody><tr><td colspan='11' align='right' style='background-color:#6699FF;height:5px;'><input type='button' id='btnLuu' value='LƯU CÁC MÔN ĐÃ CHỌN ĐĂNG KÝ &amp; XÓA' onclick='LuuDanhSachDangKy()'> </td><td align='center' style='background-color:#6699FF;height:5px;'> <input type='button' id='bntXoaChon' value='Xóa' onclick='xoaTuDanhSach(this.form.chk_xoa, false)'> </td></tr><tr align='center'> <td style='width: 30px;'><asp:label id='lblG2STT' runat='server'>STT</asp:label></td><td style='display:none'><asp:label id='lblG2MaDK' runat='server'>Regis ID </asp:label></td><td style='width: 56px;'><asp:label id='lblG2MMH' runat='server'>Mã MH </asp:label></td><td style='width: 180px;'><asp:label id='lblG2TMH' runat='server'>Tên môn học </asp:label></td><td style='width: 35px;'><asp:label id='lblG2NMH' runat='server'>NMH </asp:label></td><td style='width: 45px;'><asp:label id='lblG2TTH' runat='server'>TTH </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STC' runat='server'>STC </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STCHP' runat='server'>STCHP </asp:label></td><td style='width: 80px;'><asp:label id='lblG2HP' runat='server'>Học Phí</asp:label></td><td style='width: 80px;'><asp:label id='lblG2MG' runat='server'>Miễn Giảm</asp:label></td><td style='width: 80px;'><asp:label id='lblG2PD' runat='server'>Phải Đóng</asp:label></td><td><asp:label id='lblG2TrangThai' runat='server'>Trạng Thái môn học </asp:label></td><td align='left' style='width:50px;'><input type='checkbox' id='IDchk_all' name='chk_all' onclick='check(this.form.chk_xoa);'></td></tr></tbody></table> </div><div id='divTemp' class='grid-roll' style='height: 240px'> <div id='divKQ'></div></div><br><strong> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNote' class='Label'>Ghi chú: ĐK: đăng ký; Mã MH: mã môn học; NMH: Nhóm môn học; TTH: Tổ thực hành; STC: Số tín chỉ; STCHP: Số tín chỉ học phí; CL: Còn lại; TH: Thực hành</span> </strong> <br></div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlDanhGia'> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVong'> <br><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVongSV'> </div><table> <tbody><tr> <td width='530px'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNguyenVong'>Sinh viên đăng ký vào đây các môn hết chỗ hoặc các môn không được mở</span> <input type='text' id='IDtxtMonNV' name='txtMonNV' style='width: 100px' onkeypress='IDtxtMonNV_keypress(event)' onkeyup='IDtxtMonNV_blur(this)'> </td><td width='200px'> <div id='divToNhomNguyenVong'> </div></td><td align='left'> <input type='button' id='butLuuNV' value='Lưu' '='' onclick='LuuNguyenVong_Click()'> <input type='button' id='btbXemTatCaMNV' value='Xem danh sách đã yêu cầu' onclick='XemMonNV()'> </td></tr></tbody></table> </div></div></td>"

    // inject /ajaxpro/EduSoft.Web.UC.DangKyMonHoc,EduSoft.Web.ashx
    if(typeof EduSoft == "undefined") EduSoft={};
    if(typeof EduSoft.Web == "undefined") EduSoft.Web={};
    if(typeof EduSoft.Web.UC == "undefined") EduSoft.Web.UC={};
    EduSoft.Web.UC.DangKyMonHoc_class = function() {};
    Object.extend(EduSoft.Web.UC.DangKyMonHoc_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
        ThayDoiLoaiDK: function(madk, loai) {
            return this.invoke("ThayDoiLoaiDK", {"madk":madk, "loai":loai}, this.ThayDoiLoaiDK.getArguments().slice(2));
        },
        DangKySelectedChange: function(check, maDK, maMH, tenMH, maNh, sotc, strSoTCHP, ngaythistr, tietbd, sotiet, soTCTichLuyToiThieuMonYeuCau, choTrung, soTCMinMonYeuCau, maKhoiSinhVien) {
            return this.invoke("DangKySelectedChange", {"check":check, "maDK":maDK, "maMH":maMH, "tenMH":tenMH, "maNh":maNh, "sotc":sotc, "strSoTCHP":strSoTCHP, "ngaythistr":ngaythistr, "tietbd":tietbd, "sotiet":sotiet, "soTCTichLuyToiThieuMonYeuCau":soTCTichLuyToiThieuMonYeuCau, "choTrung":choTrung, "soTCMinMonYeuCau":soTCMinMonYeuCau, "maKhoiSinhVien":maKhoiSinhVien}, this.DangKySelectedChange.getArguments().slice(14));
        },
        LuuVaoKetQuaDangKy: function(isValidCoso, isValidTKB, maDK, maMH, sotc, tenMH, maNh, strsoTCHP, isCheck, oldMaDK, strngayThi, tietBD, soTiet, isMHDangKyCungKhoiSV) {
            return this.invoke("LuuVaoKetQuaDangKy", {"isValidCoso":isValidCoso, "isValidTKB":isValidTKB, "maDK":maDK, "maMH":maMH, "sotc":sotc, "tenMH":tenMH, "maNh":maNh, "strsoTCHP":strsoTCHP, "isCheck":isCheck, "oldMaDK":oldMaDK, "strngayThi":strngayThi, "tietBD":tietBD, "soTiet":soTiet, "isMHDangKyCungKhoiSV":isMHDangKyCungKhoiSV}, this.LuuVaoKetQuaDangKy.getArguments().slice(14));
        },
        XoaKQDKTheoMaDK: function(danhSachMaDangKy) {
            return this.invoke("XoaKQDKTheoMaDK", {"danhSachMaDangKy":danhSachMaDangKy}, this.XoaKQDKTheoMaDK.getArguments().slice(1));
        },
        KiemTraTrungNhom: function() {
            return this.invoke("KiemTraTrungNhom", {}, this.KiemTraTrungNhom.getArguments().slice(0));
        },
        LuuDanhSachDangKy: function() {
            return this.invoke("LuuDanhSachDangKy", {}, this.LuuDanhSachDangKy.getArguments().slice(0));
        },
        LuuDanhSachDangKy_HopLe: function(isCheckSongHanh, ChiaHP) {
            return this.invoke("LuuDanhSachDangKy_HopLe", {"isCheckSongHanh":isCheckSongHanh, "ChiaHP":ChiaHP}, this.LuuDanhSachDangKy_HopLe.getArguments().slice(2));
        },
        LuuNguyenVong: function(maMonHoc, maNhom, maTo, buoi) {
            return this.invoke("LuuNguyenVong", {"maMonHoc":maMonHoc, "maNhom":maNhom, "maTo":maTo, "buoi":buoi}, this.LuuNguyenVong.getArguments().slice(4));
        },
        ShowTatCaTDK: function() {
            return this.invoke("ShowTatCaTDK", {}, this.ShowTatCaTDK.getArguments().slice(0));
        },
        LocTheoMonHoc: function(dkLoc) {
            return this.invoke("LocTheoMonHoc", {"dkLoc":dkLoc}, this.LocTheoMonHoc.getArguments().slice(1));
        },
        LoadChuongTrinhDaoTaoHeNganh: function() {
            return this.invoke("LoadChuongTrinhDaoTaoHeNganh", {}, this.LoadChuongTrinhDaoTaoHeNganh.getArguments().slice(0));
        },
        LoadChuongTrinhDaoTaoKhoiLop: function() {
            return this.invoke("LoadChuongTrinhDaoTaoKhoiLop", {}, this.LoadChuongTrinhDaoTaoKhoiLop.getArguments().slice(0));
        },
        LoadDanhSachKhoaLop: function() {
            return this.invoke("LoadDanhSachKhoaLop", {}, this.LoadDanhSachKhoaLop.getArguments().slice(0));
        },
        LocTheoMaKhoa: function(isKhoa, maKhoaLop, dk) {
            return this.invoke("LocTheoMaKhoa", {"isKhoa":isKhoa, "maKhoaLop":maKhoaLop, "dk":dk}, this.LocTheoMaKhoa.getArguments().slice(3));
        },
        LocTheoCTDTHeNganh: function(maHDT, MaNganh) {
            return this.invoke("LocTheoCTDTHeNganh", {"maHDT":maHDT, "MaNganh":MaNganh}, this.LocTheoCTDTHeNganh.getArguments().slice(2));
        },
        LocTheoCTDTKhoiLop: function(maKhoi) {
            return this.invoke("LocTheoCTDTKhoiLop", {"maKhoi":maKhoi}, this.LocTheoCTDTKhoiLop.getArguments().slice(1));
        },
        LocTheoMHTuChon: function() {
            return this.invoke("LocTheoMHTuChon", {}, this.LocTheoMHTuChon.getArguments().slice(0));
        },
        ShowDSDaDangKy: function() {
            return this.invoke("ShowDSDaDangKy", {}, this.ShowDSDaDangKy.getArguments().slice(0));
        },
        LoadNhomTo: function(maMH) {
            return this.invoke("LoadNhomTo", {"maMH":maMH}, this.LoadNhomTo.getArguments().slice(1));
        },
        url: '/ajaxpro/EduSoft.Web.UC.DangKyMonHoc,EduSoft.Web.ashx'
    }));
    EduSoft.Web.UC.DangKyMonHoc = new EduSoft.Web.UC.DangKyMonHoc_class();

    // inject những script có trong trang đăng ký học

    function MessUpdate(mess) {
        var mes = mess
        alert(mes)
    }
    
    function disableSelection(target) {
        if (typeof target.onselectstart != "undefined") //IE route
            target.onselectstart = function () { return false }
        else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
            target.style.MozUserSelect = "none"
        else //All other route (ie: Opera)
            target.onmousedown = function () { return false }
        target.style.cursor = "default"
    }
    
    
    // declare variable
    var sumCheck = 0;
    var checkflag = "false";
    var vuotTC;
    var trungTKBChoPhep;
    var trungTKBKChoPhep;
    var xoaKhongHopLe;
    var confirmXoa;
    var confirmXoaTatCa;
    var nhapDKLoc;
    var serverBusy;
    var hinhThucDongHP;
    var hoiDongHP;
    var trungMonNC;
    var waitingCheck;
    var errorOutOffTime;
    var errorChuyenNganhChinh;
    var errorChuyenNganhChuyenSau;
    var errorCaiThienDiemD;
    var errorCaiThienHocKy;
    var errorMucDoTrungTKB0;
    var errorMucDoTrungTKB1;
    var errorTrungLichThiCam;
    var errorTrungLichThiLuaChon;
    var errorTrungLichThiVuot;
    var textKhongTheXoa;
    var textKhongMoMH;
    var errorGioiHanSTC;
    var errorGioiHanSoTCThayDoi;
    var isProcessing = false;
    
    function EndProcessing_Callback(data) { }
    
    function toggleSelectRow1(maDK, isSelect) {
        var chk = document.getElementById(maDK);
        chk.checked = isSelect;
        var row = chk.parentNode.parentNode;
        row.style.backgroundColor = (isSelect ? "#CCCCCC" : "White");
    }
    
    function CheckToDelete_CheckedChanged(maDK) {
        if (maDK.checked == true)
            sumCheck = sumCheck + 1;
        else {
            if (checkflag == "true") {
                document.getElementById("IDchk_all").checked = false;
            }
            sumCheck = sumCheck - 1;
        }
    }
    
    function check(field) {
        checkflag = document.getElementById("IDchk_all").checked.toString();
        try {
            if (checkflag == "false" && field.name == "chk_xoa") {
                field.checked = false;
                sumCheck = sumCheck - 1;
            }
            else if (checkflag == "true" && field.name == "chk_xoa") {
                field.checked = true;
                sumCheck = sumCheck + 1;
            }
            else if (checkflag == "false") {
                for (i = 0; i < field.length; i++) {
                    field[i].checked = false;
                    sumCheck = sumCheck - 1;
                }
            }
            else {
                for (i = 0; i < field.length; i++) {
                    field[i].checked = true;
                    sumCheck = sumCheck + 1;
                }
            }
        }
        catch (e) { }
    }
    
    function xoaTuDanhSach(field, isRut) {
        checkflag = document.getElementById("IDchk_all").checked.toString();
        if (sumCheck == 0) {
            alert(xoaKhongHopLe);
            document.getElementById("IDchk_all").checked = false;
            return false;
        }
        else {
            var question = confirmXoa;
            if (checkflag == "true")
                question = confirmXoaTatCa;
            if (isRut || confirm(question)) {
                document.body.style.cursor = 'wait';
                var lr = "";
                var lh = "";
                var danhSachBiXoa = "";
                if (field.name == "chk_xoa" && field.checked == true)// chi dang ky mot mon hoc
                {
                    toggleSelectRow1(field.id, false);
                    sumCheck = sumCheck - 1;
                    danhSachBiXoa = danhSachBiXoa + "," + field.id.substr(4);
                }
                else// dang ky nhieu mon hoc
                {
    
                    for (i = 0; i < field.length; i++) {
                        if (field[i].checked == true) {
    
                            toggleSelectRow1(field[i].id, false);
                            sumCheck = sumCheck - 1;
                            danhSachBiXoa = danhSachBiXoa + "," + field[i].id.substr(4);
                        }
                    }
                }
                if (lr != "")
                    lr = "Rút môn học: " + lr.substr(1, lr.length - 1) + "\n";
                if (lh != "")
                    lr += "Hủy rút môn học đã rút: " + lh.substr(1, lh.length - 1) + "\n";
                lr += 'Đồng ý?';
                if (!isRut || confirm(lr))
                    EduSoft.Web.UC.DangKyMonHoc.XoaKQDKTheoMaDK(danhSachBiXoa, XoaKQDKTheoMaDK_CallBack);
                else
                    document.body.style.cursor = 'default';
            }
            return false;
        }
    }
    function XoaKQDKTheoMaDK_CallBack(doituong) {
        var x = doituong.value;
        if (x == "1") {
            document.body.style.cursor = 'default';
            window.location = "default.aspx?page=dkmonhoc";
            return false;
        }
        if (x == "0") {
            alert(textKhongTheXoa);
            document.body.style.cursor = 'default';
            return false;
        }
        else {
    
            // kiem tra có những môn xóa kèm (bắt buộc song hành)
            var dsXoaKem = x.split("MonXoaKem")[1];
            if (dsXoaKem == "1") {
                alert(errorGioiHanSoTCThayDoi);
            }
            else if (dsXoaKem) {
                var lstXoaKem = dsXoaKem.split("|");
                for (var i = 0; i < lstXoaKem.length; i++) {
                    toggleSelectRow(lstXoaKem[i], false);
                }
            }
            var dsDaChon = x.split("MonXoaKem")[0];
            if (dsDaChon.length > 23) {
                //            edit 14.1.2010, code cu: doituong.value=x.substring(19,x.length- 26);
                doituong.value = dsDaChon.substring(19, x.length - 6);
                document.getElementById("divKQ").innerHTML = doituong.value;
            }
            else {
                document.getElementById("divKQ").innerHTML = "";
            }
            document.getElementById("IDchk_all").checked = false;
            document.body.style.cursor = 'default';
        }
    }
    function deselectAll() {
        var ctrls = document.getElementsByTagName("input");
        for (var i = 0; i < ctrls.length; i++) {
            if (ctrls[i].type == "checkbox" && ctrls[i].checked && ctrls[i].disabled == false) {
                var chk = ctrls[i];
                var maDK = chk.id.split("_")[1];
                toggleSelectRow(maDK, false);
            }
        }
    }
    
    function LuuNguyenVong_Click() {
        var maMH = document.getElementById("IDtxtMonNV").value;
        var buoi = '0';
        var maNh = "";
        var maTo = "";
        if (document.getElementById("selectToNhom")) {
            var selectmenu = document.getElementById("selectToNhom");
            var chosenOption = selectmenu.options[selectmenu.selectedIndex].value;
            var nhomto = chosenOption.split('|');
            if (nhomto.length > 0)
                maNh = nhomto[0];
            if (nhomto.length > 1)
                maTo = nhomto[1];
        }
        if (document.getElementById("selectBuoi")) {
            var cbo = document.getElementById("selectBuoi");
            buoi = cbo.options[cbo.selectedIndex].value;
        }
        EduSoft.Web.UC.DangKyMonHoc.LuuNguyenVong(maMH, maNh, maTo, buoi, LuuNguyenVong_callback);
    }
    function LuuNguyenVong_callback(valueReturn) {
        alert(valueReturn.value);
    }
    
    function getValue(v) {
        myVariable = v
        alert(myVariable)
    }
    
    
    function btnLocTheoMaMH1_click() {
        var monHocLoc = document.getElementById("txtMaMH1");
        if (monHocLoc.value == "") {
            alert(nhapDKLoc);
            return false;
        }
        else {
    
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoc(monHocLoc.value, ShowTatCaTDK_callback);
        }
    }
    
    
    function selectDKLoc_change() {
    
        var selectmenu = document.getElementById("selectDKLoc");
        var chosenOption = selectmenu.options[selectmenu.selectedIndex];
    
        var divChonKhoa = document.getElementById("divKhoa");
        var divChonLop = document.getElementById("divLop");
        var divChonNganh = document.getElementById("divNganh");
    
    
        if (chosenOption.value == "khoa") {
            //            var divChonKhoa=document.getElementById("divKhoa");
            //            var divChonLop = document.getElementById("divLop");
            if (divChonKhoa != null) {
                divChonKhoa.style.display = "block";
                divChonLop.style.display = "none";
                divChonNganh.style.display = "none";
            }
    
        }
        else if (chosenOption.value == "lop") {
            if (divChonKhoa != null) {
                divChonKhoa.style.display = "none";
                divChonLop.style.display = "block";
                divChonNganh.style.display = "none";
            }
        }
        else if (chosenOption.value == "nganh") {
            if (divChonKhoa != null) {
                divChonKhoa.style.display = "none";
                divChonNganh.style.display = "block";
                divChonLop.style.display = "none";
            }
        }
    
    }
    var mondphoc = 0;
    function LoadDSKhoaLop_load(ressControl) {
    
        var resArr = ressControl;
    
        if (ressControl != "") {
            resArr = ressControl.split("|");
    
            vuotTC = resArr[5];
            trungTKBChoPhep = resArr[6];
            trungTKBKChoPhep = resArr[7];
            xoaKhongHopLe = resArr[8];
            confirmXoa = resArr[9];
            confirmXoaTatCa = resArr[10];
            nhapDKLoc = resArr[11];
            serverBusy = resArr[12];
            hinhThucDongHP = resArr[13];
            hoiDongHP = resArr[14];
            trungMonNC = resArr[15];
            waitingCheck = resArr[16];
            errorOutOffTime = resArr[17];
            errorChuyenNganhChinh = resArr[18];
            errorChuyenNganhChuyenSau = resArr[19];
            errorCaiThienDiemD = "Môn học cải thiện không thỏa quy chế";//resArr[20];
            errorCaiThienHocKy = resArr[21];
            errorMucDoTrungTKB0 = resArr[22];
            errorMucDoTrungTKB1 = resArr[23];
            errorTrungLichThiCam = resArr[24];
            errorTrungLichThiLuaChon = resArr[25];
            errorTrungLichThiVuot = resArr[26];
            textKhongTheXoa = resArr[27];
            textKhongMoMH = resArr[28];
            errorGioiHanSTC = resArr[29];
            errorGioiHanSoTCThayDoi = resArr[30];
        }
        mondphoc = resArr[31];
        var divChonKhoa = document.getElementById("divKhoa");
        var divChonNganh = document.getElementById("divNganh");
        if (mondphoc == 1) {
            EduSoft.Web.UC.DangKyMonHoc.LoadChuongTrinhDaoTaoHeNganh(LoadDanhSachKhoaLop_callback);
        }
        else if (mondphoc == 2) {
            EduSoft.Web.UC.DangKyMonHoc.LoadChuongTrinhDaoTaoKhoiLop(LoadDanhSachKhoaLop_callback);
        }
        else {
            if (divChonKhoa != null) {
                divChonKhoa.style.display = "none";
                divChonNganh.style.display = "none";
            }
            EduSoft.Web.UC.DangKyMonHoc.LoadDanhSachKhoaLop(LoadDanhSachKhoaLop_callback);
        }
    }
    function LoadDanhSachKhoaLop_callback(doituong) {
        if (doituong != null) {
    
            if (doituong.value && doituong.value.length > 8 && doituong.value.substring(0, 8) == "BCVTVTHN") {
                doituong = doituong.value.replace("BCVTVTHN", "");
                if (document.getElementById("divMonHoc") != null) {
                    document.getElementById("divMonHoc").innerHTML = doituong;
                    document.getElementById("divfilters").style.height = "180px";
                }
            }
            else {
                if (mondphoc == 0 || mondphoc == 3 || mondphoc == 5 || mondphoc == 6) // 2-2-2010 , mdph = 3 => gioi han theo he dao tao
                {
                    var ress = doituong.value.split("|||||");
                    if (document.getElementById("divKhoa") != null)
                        document.getElementById("divKhoa").innerHTML = ress[0];
                    if (document.getElementById("divLop") != null)
                        document.getElementById("divLop").innerHTML = ress[1];
    
    
                    if (ress[2]) {
                        var resArr = ress[2].split("|");
                        var btnLocMH = document.getElementById("btnLocTheoMaMH1");
                        btnLocMH.value = resArr[0];
                        var btnLocKhoa = document.getElementById("btnKhoa");
                        if (btnLocKhoa != null)
                            btnLocKhoa.value = resArr[1];
                        var btnLocLop = document.getElementById("btnLop");
                        if (btnLocLop != null)
                            btnLocLop.value = resArr[1];
                        var btnLuuDK = document.getElementById("btnLuu");
                        btnLuuDK.value = resArr[2];
                        var btnXoaDK = document.getElementById("bntXoaChon");
                        btnXoaDK.value = resArr[3];
                        if (document.getElementById("butLuuNV") != null) {
                            var btnLuuNV = document.getElementById("butLuuNV");
                            btnLuuNV.value = resArr[4];
                        }
                    }
    
                    // edit 10/2/2011 , DHNL bổ sung thêm điều kiện lọc theo ngành
                    if (document.getElementById("divDanhSachDieuKienLoc") != null) {
                        document.getElementById("divDanhSachDieuKienLoc").innerHTML = ress[3];
                        selectDKLoc_change();
                    }
    
                    if (document.getElementById("divNganh") != null)
                        document.getElementById("divNganh").innerHTML = ress[4];
    
                    //end edit
                }
                else if (mondphoc == 1) // loc theo ctdt he nganh
                {
                    var ress = doituong.value.split("|||||");
                    document.getElementById("divLTCTHN1").innerHTML = ress[0];
                    document.getElementById("divLTCTHN2").innerHTML = ress[1];
                }
                else if (mondphoc == 2) {
                    document.getElementById("divLTCTKhoi").innerHTML = doituong.value;
                }
            }
        }
    }
    
    
    function selectMonHoc_changed() {
        var selectmenu = document.getElementById("selectMonHoc");
        var chosenOption = selectmenu.options[selectmenu.selectedIndex];
        if (chosenOption.value) {
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoc(chosenOption.value, ShowTatCaTDK_callback);
        }
    }
    
    function selectKhoa_changed() {
        var selectmenu = document.getElementById("selectKhoa");
        var chosenOption = selectmenu.options[selectmenu.selectedIndex];
        if (chosenOption.value != "") {
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(true, chosenOption.value, "", ShowTatCaTDK_callback);
        }
    }
    function selectLop_changed() {
        document.body.style.cursor = 'wait';
        var selectmenu = document.getElementById("selectLop");
        var chosenOption = selectmenu.options[selectmenu.selectedIndex];
        EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(false, chosenOption.value, "", ShowTatCaTDK_callback);
    }
    function btnXemTatCaTDK_click() {
        document.body.style.cursor = 'wait';
        EduSoft.Web.UC.DangKyMonHoc.ShowTatCaTDK(ShowTatCaTDK_callback);
    }
    function btnLop_click() {
        var maLop = document.getElementById("txtLop");
        if (maLop.value == "") {
            alert(nhapDKLoc);
            return false;
        }
        else {
            var selectmenu = document.getElementById("selectKhoa");
            var chosenOption = selectmenu.options[selectmenu.selectedIndex];
            var kh = "";
            if (chosenOption.visibility == 'visible')
                kh = chosenOption.value;
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(false, kh, maLop.value, ShowTatCaTDK_callback);
        }
    }
    function btnKhoa_click() {
        var maKhoa = document.getElementById("txtKhoa");
        if (maKhoa.value == "") {
            alert(nhapDKLoc);
            return false;
        }
        else {
            var selectmenu = document.getElementById("selectKhoa");
            var chosenOption = selectmenu.options[selectmenu.selectedIndex];
            var kh = "";
            if (chosenOption.visibility == 'visible')
                kh = chosenOption.value;
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(true, kh, maKhoa.value, ShowTatCaTDK_callback);
        }
    }
    function LuuDanhSachDangKy() {
        document.body.style.cursor = 'wait';
        EduSoft.Web.UC.DangKyMonHoc.KiemTraTrungNhom(KiemTraTrungNhom_callback)
    }

    function KiemTraTrungNhom_callback(trungnhom) {
        if (trungnhom.value == "") {
            EduSoft.Web.UC.DangKyMonHoc.LuuDanhSachDangKy(LuuDanhSachDangKy_callback)
        }
        else {
            alert(trungnhom.value);
            document.body.style.cursor = 'default';
            return false;
        }
    }
    
    function txtMaMH1_keypress(e) {
        var keyCode = (window.Event) ? e.which : e.keyCode;
        if (keyCode == 13) {
            document.body.style.cursor = 'wait';
            //document.getElementById("btnLocTheoMaMH1").click();
            btnLocTheoMaMH1_click();
        }
    }
    function txtLop_keypress(e) {
        var keyCode = (window.Event) ? e.which : e.keyCode;
        if (keyCode == 13) {
            document.body.style.cursor = 'wait';
            //document.getElementById("btnLop").click();
            btnLop_click();
        }
    }
    function txtKhoa_keypress(e) {
        var keyCode = (window.Event) ? e.which : e.keyCode;
        if (keyCode == 13) {
            document.body.style.cursor = 'wait';
            //document.getElementById("btnKhoa").click();
            btnKhoa_click();
        }
    }
    function IDtxtMonNV_keypress(e) {
        var keyCode = (window.Event) ? e.which : e.keyCode;
        if (keyCode == 13) {
            if (document.getElementById("butLuuNV") != null) {
                //document.getElementById("butLuuNV").click();
                LuuNguyenVong_Click();
            }
        }
    }
    
    function IDtxtMonNV_blur(textBox) {
        var maMH = textBox.value;
        if (maMH)
            EduSoft.Web.UC.DangKyMonHoc.LoadNhomTo(maMH, IDtxtMonNV_blur_callback);
    }
    
    function IDtxtMonNV_blur_callback(doituong) {
    
    
        if (doituong != null) {
            if (document.getElementById("divToNhomNguyenVong") != null)
                document.getElementById("divToNhomNguyenVong").innerHTML = doituong.value;
        }
    
    }
    
    
    
    function selectCTDTKL_changed() {
        var selectmenu = document.getElementById("selectCTDTKL");
        var chosenOption = selectmenu.options[selectmenu.selectedIndex];
        if (chosenOption.value != "") {
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTKhoiLop(chosenOption.value, ShowTatCaTDK_callback);
        }
    }
    
    function LocTheoMonTuChon() {
        var selectmenu = document.getElementById("selectCTDTKL");
        document.body.style.cursor = 'wait';
        EduSoft.Web.UC.DangKyMonHoc.LocTheoMHTuChon(ShowTatCaTDK_callback);
    }
    
    function LocMonChuaHoc() {
        document.body.style.cursor = 'wait';
        EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTHeNganh(null, null, ShowTatCaTDK_callback);
    }
    
    function LocMonHoclai() {
        document.body.style.cursor = 'wait';
        EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoclai(null, null, ShowTatCaTDK_callback);
    }
    
    function selectCTDTHN2_changed() {
        var selectmenu1 = document.getElementById("selectCTDTHN1");
        var selectmenu2 = document.getElementById("selectCTDTHN2");
        var chosenOption1 = selectmenu1 != null ? selectmenu1.options[selectmenu1.selectedIndex] : "";
        var chosenOption2 = selectmenu2 != null ? selectmenu2.options[selectmenu2.selectedIndex] : "";
        if (chosenOption2.value != "") {
            document.body.style.cursor = 'wait';
            EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTHeNganh(chosenOption1.value, chosenOption2.value, ShowTatCaTDK_callback);
        }
    }
    
    function LoadKhongHopLe(thongbao) {
    
        alert(thongbao);
        self.location = "Default.aspx?page=dangnhap";
    }
    function XemMonNV() {
        self.location = "Default.aspx?page=monnguyenvong";
    }
    
    function changeLoaiDK(cbo) {
        var madk = cbo.id.substring(2);
        EduSoft.Web.UC.DangKyMonHoc.ThayDoiLoaiDK(madk, cbo.value, changeLoaiDK_Callback);
    }
    
    function changeLoaiDK_Callback(obj) {
        if (obj.value == true)
            location.reload();
    }
    
    function setDefLoaiDK(idx, cbo) {
        if (idx > 0)
            cbo.selectedIndex = idx - 1;
    }

    
    window.open("default.aspx?page=dkmonhoc", '_blank'); // vào trang dkmonhoc (phải để trang hiện tại là dkmonhoc mới chọn đc môn)
}

//Chuyển alert thành toastr giúp xử lí khi alert hiện lên mà không bấm ok thì code không chạy tiếp 
window.alert = function (text) {
    toastr["info"](text);
    if (text.includes("Server đang tải lại dữ liệu"))
        setTimeout(function () { location.reload(); }, 500);
    return true;
};

// Overider some function in html DOM//

//Khi một môn được chọn thì update thông báo
function toDKSelectedChange_callback2(data) {
    var resArr = data.value.split("|");
    if (resArr[1] != "") { // xet song hanh
        toastr["info"](resArr[1]);
    }
    document.getElementById("divKQ").innerHTML = resArr[0];
    document.body.disabled = "";
    document.body.style.cursor = "default";
    isProcessing = false;
    toastr["success"]("Đã chọn môn học thứ " + (coursespos + 1));
    if(inAutoDKMode){
        coursespos++; // chuyển sang môn tiếp theo
        fastDKOSB();
    }
}

//check kết quả đăng kí để reload danh sách đăng kí
function LuuDanhSachDangKy_HopLe_callback(monHetCho) {
    var arr = monHetCho.value.split("||");
    document.body.style.cursor = 'default';
    if (arr.length == 1) {
        toastr["info"](arr[0]);
        EduSoft.Web.UC.DangKyMonHoc.ShowDSDaDangKy(ShowDSDaDangKy_Callback);
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
        EduSoft.Web.UC.DangKyMonHoc.ShowDSDaDangKy(ShowDSDaDangKy_Callback);
        toastr["success"]("Đã lưu kết quả! Hãy xem lại danh sách");
    }
}

function ShowDSDaDangKy_Callback(obj) {
    document.getElementById("divKQ").innerHTML = obj.value;
    document.body.style.cursor = 'default';
    if (gamMonMode) { // nếu đang ở chế độ găm môn thì kiểm tra đã đăng ký được hết chưa
        let isDone = true;
        for (let i = 0; i < monhocArr.length; i++) {
            let mamonhoc = monhocArr[i].split("|")[1];
            if (!$("#divKQ")[0].outerHTML.includes(mamonhoc)) { // nếu mã môn học chưa có trong danh sách đã đăng ký (sau khi bấm lưu mà không có slot thì môn cũng bị xóa khỏi danh sách chưa lưu vào CSDL)
                isDone = false;
                break;
            }
        }
        if (isDone) {
            toastr["success"]('Đã găm thành công tất cả các môn ok');
            $("#autoGam").click();
        }
        else{
            setTimeout(fastDK,timeAuto);
        }
    } else location.href = "#divKQ";
    return false;
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

            var strCanhBaoCTDTKhoi = resArr[38];

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
            else if (MonTQ) { // co vi pham tien quyet
                if (confirm(MonTQ + " bấm OK để đăng ký hoặc hủy để bỏ qua môn này")) {
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
                $('#pnlDSMonhocDK')['append']('<div style="margin-top: 5px"><div><span class="d-block p-2 bg-success text-white" id="AUTODK" style="font-size:14px;font-weight:bold;">AUTO ĐĂNG KÍ</span></div><div><span style="width:110px;margin-left:5px;font-size:15px">Điền Value môn học:</span></div><div><textarea class="form-control" placeholder="Nhập vào đây value của các môn học, mỗi môn một dòng" style="margin-left:5px; width: 600px; height: 100px; resize: both;font-size:12px" id="subject" rows="4"></textarea></div> <div style="margin-left:5px;margin-top:5px"> <input type="checkbox" id="tudongluudk" checked=""> <label>Tự động lưu kết quả khi chọn xong tất cả các môn</label> </div><div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để chọn môn nhanh" id="btndangkymon" onclick="fastDK()">Chọn môn</button><button type="button" class="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để lưu kết quả đăng kí" id="btnluumon" onclick="LuuDanhSachDangKy()" style="margin-left:5px">Lưu kết quả</button></div> <div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để găm môn" id="autoGam" onclick="autoGamMon()">Auto Găm</button> <span>sau mỗi</span>&nbsp;<input type="number" id="timeAuto" name="timeAuto" min="1" step="1" value="1" style="border-color: initial;max-width: 48px;text-align: center;">&nbsp;<span>giây</span><a></a></div><div style="margin-top:2px;margin-left:5px;font-size:14px">Hướng dẫn: Nhấn nút copy trước môn học cần đăng kí để sao chép value môn học rồi dán vào ô Điền Value môn học mỗi môn một dòng sau đó nhấn chọn môn để tool tự động chọn môn, kiểm tra danh sách môn đã chọn đã cập nhật hết số môn chưa, nếu rồi thì nhấn nút lưu để chọn môn. Tính năng găm môn giúp liên tục "găm" các môn đã hết slot, tool sẽ giúp "đớp" ngay khi môn có slot còn trống (có người nhả môn hoặc môn được tăng slot).</div><div><span style="margin-left:5px;font-size:14px">Cần hỗ trợ liên hệ hãy vào group hỗ trợ </span><a style="font-size:14px" href="https://www.facebook.com/groups/165556974833741/" target="_blank">tại đây</a></div></div>');
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

var gamMonMode = false;
var timeAuto = 1000;

function autoGamMon() {
    $('#tudongluudk')[0].checked = true;
    if (gamMonMode) {
        // dừng găm môn
        gamMonMode = false;
        $("#autoGam").attr("class", "btn btn-primary btn-sm");
        $("#autoGam").html("Auto Găm");
    } else {
        // bắt đầu găm
        timeAuto = $("#timeAuto").val() * 1000;
        timeAuto < 1000 ? 1000 : timeAuto;
        gamMonMode = true;
        $("#autoGam").attr("class", "btn btn-danger btn-sm");
        $("#autoGam").html("Stop");
        toastr["success"]("Bắt đầu tự động găm môn");
        fastDK();
    }
}

function fastDK() {
    dsmonhoc = $('#subject').val();
    if (dsmonhoc.trim().length == 0) {
        toastr["error"]("Danh sách môn trống");
        return;
    }
    coursespos = 0;
    monhocArr = dsmonhoc.split('\n');
    inAutoDKMode = true;
    fastDKOSB();
}

function fastDKOSB() {
    if (coursespos < monhocArr.length) { // nếu chưa chọn hết môn
        let valueMon = monhocArr[coursespos];
        let mamonhoc = valueMon.split("|")[1];
        if ($("#divKQ")[0].outerHTML.includes(mamonhoc)) { // nếu môn đã lưu/chọn
            toastr["info"]("Bỏ qua môn thứ " + (coursespos + 1));
            coursespos++; // chuyển sang môn tiếp theo
            fastDKOSB();
        } else { // chưa lưu/chọn thì chọn môn
            let arr = valueMon.split("|");
            EduSoft.Web.UC.DangKyMonHoc.DangKySelectedChange(true, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11], arr[12], toDKSelectedChange_callback);
        }
    } else { // đã chọn hết môn thì lưu hoặc đưa ra thông báo
        inAutoDKMode = false;
        if ($("#tudongluudk")[0].checked == true){
            toastr["success"]("Đang lưu danh sách môn học");
            LuuDanhSachDangKy();
        }
        else{
            toastr["success"]("Đã chọn tất cả các môn! Bấm lưu đăng kí thật nhanh nào!");
        }
    }
}

if (document.title.includes("Failed to load viewstate")) {
    window.open("Default.aspx?page=dangnhap", "_self");
}

appendGuiAutoDK();