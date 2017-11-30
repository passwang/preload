	//图片预加载

	(function ($) {
		   
		   function Preload(imgs,options){
		   	this.imgs=(typeof imgs==='string')?[imgs]:imgs;
		     // this.opts=$.extend({},Preload.DEFAULTS,options);
		     this.setting={
		         each: null,
		   	    all: null
		     }
		     $.extend(this.setting,options);
	         this._unordered(options);
		   }
		   // Preload.DEFAULTS={
		   // 	each: null,
		   // 	all: null
		   // };
			Preload.prototype._unordered=function(options){
	             console.log(1);
				var img=this.imgs;
				 var opts=this.opts;
				  var count=0;
				  var len=this.imgs.length;
				    console.log(1);
	            $.each(img,function(i,item){
	             
	        	var imgobj=new Image();
	        	$(imgobj).on("load error",function(){

		 	    options.each && options.each(count);


	        	  if (count>=len-1) {
	        	    options.all && options.all();
	             }

	        
	        	   count++;

	        	   	});
	             imgobj.src="images/"+item;
	              
	        })
	       }

			$.extend({
				preload:function(imgs,opts){
					new Preload(imgs,opts);
				}
			})

	})(jQuery)