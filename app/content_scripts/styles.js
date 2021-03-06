// jquery.jqplot.min.css
/* jqPlot 1.0.8r1250 | (c) 2009-2013 Chris Leonello | jplot.com
   jsDate | (c) 2010-2013 Chris Leonello */
var style = document.createElement('style');
style.textContent = '.jqplot-target{position:relative;color:#666;font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;font-size:1em;}.jqplot-axis{font-size:.75em;}.jqplot-xaxis{margin-top:10px;}.jqplot-x2axis{margin-bottom:10px;}.jqplot-yaxis{margin-right:10px;}.jqplot-y2axis,.jqplot-y3axis,.jqplot-y4axis,.jqplot-y5axis,.jqplot-y6axis,.jqplot-y7axis,.jqplot-y8axis,.jqplot-y9axis,.jqplot-yMidAxis{margin-left:10px;margin-right:10px;}.jqplot-axis-tick,.jqplot-xaxis-tick,.jqplot-yaxis-tick,.jqplot-x2axis-tick,.jqplot-y2axis-tick,.jqplot-y3axis-tick,.jqplot-y4axis-tick,.jqplot-y5axis-tick,.jqplot-y6axis-tick,.jqplot-y7axis-tick,.jqplot-y8axis-tick,.jqplot-y9axis-tick,.jqplot-yMidAxis-tick{position:absolute;white-space:pre;}.jqplot-xaxis-tick{top:0;left:15px;vertical-align:top;}.jqplot-x2axis-tick{bottom:0;left:15px;vertical-align:bottom;}.jqplot-yaxis-tick{right:0;top:15px;text-align:right;}.jqplot-yaxis-tick.jqplot-breakTick{right:-20px;margin-right:0;padding:1px 5px 1px 5px;z-index:2;font-size:1.5em;}.jqplot-y2axis-tick,.jqplot-y3axis-tick,.jqplot-y4axis-tick,.jqplot-y5axis-tick,.jqplot-y6axis-tick,.jqplot-y7axis-tick,.jqplot-y8axis-tick,.jqplot-y9axis-tick{left:0;top:15px;text-align:left;}.jqplot-yMidAxis-tick{text-align:center;white-space:nowrap;}.jqplot-xaxis-label{margin-top:10px;font-size:11pt;position:absolute;}.jqplot-x2axis-label{margin-bottom:10px;font-size:11pt;position:absolute;}.jqplot-yaxis-label{margin-right:10px;font-size:11pt;position:absolute;}.jqplot-yMidAxis-label{font-size:11pt;position:absolute;}.jqplot-y2axis-label,.jqplot-y3axis-label,.jqplot-y4axis-label,.jqplot-y5axis-label,.jqplot-y6axis-label,.jqplot-y7axis-label,.jqplot-y8axis-label,.jqplot-y9axis-label{font-size:11pt;margin-left:10px;position:absolute;}.jqplot-meterGauge-tick{font-size:.75em;color:#999;}.jqplot-meterGauge-label{font-size:1em;color:#999;}table.jqplot-table-legend{margin-top:12px;margin-bottom:12px;margin-left:12px;margin-right:12px;}table.jqplot-table-legend,table.jqplot-cursor-legend{background-color:rgba(255,255,255,0.6);border:1px solid #ccc;position:absolute;font-size:.75em;}td.jqplot-table-legend{vertical-align:middle;}td.jqplot-seriesToggle:hover,td.jqplot-seriesToggle:active{cursor:pointer;}.jqplot-table-legend .jqplot-series-hidden{text-decoration:line-through;}div.jqplot-table-legend-swatch-outline{border:1px solid #ccc;padding:1px;}div.jqplot-table-legend-swatch{width:0;height:0;border-top-width:5px;border-bottom-width:5px;border-left-width:6px;border-right-width:6px;border-top-style:solid;border-bottom-style:solid;border-left-style:solid;border-right-style:solid;}.jqplot-title{top:0;left:0;padding-bottom:.5em;font-size:1.2em;}table.jqplot-cursor-tooltip{border:1px solid #ccc;font-size:.75em;}.jqplot-cursor-tooltip{border:1px solid #ccc;font-size:.75em;white-space:nowrap;background:rgba(208,208,208,0.5);padding:1px;}.jqplot-highlighter-tooltip,.jqplot-canvasOverlay-tooltip{border:1px solid #ccc;font-size:.75em;white-space:nowrap;background:rgba(208,208,208,0.5);padding:1px;}.jqplot-point-label{font-size:.75em;z-index:2;}td.jqplot-cursor-legend-swatch{vertical-align:middle;text-align:center;}div.jqplot-cursor-legend-swatch{width:1.2em;height:.7em;}.jqplot-error{text-align:center;}.jqplot-error-message{position:relative;top:46%;display:inline-block;}div.jqplot-bubble-label{font-size:.8em;padding-left:2px;padding-right:2px;color:rgb(20%,20%,20%);}div.jqplot-bubble-label.jqplot-bubble-label-highlight{background:rgba(90%,90%,90%,0.7);}div.jqplot-noData-container{text-align:center;background-color:rgba(96%,96%,96%,0.3);}';
document.body.appendChild(style);


var STYLE_CONTENT = '#chart {\
width: 100%;\
}\
.chart_box {\
height: 255px;\
}\
\
.chart_comment {\
color: #555;\
font-size: 15;\
}\
\
#chart_loading_error_judge_id {\
margin-top: 5px;\
}\
\
.chart_judge_id_input {\
height: 20px;\
width: 80px;\
}\
\
.chart_legend_box {\
font-size: 15;\
margin: -5px 7px 10px 25px;\
min-height: 20px;\
overflow: auto;\
}\
\
.chart_users_table {\
border-spacing: 0;\
font-size: 15;\
}\
\
.chart_users_table td {\
padding: 0 3px;\
}\
\
.chart_users_table td:first-child {\
padding-left: 2px;\
}\
\
.chart_users_table td:last-child {\
padding-right: 2px;\
}\
\
.chart_legend_open {\
float: right;\
}\
\
.chart_spin {\
position: relative;\
top: 130px;\
}\
\
#chart_query_error {\
clear: right;\
position: relative;\
top: 40%;\
}\
\
.chart_new_user {\
margin-top: 5px;\
}\
\
.chart_user_add {\
margin-left: 8px;\
}\
\
.chart_user_color {\
border: 1px solid black;\
float: left;\
height: 11px;\
width: 11px;\
}\
\
#chart_new_user_color {\
border-style: dashed;\
cursor: pointer;\
margin: 2px;\
margin-right: 7px;\
}\
\
.chart_user_judge_id {\
color: #707070;\
}\
\
.chart_user_problems_count {\
color: #707070;\
text-align: right;\
}\
\
.chart_legend {\
border: 1px solid #1a5cc8;\
float: right;\
margin-bottom: 10px;\
padding: 5px;\
text-align: left;\
}\
\
.chart_toggle {\
display: inline-block;\
margin-top: 15px;\
}\
\
.chart_user_remove {\
float: right;\
}\
\
.chart_version {\
float: right;\
}';

var style = document.createElement('style');
style.textContent = STYLE_CONTENT;
document.head.appendChild(style);
