const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi = "mysql://freedb_maind:8DK%aWcE#QdE5sk@sql.freedb.tech:3306/freedb_comp2350-A01289176";
const dbConfigLocal = "mysql://root:password@localhost:3306/week9";
if (is_qoddi) {
var databaseConnectionString = dbConfigQoddi;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;


//mysql://username:password@host:port/database