(function(n,S){function c(t,i,a){this.init.call(this,t,i,a)}function t(t,i,a){t.call(this,i,a);if(this.chart.polar)this.closeSegment=function(t){var i=this.xAxis.center;t.push("L",i[0],i[1])},this.closedStacks=!0}function i(t,i){var a=this.chart,e=this.options.animation,o=this.group,n=this.markerGroup,r=this.xAxis.center,s=a.plotLeft,l=a.plotTop;if(a.polar){if(a.renderer.isSVG)if(e===!0&&(e={}),i){if(a={translateX:r[0]+s,translateY:r[1]+l,scaleX:.001,scaleY:.001},o.attr(a),n)n.attrSetters=o.attrSetters,n.attr(a)}else a={translateX:s,translateY:l,scaleX:1,scaleY:1},o.animate(a,e),n&&n.animate(a,e),this.animate=null}else t.call(this,i)}var m=n.arrayMin,y=n.arrayMax,R=n.each,d=n.extend,u=n.merge,p=n.map,X=n.pick,x=n.pInt,a=n.getOptions().plotOptions,g=n.seriesTypes,e=n.extendClass,f=n.splat,o=n.wrap,r=n.Axis,s=n.Tick,b=n.Series,l=g.column.prototype,A=Math,Y=A.round,T=A.floor,w=A.max,h=function(){};d(c.prototype,{init:function(t,i,a){var e=this,o=e.defaultOptions;e.chart=i;if(i.angular)o.background={};e.options=t=u(o,t);(t=t.background)&&R([].concat(f(t)).reverse(),function(t){var i=t.backgroundColor,t=u(e.defaultBackgroundOptions,t);if(i)t.backgroundColor=i;t.color=t.backgroundColor;a.options.plotBands.unshift(t)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var P=r.prototype,s=s.prototype,v={getOffset:h,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:h,setCategories:h,setTitle:h},L={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,plotBands:[],tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,plotBands:[],showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},plotBands:[],showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(t){this.options=u(this.defaultOptions,this.defaultRadialOptions,t)},getOffset:function(){P.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(t,i){var a=this.center,i=X(i,a[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],i,i,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){P.setAxisTranslation.call(this);if(this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.isXAxis))this.minPixelPadding=this.transA*this.minPointOffset+(this.reversed?(this.endAngleRad-this.startAngleRad)/4:0)},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){P.setAxisSize.call(this);if(this.isRadial)this.center=this.pane.center=g.pie.prototype.getCenter.call(this.pane),this.len=this.width=this.height=this.isCircular?this.center[2]*(this.endAngleRad-this.startAngleRad)/2:this.center[2]/2},getPosition:function(t,i){if(!this.isCircular)i=this.translate(t),t=this.min;return this.postTranslate(this.translate(t),X(i,this.center[2]/2)-this.offset)},postTranslate:function(t,i){var a=this.chart,e=this.center,t=this.startAngleRad+t;return{x:a.plotLeft+e[0]+Math.cos(t)*i,y:a.plotTop+e[1]+Math.sin(t)*i}},getPlotBandPath:function(t,i,a){var e=this.center,o=this.startAngleRad,n=e[2]/2,r=[X(a.outerRadius,"100%"),a.innerRadius,X(a.thickness,10)],s=/%$/,l,h=this.isCircular;this.options.gridLineInterpolation==="polygon"?e=this.getPlotLinePath(t).concat(this.getPlotLinePath(i,!0)):(h||(r[0]=this.translate(t),r[1]=this.translate(i)),r=p(r,function(t){s.test(t)&&(t=x(t,10)*n/100);return t}),a.shape==="circle"||!h?(t=-Math.PI/2,i=Math.PI*1.5,l=!0):(t=o+this.translate(t),i=o+this.translate(i)),e=this.chart.renderer.symbols.arc(this.left+e[0],this.top+e[1],r[0],r[0],{start:t,end:i,innerR:X(r[1],r[0]-r[2]),open:l}));return e},getPlotLinePath:function(a,t){var i=this.center,e=this.chart,o=this.getPosition(a),n,r,s;this.isCircular?s=["M",i[0]+e.plotLeft,i[1]+e.plotTop,"L",o.x,o.y]:this.options.gridLineInterpolation==="circle"?(a=this.translate(a))&&(s=this.getLinePath(0,a)):(n=e.xAxis[0],s=[],a=this.translate(a),i=n.tickPositions,n.autoConnect&&(i=i.concat([i[0]])),t&&(i=[].concat(i).reverse()),R(i,function(t,i){r=n.getPosition(t,a);s.push(i?"L":"M",r.x,r.y)}));return s},getTitlePosition:function(){var t=this.center,i=this.chart,a=this.options.title;return{x:i.plotLeft+t[0]+(a.x||0),y:i.plotTop+t[1]-{high:.5,middle:.25,low:0}[a.align]*t[2]+(a.y||0)}}};o(P,"init",function(t,i,a){var e;var o=i.angular,n=i.polar,r=a.isX,s=o&&r,l,h;h=i.options;var p=a.pane||0;if(o){if(d(this,s?v:L),l=!r)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(n)d(this,L),this.defaultRadialOptions=(l=r)?this.defaultRadialXOptions:u(this.defaultYAxisOptions,this.defaultRadialYOptions);t.call(this,i,a);if(!s&&(o||n)){t=this.options;if(!i.panes)i.panes=[];this.pane=(e=i.panes[p]=i.panes[p]||new c(f(h.pane)[p],i,this),p=e);p=p.options;i.inverted=!1;h.chart.zoomType=null;this.startAngleRad=i=(p.startAngle-90)*Math.PI/180;this.endAngleRad=h=(X(p.endAngle,p.startAngle+360)-90)*Math.PI/180;this.offset=t.offset||0;if((this.isCircular=l)&&a.max===S&&h-i===2*Math.PI)this.autoConnect=!0}});o(s,"getPosition",function(t,i,a,e,o){var n=this.axis;return n.getPosition?n.getPosition(a):t.call(this,i,a,e,o)});o(s,"getLabelPosition",function(t,i,a,e,o,n,r,s,l){var h=this.axis,p=n.y,c=n.align,d=(h.translate(this.pos)+h.startAngleRad+Math.PI/2)/Math.PI*180%360;h.isRadial?(t=h.getPosition(this.pos,h.center[2]/2+X(n.distance,-25)),n.rotation==="auto"?e.attr({rotation:d}):p===null&&(p=x(e.styles.lineHeight)*.9-e.getBBox().height/2),c===null&&(c=h.isCircular?d>20&&d<160?"left":d>200&&d<340?"right":"center":"center",e.attr({align:c})),t.x+=n.x,t.y+=p):t=t.call(this,i,a,e,o,n,r,s,l);return t});o(s,"getMarkPath",function(t,i,a,e,o,n,r){var s=this.axis;s.isRadial?(t=s.getPosition(this.pos,s.center[2]/2+e),i=["M",i,a,"L",t.x,t.y]):i=t.call(this,i,a,e,o,n,r);return i});a.arearange=u(a.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}});g.arearange=n.extendClass(g.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(t){return[t.low,t.high]},pointValKey:"low",getSegments:function(){var i=this;R(i.points,function(t){if(!i.options.connectNulls&&(t.low===null||t.high===null))t.y=null;else if(t.low===null&&t.high!==null)t.y=t.high});b.prototype.getSegments.call(this)},translate:function(){var o=this.yAxis;g.area.prototype.translate.apply(this);R(this.points,function(t){var i=t.low,a=t.high,e=t.plotY;a===null&&i===null?t.y=null:i===null?(t.plotLow=t.plotY=null,t.plotHigh=o.translate(a,0,1,0,1)):a===null?(t.plotLow=e,t.plotHigh=null):(t.plotLow=e,t.plotHigh=o.translate(a,0,1,0,1))})},getSegmentPath:function(t){var i,a=[],e=t.length,o=b.prototype.getSegmentPath,n,r;r=this.options;var s=r.step;for(i=HighchartsAdapter.grep(t,function(t){return t.plotLow!==null});e--;)n=t[e],n.plotHigh!==null&&a.push({plotX:n.plotX,plotY:n.plotHigh});t=o.call(this,i);if(s)s===!0&&(s="left"),r.step={left:"right",center:"center",right:"left"}[s];a=o.call(this,a);r.step=s;r=[].concat(t,a);a[0]="L";this.areaPath=this.areaPath.concat(t,a);return r},drawDataLabels:function(){var t=this.data,i=t.length,a,e=[],o=b.prototype,n=this.options.dataLabels,r,s=this.chart.inverted;if(n.enabled||this._hasPointLabels){for(a=i;a--;)r=t[a],r.y=r.high,r.plotY=r.plotHigh,e[a]=r.dataLabel,r.dataLabel=r.dataLabelUpper,r.below=!1,s?(n.align="left",n.x=n.xHigh):n.y=n.yHigh;o.drawDataLabels.apply(this,arguments);for(a=i;a--;)r=t[a],r.dataLabelUpper=r.dataLabel,r.dataLabel=e[a],r.y=r.low,r.plotY=r.plotLow,r.below=!0,s?(n.align="right",n.x=n.xLow):n.y=n.yLow;o.drawDataLabels.apply(this,arguments)}},alignDataLabel:g.column.prototype.alignDataLabel,getSymbol:g.column.prototype.getSymbol,drawPoints:h});a.areasplinerange=u(a.arearange);g.areasplinerange=e(g.arearange,{type:"areasplinerange",getPointSpline:g.spline.prototype.getPointSpline});a.columnrange=u(a.column,a.arearange,{lineWidth:1,pointRange:null});g.columnrange=e(g.arearange,{type:"columnrange",translate:function(){var o=this,n=o.yAxis,r;l.translate.apply(o);R(o.points,function(t){var i=t.shapeArgs,a=o.options.minPointLength,e;t.plotHigh=r=n.translate(t.high,0,1,0,1);t.plotLow=t.plotY;e=r;t=t.plotY-r;t<a&&(a-=t,t+=a,e-=a/2);i.height=t;i.y=e})},trackerGroups:["group","dataLabels"],drawGraph:h,pointAttrToOptions:l.pointAttrToOptions,drawPoints:l.drawPoints,drawTracker:l.drawTracker,animate:l.animate,getColumnMetrics:l.getColumnMetrics});a.gauge=u(a.line,{dataLabels:{enabled:!0,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});s={type:"gauge",pointClass:n.extendClass(n.Point,{setState:function(t){this.state=t}}),angular:!0,drawGraph:h,fixedBox:!0,trackerGroups:["group","dataLabels"],translate:function(){var l=this.yAxis,h=this.options,p=l.center;this.generatePoints();R(this.points,function(t){var i=u(h.dial,t.dial),a=x(X(i.radius,80))*p[2]/200,e=x(X(i.baseLength,70))*a/100,o=x(X(i.rearLength,10))*a/100,n=i.baseWidth||3,r=i.topWidth||1,s=l.startAngleRad+l.translate(t.y,null,null,null,!0);h.wrap===!1&&(s=Math.max(l.startAngleRad,Math.min(l.endAngleRad,s)));s=s*180/Math.PI;t.shapeType="path";t.shapeArgs={d:i.path||["M",-o,-n/2,"L",e,-n/2,a,-r/2,a,r/2,e,n/2,-o,n/2,"z"],translateX:p[0],translateY:p[1],rotation:s};t.plotX=p[0];t.plotY=p[1]})},drawPoints:function(){var n=this,t=n.yAxis.center,i=n.pivot,r=n.options,a=r.pivot,s=n.chart.renderer;R(n.points,function(t){var i=t.graphic,a=t.shapeArgs,e=a.d,o=u(r.dial,t.dial);i?(i.animate(a),a.d=e):t.graphic=s[t.shapeType](a).attr({stroke:o.borderColor||"none","stroke-width":o.borderWidth||0,fill:o.backgroundColor||"black",rotation:a.rotation}).add(n.group)});i?i.animate({translateX:t[0],translateY:t[1]}):n.pivot=s.circle(0,0,X(a.radius,5)).attr({"stroke-width":a.borderWidth||0,stroke:a.borderColor||"silver",fill:a.backgroundColor||"black"}).translate(t[0],t[1]).add(n.group)},animate:function(t){var a=this;if(!t)R(a.points,function(t){var i=t.graphic;i&&(i.attr({rotation:a.yAxis.startAngleRad*180/Math.PI}),i.animate({rotation:t.shapeArgs.rotation},a.options.animation))}),a.animate=null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);g.pie.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:g.pie.prototype.setData,drawTracker:g.column.prototype.drawTracker};g.gauge=n.extendClass(g.line,s);a.boxplot=u(a.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});g.boxplot=e(g.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(t){return[t.low,t.q1,t.median,t.q3,t.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:h,translate:function(){var a=this.yAxis,t=this.pointArrayMap;g.column.prototype.translate.apply(this);R(this.points,function(i){R(t,function(t){i[t]!==null&&(i[t+"Plot"]=a.translate(i[t],0,1,0,1))})})},drawPoints:function(){var i=this,t=i.points,a=i.options,e=i.chart.renderer,o,n,r,s,l,h,p,c,d,u,g,f,m,y,x,b,A,w,P,v,L,M,k=i.doQuartiles!==!1,C=parseInt(i.options.whiskerLength,10)/100;R(t,function(t){d=t.graphic;L=t.shapeArgs;g={};y={};b={};M=t.color||i.color;if(t.plotY!==S)if(o=t.pointAttr[t.selected?"selected":""],A=L.width,w=T(L.x),P=w+A,v=Y(A/2),n=T(k?t.q1Plot:t.lowPlot),r=T(k?t.q3Plot:t.lowPlot),s=T(t.highPlot),l=T(t.lowPlot),g.stroke=t.stemColor||a.stemColor||M,g["stroke-width"]=X(t.stemWidth,a.stemWidth,a.lineWidth),g.dashstyle=t.stemDashStyle||a.stemDashStyle,y.stroke=t.whiskerColor||a.whiskerColor||M,y["stroke-width"]=X(t.whiskerWidth,a.whiskerWidth,a.lineWidth),b.stroke=t.medianColor||a.medianColor||M,b["stroke-width"]=X(t.medianWidth,a.medianWidth,a.lineWidth),p=g["stroke-width"]%2/2,c=w+v+p,u=["M",c,r,"L",c,s,"M",c,n,"L",c,l,"z"],k&&(p=o["stroke-width"]%2/2,c=T(c)+p,n=T(n)+p,r=T(r)+p,w+=p,P+=p,f=["M",w,r,"L",w,n,"L",P,n,"L",P,r,"L",w,r,"z"]),C&&(p=y["stroke-width"]%2/2,s+=p,l+=p,m=["M",c-v*C,s,"L",c+v*C,s,"M",c-v*C,l,"L",c+v*C,l]),p=b["stroke-width"]%2/2,h=Y(t.medianPlot)+p,x=["M",w,h,"L",P,h,"z"],d)t.stem.animate({d:u}),C&&t.whiskers.animate({d:m}),k&&t.box.animate({d:f}),t.medianShape.animate({d:x});else{t.graphic=d=e.g().add(i.group);t.stem=e.path(u).attr(g).add(d);if(C)t.whiskers=e.path(m).attr(y).add(d);if(k)t.box=e.path(f).attr(o).add(d);t.medianShape=e.path(x).attr(b).add(d)}})}});a.errorbar=u(a.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:a.arearange.tooltip.pointFormat},whiskerWidth:null});g.errorbar=e(g.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(t){return[t.low,t.high]},pointValKey:"high",doQuartiles:!1,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||g.column.prototype.getColumnMetrics.call(this)}});a.waterfall=u(a.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"});g.waterfall=e(g.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(t,i){i.stacking=!0;g.column.prototype.init.call(this,t,i)},translate:function(){var t=this.options,i=this.yAxis,a,e,o,n,r,s,l,h,p;a=t.threshold;t=t.borderWidth%2/2;g.column.prototype.translate.apply(this);h=a;o=this.points;for(e=0,a=o.length;e<a;e++){n=o[e];r=n.shapeArgs;s=this.getStack(e);p=s.points[this.index];if(isNaN(n.y))n.y=this.yData[e];l=w(h,h+n.y)+p[0];r.y=i.translate(l,0,1);n.isSum||n.isIntermediateSum?(r.y=i.translate(p[1],0,1),r.height=i.translate(p[0],0,1)-r.y):h+=s.total;r.height<0&&(r.y+=r.height,r.height*=-1);n.plotY=r.y=Y(r.y)-t;r.height=Y(r.height);n.yBottom=r.y+r.height}},processData:function(t){var i=this.yData,a=this.points,e,o=i.length,n=this.options.threshold||0,r,s,l,h,p,c;s=r=l=h=n;for(c=0;c<o;c++)p=i[c],e=a&&a[c]?a[c]:{},p==="sum"||e.isSum?i[c]=s:p==="intermediateSum"||e.isIntermediateSum?(i[c]=r,r=n):(s+=p,r+=p),l=Math.min(s,l),h=Math.max(s,h);b.prototype.processData.call(this,t);this.dataMin=l;this.dataMax=h},toYData:function(t){if(t.isSum)return"sum";else if(t.isIntermediateSum)return"intermediateSum";return t.y},getAttribs:function(){g.column.prototype.getAttribs.apply(this,arguments);var t=this.options,i=t.states,a=t.upColor||this.color,t=n.Color(a).brighten(.1).get(),e=u(this.pointAttr),o=this.upColorProp;e[""][o]=a;e.hover[o]=i.hover.upColor||t;e.select[o]=i.select.upColor||a;R(this.points,function(t){if(t.y>0&&!t.color)t.pointAttr=e,t.color=a})},getGraphPath:function(){var t=this.data,i=t.length,a=Y(this.options.lineWidth+this.options.borderWidth)%2/2,e=[],o,n,r;for(r=1;r<i;r++)n=t[r].shapeArgs,o=t[r-1].shapeArgs,n=["M",o.x+o.width,o.y+a,"L",n.x,o.y+a],t[r-1].y<0&&(n[2]+=o.height,n[5]+=o.height),e=e.concat(n);return e},getExtremes:h,getStack:function(t){var i=this.yAxis.stacks,a=this.stackKey;this.processedYData[t]<this.options.threshold&&(a="-"+a);return i[a][t]},drawGraph:b.prototype.drawGraph});a.bubble=u(a.scatter,{dataLabels:{inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0});g.bubble=e(g.scatter,{type:"bubble",pointArrayMap:["y","z"],trackerGroups:["group","dataLabelsGroup"],pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(t){var i=this.options.marker,a=X(i.fillOpacity,.5),t=t||i.fillColor||this.color;a!==1&&(t=n.Color(t).setOpacity(a).get("rgba"));return t},convertAttribs:function(){var t=b.prototype.convertAttribs.apply(this,arguments);t.fill=this.applyOpacity(t.fill);return t},getRadii:function(t,i,a,e){var o,n,r,s=this.zData,l=[];for(n=0,o=s.length;n<o;n++)r=i-t,r=r>0?(s[n]-t)/(i-t):.5,l.push(A.ceil(a+r*(e-a))/2);this.radii=l},animate:function(t){var a=this.options.animation;if(!t)R(this.points,function(t){var i=t.graphic,t=t.shapeArgs;i&&t&&(i.attr("r",1),i.animate({r:t.r},a))}),this.animate=null},translate:function(){var t,i=this.data,a,e,o=this.radii;g.scatter.prototype.translate.call(this);for(t=i.length;t--;)a=i[t],e=o?o[t]:0,a.negative=a.z<(this.options.zThreshold||0),e>=this.minPxSize/2?(a.shapeType="circle",a.shapeArgs={x:a.plotX,y:a.plotY,r:e},a.dlBox={x:a.plotX-e,y:a.plotY-e,width:2*e,height:2*e}):a.shapeArgs=a.plotY=a.dlBox=S},drawLegendSymbol:function(t,i){var a=x(t.itemStyle.fontSize)/2;i.legendSymbol=this.chart.renderer.circle(a,t.baseline-a,a).attr({zIndex:3}).add(i.legendGroup);i.legendSymbol.isMarker=!0},drawPoints:g.column.prototype.drawPoints,alignDataLabel:g.column.prototype.alignDataLabel});r.prototype.beforePadding=function(){var i=this,t=this.len,a=this.chart,o=0,n=t,r=this.isXAxis,s=r?"xData":"yData",l=this.min,h={},p=A.min(a.plotWidth,a.plotHeight),c=Number.MAX_VALUE,d=-Number.MAX_VALUE,u=this.max-l,g=t/u,f=[];this.tickPositions&&(R(this.series,function(t){var e=t.options;if(t.type==="bubble"&&t.visible&&(i.allowZoomOutside=!0,f.push(t),r))R(["minSize","maxSize"],function(t){var i=e[t],a=/%$/.test(i),i=x(i);h[t]=a?p*i/100:i}),t.minPxSize=h.minSize,t=t.zData,t.length&&(c=A.min(c,A.max(m(t),e.displayNegative===!1?e.zThreshold:-Number.MAX_VALUE)),d=A.max(d,y(t)))}),R(f,function(t){var i=t[s],a=i.length,e;r&&t.getRadii(c,d,h.minSize,h.maxSize);if(u>0)for(;a--;)e=t.radii[a],o=Math.min((i[a]-l)*g-e,o),n=Math.max((i[a]-l)*g+e,n)}),f.length&&u>0&&X(this.options.min,this.userMin)===S&&X(this.options.max,this.userMax)===S&&(n-=t,g*=(t+o-n)/t,this.min+=o/g,this.max+=n/g))};var M=b.prototype,a=n.Pointer.prototype;M.toXY=function(t){var i,a=this.chart;i=t.plotX;var e=t.plotY;t.rectPlotX=i;t.rectPlotY=e;t.clientX=(i/Math.PI*180+this.xAxis.pane.options.startAngle)%360;i=this.xAxis.postTranslate(t.plotX,this.yAxis.len-e);t.plotX=t.polarPlotX=i.x-a.plotLeft;t.plotY=t.polarPlotY=i.y-a.plotTop};M.orderTooltipPoints=function(t){if(this.chart.polar&&(t.sort(function(t,i){return t.clientX-i.clientX}),t[0]))t[0].wrappedClientX=t[0].clientX+360,t.push(t[0])};o(g.area.prototype,"init",t);o(g.areaspline.prototype,"init",t);o(g.spline.prototype,"getPointSpline",function(t,i,a,e){var o,n,r,s,l,h,p;if(this.chart.polar){o=a.plotX;n=a.plotY;t=i[e-1];r=i[e+1];this.connectEnds&&(t||(t=i[i.length-2]),r||(r=i[1]));if(t&&r)s=t.plotX,l=t.plotY,i=r.plotX,h=r.plotY,s=(1.5*o+s)/2.5,l=(1.5*n+l)/2.5,r=(1.5*o+i)/2.5,p=(1.5*n+h)/2.5,i=Math.sqrt(Math.pow(s-o,2)+Math.pow(l-n,2)),h=Math.sqrt(Math.pow(r-o,2)+Math.pow(p-n,2)),s=Math.atan2(l-n,s-o),l=Math.atan2(p-n,r-o),p=Math.PI/2+(s+l)/2,Math.abs(s-p)>Math.PI/2&&(p-=Math.PI),s=o+Math.cos(p)*i,l=n+Math.sin(p)*i,r=o+Math.cos(Math.PI+p)*h,p=n+Math.sin(Math.PI+p)*h,a.rightContX=r,a.rightContY=p;e?(a=["C",t.rightContX||t.plotX,t.rightContY||t.plotY,s||o,l||n,o,n],t.rightContX=t.rightContY=null):a=["M",o,n]}else a=t.call(this,i,a,e);return a});o(M,"translate",function(t){t.call(this);if(this.chart.polar&&!this.preventPostTranslate)for(var t=this.points,i=t.length;i--;)this.toXY(t[i])});o(M,"getSegmentPath",function(t,i){var a=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&i[i.length-1]===a[a.length-1]&&a[0].y!==null)this.connectEnds=!0,i=[].concat(i,[a[0]]);return t.call(this,i)});o(M,"animate",i);o(l,"animate",i);o(M,"setTooltipPoints",function(t,i){this.chart.polar&&d(this.xAxis,{tooltipLen:360});return t.call(this,i)});o(l,"translate",function(t){var i=this.xAxis,a=this.yAxis.len,e=i.center,o=i.startAngleRad,n=this.chart.renderer,r,s;this.preventPostTranslate=!0;t.call(this);if(i.isRadial){i=this.points;for(s=i.length;s--;)r=i[s],t=r.barX+o,r.shapeType="path",r.shapeArgs={d:n.symbols.arc(e[0],e[1],a-r.plotY,null,{start:t,end:t+r.pointWidth,innerR:a-X(r.yBottom,a)})},this.toXY(r)}});o(l,"alignDataLabel",function(t,i,a,e,o,n){if(this.chart.polar){t=i.rectPlotX/Math.PI*180;if(e.align===null)e.align=t>20&&t<160?"left":t>200&&t<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=t<45||t>315?"bottom":t>135&&t<225?"top":"middle";M.alignDataLabel.call(this,i,a,e,o,n)}else t.call(this,i,a,e,o,n)});o(a,"getIndex",function(t,i){var a,e=this.chart,o;e.polar?(o=e.xAxis[0].center,a=i.chartX-o[0]-e.plotLeft,e=i.chartY-o[1]-e.plotTop,a=180-Math.round(Math.atan2(a,e)/Math.PI*180)):a=t.call(this,i);return a});o(a,"getCoordinates",function(t,o){var n=this.chart,r={xAxis:[],yAxis:[]};n.polar?R(n.axes,function(t){var i=t.isXAxis,a=t.center,e=o.chartX-a[0]-n.plotLeft,a=o.chartY-a[1]-n.plotTop;r[i?"xAxis":"yAxis"].push({axis:t,value:t.translate(i?Math.PI-Math.atan2(e,a):Math.sqrt(Math.pow(e,2)+Math.pow(a,2)),!0)})}):r=t.call(this,o);return r})})(Highcharts);