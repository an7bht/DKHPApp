let database = require('../database');

var DSLopHocPhanLT={
	getDSLopHocPhanLT:function(MaLopHP,callback){
		return database.query("select thoigian_phonghoc_giangvien.MaNhom, giangvien.HoTen, thoigian_phonghoc_giangvien.NgayHoc, thoigian_phonghoc_giangvien.PhongHoc, thoigian_phonghoc_giangvien.TietHoc, thoigian_phonghoc_giangvien.NgayBatDau from thoigian_phonghoc_giangvien inner join giangvien on giangvien.MaGV = thoigian_phonghoc_giangvien.MaGV where thoigian_phonghoc_giangvien.MaLopHP = ? and thoigian_phonghoc_giangvien.MaNhom ='LT'",[MaLopHP],callback);
	}
}
 module.exports=DSLopHocPhanLT;