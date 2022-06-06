let database = require('../database');

var DSLopHocPhan={
	getDSLopHocPhan:function(MaMHP, Nam, HocKy,callback){
		return database.query("select lophocphan.MaLopHP, lophocphan.SiSo, lophocphan.DaDangKy from lophocphan where lophocphan.MaMHP = ? and lophocphan.Nam = ? and lophocphan.HocKy = ?",[MaMHP, Nam, HocKy],callback);
	}
}
 module.exports=DSLopHocPhan;