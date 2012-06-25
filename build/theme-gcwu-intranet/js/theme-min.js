/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:c("#wb-head #gcwu-psnb"),search:c("#wb-head #gcwu-srchbx"),bcrumb:c("#wb-head #gcwu-bc"),title:c("#wb-head #gcwu-title"),sft:c("#wb-foot #gcwu-sft"),gcft:c("#wb-foot #gcwu-gcft"),wmms:c("#gcwu-wmms"),init:function(){var e=pe.menu.navcurrent(pe.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length>0){d.prev().children("a").addClass("nav-current")}pe.theme=b.theme;c("html").addClass(b.theme);if(pe.secnav.length>0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length>0&&b.search.length===0){b.psnb.css("width","100%")}},themename:function(){return b.theme},mobileview:function(){var j,k,d,e,g,n,l,m,i,f,h;if(pe.menubar.length>0){h=pe.menubar.find("ul.mb-menu li");j='<div data-role="page" id="jqm-wb-mb"><div data-role="header">';k=b.psnb.children(":header");j+="<h1>"+k.html()+"</h1></div>";j+='<div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length>0){j+='<section><div id="jqm-mb-location-text">'+b.bcrumb.html()+"</div></section>";b.bcrumb.remove()}else{j+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length>0){d=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"c");pe.menu.expandmobile(d);j+=c("<section><h2>"+pe.secnav.find("h2").eq(0).html()+"</h2></section>").append(d).html();pe.secnav.remove()}d=pe.menu.buildmobile(h,3,"a",true);pe.menu.expandmobile(d);j+=c("<section><h2>"+k.html()+"</h2></section>").append(d).html();j+="</nav></div></div></div>";pe.pagecontainer().append(j);k.wrapInner('<a href="#jqm-wb-mb" data-rel="dialog"></a>');g=c("<ul></ul>").hide().append('<li><a data-rel="dialog" data-theme="b"  data-icon="grid" href="'+k.find("a").attr("href")+'">'+k.find("a").text()+"</a></li>");if(b.search.length>0){e=c('<div data-role="page" id="jqm-wb-search"></div>');e.append(c('<div data-role="header"><h1>'+b.search.find(":header").text()+"</h1></div>")).append(c('<div data-role="content"></div>').append(b.search.find("form").clone()));pe.pagecontainer().append(e);b.search.find(":header").wrapInner('<a href="#jqm-wb-search" data-rel="dialog"></a>');g.append('<li><a data-rel="dialog" data-theme="b" data-icon="search" href="'+b.search.find(":header a").attr("href")+'">'+b.search.find(":header a").text()+"</a></li>")}b.title.after(c('<div data-role="navbar" data-iconpos="right"></div>').append(g))}i=c("body #gcwu-lang");if(i.length>0){n=i.find("a").attr("data-theme","a");f=c('<div data-role="navbar"><ul></ul></div>');m=f.children();n.each(function(){m.append(c("<li/>").append(this))});i.find("#gcwu-ef-lang").replaceWith(f.children().end());i.find("#gcwu-other-lang").remove()}if(b.sft.length>0){n=b.sft.find("#gcwu-sft-in #gcwu-tctr a, #gcwu-sft-in .gcwu-col-head a").attr("data-theme","b");l=c('<div data-role="navbar"><ul></ul></div>');m=l.children();n.each(function(){m.append(c("<li/>").append(this))});b.sft.children("#gcwu-sft-in").replaceWith(l.children().end());b.gcft.parent().remove()}else{if(pe.footer.find("#gcwu-tc").length>0){n=pe.footer.find("#gcwu-tc a").attr("data-theme","b");l=c('<div data-role="navbar"><ul></ul></div>');m=l.children();n.each(function(){m.append(c("<li/>").append(this))});pe.footer.find("#gcwu-tc").replaceWith(l.children().end())}}pe.footer.find("footer").append(b.wmms.detach());c(document).on("mobileinit",function(){if(pe.menubar.length>0){b.psnb.parent().remove();if(b.search.length>0){b.search.parent().remove()}g.show()}});c(document).on("pageinit",function(){pe.menu.correctmobile(c("#jqm-wb-mb"))});return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));