var paths=[
		'js/lib/jquery.js',
		'js/lib/_.js',
		'js/lib/backbone.js',
		'js/app/app.js',
		'js/app/router.js',
		'js/app/init.js'			
];

paths.forEach(function(item) {
     loadScript(item); 
});


function loadScript(path){
    var s=document.getElementsByTagName('script')[0];
    var ss=document.createElement('script');
    ss.type='text/javascript';
    ss.async=true;
    ss.src= path;
    s.parentNode.insertBefore(ss,s);
}