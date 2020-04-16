(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(t,e,s){},226:function(t,e,s){"use strict";var r=s(228),a={name:"CourseCard",components:{VClamp:s(227).a},props:{course:Object},computed:{targetLink:function(){return"/course/".concat(this.course.slug)}},data:function(){return{}}},n=s(44),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-1"},[s("v-card",{staticClass:"ma-0 pa-0 gb-course-card",staticStyle:{height:"286px"}},[s("v-img",{staticClass:"white--text align-end",attrs:{gradient:"rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)",height:"140px",src:t.course.image}},[s("g-link",{staticClass:"gb-link",staticStyle:{"text-decoration":"none"},attrs:{to:t.targetLink}},[s("p",{staticClass:"pl-4 pb-2 ma-0 title gb-course-card-title"},[s("span",[t._v(t._s(t.course.title))])])])],1),s("v-card-text",{staticClass:"text--primary",staticStyle:{height:"100px"}},[s("v-clamp",{staticClass:"subtitle",attrs:{autoresize:"","max-lines":3}},[t._v(t._s(t.course.headline))])],1),s("v-spacer"),s("v-card-actions",{staticClass:"pa-3"},[s("v-rating",{attrs:{"background-color":"white",color:"orange accent-2",dense:"",readonly:"","half-increments":"",size:"18"},model:{value:t.course.rating,callback:function(e){t.$set(t.course,"rating",e)},expression:"course.rating"}}),s("span",{staticClass:"grey--text text--lighten-1 mr-2 caption pt-1"},[t._v(t._s(t.course.rating)+" ("+t._s(t.course.reviews)+")")])],1)],1)],1)}),[],!1,null,null,null).exports,c=s(230),o={name:"CourseList",components:{CourseCard:i,VueperSlides:r.VueperSlides,VueperSlide:r.VueperSlide},props:{courses:Array},watch:{courses:function(t){var e=this;this.$nextTick((function(){e.$refs.listSlides.goToSlide(0)}))}},computed:{},data:function(){return{currentSlide:0,breakpoints:{600:{visibleSlides:1},960:{visibleSlides:3},1264:{visibleSlides:4},1904:{visibleSlides:5}}}},methods:{handleReady:function(t){this.currentSlide=Object(c.a)(0,["currentSlide","index"],t),console.log("Got Ready: ".concat(this.currentSlide))},handleSlide:function(t){this.currentSlide=Object(c.a)(0,["currentSlide","index"],t),console.log("Got slide: ".concat(this.currentSlide))}}},l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vueper-slides",{ref:"listSlides",staticClass:"no-shadow",attrs:{"visible-slides":6,"arrows-outside":!1,bullets:!1,"slide-multiple":"","slide-ratio":.25,"dragging-distance":200,"fixed-height":"300px",breakpoints:t.breakpoints},on:{ready:function(e){return t.handleReady(e)},slide:function(e){return t.handleSlide(e)}},scopedSlots:t._u([{key:"arrow-left",fn:function(){return[t.currentSlide>0?s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"accent"}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-chevron-left")])],1):s("span")]},proxy:!0},{key:"arrow-right",fn:function(){return[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"accent"}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-chevron-right")])],1)]},proxy:!0}])},t._l(t.courses,(function(e){return s("vueper-slide",{key:e.id,scopedSlots:t._u([{key:"content",fn:function(){return[s("CourseCard",{attrs:{course:e}})]},proxy:!0}],null,!0)})})),1)}),[],!1,null,null,null);e.a=l.exports},232:function(t,e,s){"use strict";var r=s(224);s.n(r).a},235:function(t,e,s){"use strict";s.r(e);var r={name:"CourseBanner",components:{VClamp:s(227).a},props:{course:Object},computed:{targetLink:function(){return"/course/".concat(this.course.slug)}},data:function(){return{}}},a=s(44),n={components:{CourseBanner:Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{"no-gutters":"",dense:""}},[s("v-col",{staticClass:"height-30 bg-dark white--text jarallax"},[s("g-image",{staticClass:"jarallax-img opacity-20",attrs:{src:t.course.image}}),s("v-container",{staticClass:"mt-8",attrs:{"pa-0":""}},[s("v-row",{staticClass:"mb-12",attrs:{justify:"center"}},[s("v-col",{attrs:{dense:""}},[s("p",{staticClass:"display-2 mb-0"},[t._v(t._s(t.course.title))]),s("p",{staticClass:"headline mb-0"},[t._v(t._s(t.course.headline))]),s("div",[s("v-rating",{attrs:{"background-color":"white",color:"orange accent-2",dense:"",readonly:"","half-increments":"",size:"18"},model:{value:t.course.rating,callback:function(e){t.$set(t.course,"rating",e)},expression:"course.rating"}}),s("span",{staticClass:"grey--text text--lighten-1 mr-2 caption pt-1"},[t._v(t._s(t.course.rating)+" ("+t._s(t.course.reviews)+")")])],1),s("v-btn",{attrs:{color:"warning",href:t.course.url}},[s("v-icon",[t._v("mdi-share-outline")]),t._v(" Take me there!\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,CourseList:s(226).a},props:{},data:function(){return{}},watch:{$context:function(t){}},metaInfo:function(){return{title:this.$context.course.title}}},i=(s(232),Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("CourseBanner",{attrs:{course:this.$context.course}})],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-container",{staticClass:"mt-4",attrs:{"pl-5":""}},[e("v-row",{staticClass:"mb-12",attrs:{justify:"center"}},[e("v-col",{attrs:{dense:""}},[this._v("\n            "+this._s(this.$context.course.description)+"\n          ")])],1)],1)],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("v-container",[e("div",{staticClass:"headline pa-1 mb-0"},[this._v("#Related")]),e("course-list",{attrs:{courses:this.$context.related}})],1)],1)],1)],1)}),[],!1,null,null,null));e.default=i.exports}}]);