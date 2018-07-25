//function social_mentions() {
//    var buckets = [];
//    var x = '';
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', '/data/ds1.sql', true);
//    xhr.responseType = 'arraybuffer';
//    xhr.onload = function (e) {
//        var uInt8Array = new Uint8Array(this.response);
//        var db = new SQL.Database(uInt8Array);
//        var data_q = db.exec("SELECT MEDIA_PROVIDER, count(ARTICLE_ID) as SCORE FROM pv_social_data GROUP BY MEDIA_PROVIDER ORDER BY SCORE DESC limit 5;")[0];
//
//        for (i = 0; i < data_q.values.length; i++) {
//            buckets.push({
//                name: String(data_q.values[i][0]),
//                y: parseInt(data_q.values[i][1])
//            });
//        }
//        Highcharts.chart('social', {
//            chart: {
//                plotBackgroundColor: null,
//                plotBorderWidth: null,
//                plotShadow: false,
//                type: 'pie'
//            },
//            title: {
//                text: ''
//            },
//            tooltip: {
//                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//            },
//            plotOptions: {
//                pie: {
//                    allowPointSelect: true,
//                    cursor: 'pointer',
//                    dataLabels: {
//                        enabled: false,
//                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                        style: {
//                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                        }
//                    },
//                    showInLegend: true,
//                }
//            },
//            credits: {
//                enabled: false,
//                //href: "http://www.highcharts.com",
//                //position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
//                //style: {cursor: "pointer", color: "#999999", fontSize: "9px"},
//                //text: "Highcharts.com"
//            },
//            series: [{
//                name: 'Social',
//                colorByPoint: true,
//                data: buckets
//            }]
//        });
//    };
//    xhr.send();
//
//}
//function load_highcharts(chart_type) {
//    var buckets = [];
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', '/data/ds1.sql', true);
//    xhr.responseType = 'arraybuffer';
//    xhr.onload = function (e) {
//        var query = '';
//        if (chart_type == 'social') {
//            query = "SELECT MEDIA_PROVIDER, count(ARTICLE_ID) as SCORE FROM pv_social_data GROUP BY MEDIA_PROVIDER ORDER BY SCORE DESC limit 5;"
//        }
//        else if (chart_type == 'drugs') {
//            query = "SELECT DRUG_NAME, count(ARTICLE_ID) as SCORE FROM pv_social_drug GROUP BY DRUG_NAME ORDER BY SCORE DESC limit 5;"
//
//        }
//        else {
//            query = "SELECT ADV_EFFECTS, count(ARTICLE_ID) as SCORE FROM pv_social_drug  where  ADV_EFFECTS !='[]' GROUP BY ADV_EFFECTS ORDER BY SCORE DESC limit 5;"
//        }
//
//        var uInt8Array = new Uint8Array(this.response);
//        var db = new SQL.Database(uInt8Array);
//        var data_q = db.exec(query)[0];
//
//        for (i = 0; i < data_q.values.length; i++) {
//            buckets.push({
//                name: String(data_q.values[i][0]),
//                y: parseInt(data_q.values[i][1])
//            });
//        }
//    };
//    xhr.send();
//}
//function load_stats() {
//    var buckets = [];
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', '/data/ds1.sql', true);
//    xhr.responseType = 'arraybuffer';
//    xhr.onload = function (e) {
//        var uInt8Array = new Uint8Array(this.response);
//        var db = new SQL.Database(uInt8Array);
//        var social = db.exec("SELECT count(*) as SCORE FROM pv_social_data;")[0].values[0];
//        var drugs = db.exec("SELECT count(distinct ARTICLE_ID) as SCORE FROM pv_social_drug;")[0].values[0];
//        var avfs = db.exec("SELECT count(distinct ADV_EFFECTS) as SCORE FROM pv_social_drug;")[0].values[0];
//        $('.social_posts').html(social);
//        $('.drug_mentions').html(drugs);
//        $('.potentials_ae').html(avfs);
//    };
//    xhr.send();
//}