$(function(){var o=Math.round(new Date("12/21/2020 00:00:00").getTime()/1e3);$("#runtime").flipcountdown({size:"xs",tick:function(){function n(n){return 9<n?n:"0"+n}var t=Math.abs(Math.round((new Date).getTime()/1e3)-o),e=86400,r=3600,a=parseInt(t/e),i=parseInt(t%e/r),u=parseInt(t%e%r/60);return n(a)+" "+n(i)+" "+n(u)+" "+n(t%e%r%60)}})});