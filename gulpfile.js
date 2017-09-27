let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");
// gulp => 方法;
	//task 方法; => 绑定指令的方法;
// gulp.task("yanghuaizhi",()=>{
// 	//指令执行函数;
// 	console.log("hello this is my first task");
// });

//把index放进 dist文件夹之中;

gulp.task("index",()=>{
	//实现功能的时候一定要return;
	// gulp.src() => 找到源文件;
	// gulp.pipe(); => 在连缀之中想要继续调用gulp方法,就要用到pipe方法;
	// gulp.dest(); => 转存方法;
	
	//	
	
	return gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("html",()=>{
	
	return gulp.src("html/**.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})
gulp.task("public",()=>{
	return gulp.src("public/**/*.*").pipe(gulp.dest("dist/public")).pipe(connect.reload());
})
gulp.task("libs",()=>{
	return gulp.src("libs/**/*.js").pipe(gulp.dest("dist/libs")).pipe(connect.reload());
})
gulp.task("manage",()=>{
	return gulp.src(["manage/**.js"]).pipe(gulp.dest("dist/manage")).pipe(connect.reload());
})


gulp.task("model",()=>{
	return gulp.src(["model/**/*.js"]).pipe(gulp.dest("dist/model")).pipe(connect.reload());
})

gulp.task("model1",()=>{
	return gulp.src(["model/*.js"]).pipe(gulp.dest("dist/model")).pipe(connect.reload());
})




gulp.task("public",()=>{
	return gulp.src(["public/**.html"]).pipe(gulp.dest("dist/public")).pipe(connect.reload());
})
//gulp.watch();
//把所有的js文件全部都放进线上的script文件夹之中;
gulp.task("script",()=>{
	return gulp.src(["libs/*.js","module/**/*","!module/world.txt"])
	.pipe(gulp.dest("dist/script"));
})

gulp.task("watch",()=>{
	//如果index.html发生改变 ,那么 执行index指令;   // 命名空间
	gulp.watch(["index.html","sass/*.scss"],["index"]);
	gulp.watch(["html/**.html"],["html"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch(["manage/**.js"],["manage"]);
	gulp.watch(["model/**/*.js"],["model"]);
	gulp.watch(["model/*.js"],["model1"]);
	gulp.watch(["public/**/*.*"],["public"]);
	gulp.watch(["libs/**/*.js"],["libs"]);
	
})

gulp.task("server",()=>{
	connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8889,  // 端口号 
    	 livereload:true
    });
})

gulp.task("sass",()=>{
	 return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})


gulp.task("default",["server","watch","model"])
