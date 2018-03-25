/**
 * Use a function to add content dinamically. The result is that I can edit in 
 * one place and have the content set on all pages with this div.
 */

(function () {
	let tableOfContentsDiv = document.querySelector('#tableOfContents');

	//this template used to be the footer on each page, now inserted dinamically:
	let asideInnerHTML = `

		<h3>Table of content</h3>
		<a href="javascript:(function(){var i=function(a){this.sections=[];this.startingNode=a};i.prototype={heading:false,append:function(a){a.container=this;this.sections.push(a)},asHTML:function(a){var b=u(this.heading);if(a)b='&lt;a href=&quot;#'+v(this.startingNode)+'&quot;&gt;'+b+&quot;&lt;/a&gt;&quot;;return b+q(this.sections,a)}};var q=function(a,b){for(var f=&quot;&quot;,c=0;c&lt;a.length;c++)f+=&quot;&lt;li&gt;&quot;+a[c].asHTML(b)+&quot;&lt;/li&gt;&quot;;return f==&quot;&quot;?f:&quot;&lt;ol&gt;&quot;+f+&quot;&lt;/ol&gt;&quot;},r=function(a){a=a.heading;return h(a)?j(a):1},u=function(a){if(h(a)){if(k(a)==&quot;HGROUP&quot;)a=a.getElementsByTagName(&quot;h&quot;+
					 -j(a))[0];return a.textContent||a.innerText||&quot;&lt;i&gt;No text content inside &quot;+a.nodeName+&quot;&lt;/i&gt;&quot;}return&quot;&quot;+a},v=function(a){var b=a.getAttribute(&quot;id&quot;);if(b)return b;do b=&quot;h5o-&quot;+ ++s;while(t.getElementById(b));a.setAttribute(&quot;id&quot;,b);return b},e,d,g,s,t,w=function(a,b,f){var c=a;a:for(;c;){b(c);if(c.firstChild){c=c.firstChild;continue a}for(;c;){f(c);if(c.nextSibling){c=c.nextSibling;continue a}c=c==a?null:c.parentNode}}},x=function(a){if(!h(o(g)))if(l(a)||m(a)){e!=null&amp;&amp;g.push(e);e=a;d=new i(a);e.outline=
					 {sections:[d],startingNode:a,asHTML:function(c){return q(this.sections,c)}}}else if(e!=null)if(h(a)){if(d.heading)if(j(a)&gt;=r(n(e.outline))){var b=new i(a);e.outline.sections.push(b);d=b;d.heading=a}else{b=false;var f=d;do{if(j(a)&lt;r(f)){b=new i(a);f.append(b);d=b;d.heading=a;b=true}f=f.container}while(!b)}else d.heading=a;g.push(a)}},y=function(a){var b=o(g);if(h(b))b==a&amp;&amp;g.pop();else{if((l(a)||m(a))&amp;&amp;!d.heading)d.heading=&quot;&lt;i&gt;Untitled &quot;+k(a)+&quot;&lt;/i&gt;&quot;;if(l(a)&amp;&amp;g.length&gt;0){e=g.pop();d=n(e.outline);for(b=
					 0;b&lt;a.outline.sections.length;b++)d.append(a.outline.sections[b])}else if(m(a)&amp;&amp;g.length&gt;0){e=g.pop();for(d=n(e.outline);d.sections.length&gt;0;)d=n(d)}else if(l(a)||m(a))d=e.outline.sections[0]}},k=function(a){return a.tagName.toUpperCase()},p=function(a){return function(b){return z(b)&amp;&amp;(new RegExp(a,&quot;i&quot;)).test(k(b))}},m=p(&quot;^BLOCKQUOTE|BODY|DETAILS|FIELDSET|FIGURE|TD$&quot;),l=p(&quot;^ARTICLE|ASIDE|NAV|SECTION$&quot;),h=p(&quot;^H[1-6]|HGROUP$&quot;),z=function(a){return a&amp;&amp;a.tagName},j=function(a){var b=k(a);if(b==&quot;HGROUP&quot;)for(b=
					 1;b&lt;=6;b++){if(a.getElementsByTagName(&quot;H&quot;+b).length&gt;0)return-b}else return-parseInt(b.substr(1))},n=function(a){return o(a.sections)},o=function(a){return a[a.length-1]};HTML5Outline=function(a){s=0;t=a.ownerDocument||window.document;d=e=null;g=[];w(a,x,y);return e!=null?e.outline:null}})();
					 ;(function(){var b=function(e,f){for(var d=0;d&lt;e.length;d++)e[d].setAttribute(&quot;style&quot;,f)},g=HTML5Outline(document.body).asHTML(true),a=document.createElement(&quot;div&quot;);b([a],&quot;position:fixed;top:10px;right:10px;border:2px solid #000;background:rgba(255,255,255,.9);padding:15px;z-index:999;max-height:400px;overflow:auto;font-size:11px;font-family:Verdana, sans-serif;&quot;);a.innerHTML=g;b(a.getElementsByTagName(&quot;li&quot;),&quot;list-style:decimal outside;margin-left:20px;font-size:11px;font-family:Verdana, sans-serif;&quot;);
					 b(a.getElementsByTagName(&quot;ol&quot;),&quot;margin: 0;padding:0;font-size:11px;font-family:Verdana, sans-serif;&quot;);b(a.getElementsByTagName(&quot;a&quot;),&quot;color:#008;text-decoration:underline;font-size:11px;font-family:Verdana, sans-serif;&quot;);var c=a.insertBefore(document.createElement(&quot;a&quot;),a.firstChild);b([c],&quot;float: right; margin: 0 0 5px 5px; padding: 5px; border: 1px #008 solid;color:#00f;background-color:#ccf;&quot;);c.innerHTML=&quot;Close&quot;;c.href=&quot;#&quot;;c.onclick=function(){document.body.removeChild(a);a=c=null};document.body.appendChild(a)})();
					 ;" title="TableDeMatiere">
			<h1>Click here for displaying the table of contents!</h1>
		</a>
  `;
	tableOfContentsDiv.innerHTML = "";
	tableOfContentsDiv.innerHTML = asideInnerHTML;
})();

