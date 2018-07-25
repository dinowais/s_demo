///**
// * Created by owais on 3/24/17.
// */
//var words = [];
//var xhr = new XMLHttpRequest();
//xhr.open('GET', '/data/ds1.sql', true);
//xhr.responseType = 'arraybuffer';
//xhr.onload = function (e) {
//    var uInt8Array = new Uint8Array(this.response);
//    var db = new SQL.Database(uInt8Array);
//    var key_word = db.exec("SELECT DRUG_NAME,count(ARTICLE_ID) as SCORE FROM pv_social_drug GROUP BY DRUG_NAME;")[0];
//    for (i = 0; i < key_word.values.length; i++) {
//        words.push({
//            text: String(key_word.values[i][0]),
//            weight: parseInt(key_word.values[i][1])
//        });
//    }
//    $("#keyword").jQCloud('destroy');
//    $("#keyword").jQCloud(words);
//    $(function () {
//        Array.prototype.max = function () {
//            return Math.max.apply(null, this)
//        };
//
//        Array.prototype.min = function () {
//            return Math.min.apply(null, this);
//        };
//    });
//
//};
//xhr.send();
