let database = require('../database');

var DKHPLT={
	postDKHPLT:function(MSSV,MaLopHP,Nhom,callback){
			console.log(MSSV, MaLopHP, Nhom)
		return database.query("INSERT INTO `phieudangkylhp` (`MSSV`, `MaLopHP`, `Nhom`) VALUES (?, ?, ?)",[MSSV,MaLopHP,Nhom],callback);
	}
}
 module.exports=DKHPLT;