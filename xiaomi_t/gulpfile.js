// 任务1 :移动images
// 任务2 :移动lib
// 任务3 :压缩并移动src/css/*.css 去 dist/css
// 任务4 :编译并压缩并移动src/sass/*.scss 去 dist/css
    // 使用gulp编译sass的包:gulp-sass
    // 但是这个包安装经常报错
    // 如果报错就先安装node-sass包
// 任务5 :压缩并移动src/css/*.js  去 dist/js
// 任务6 :压缩并移动src/pages/*.html  去 dist/pages
// 任务7 :删除dist文件夹
// 任务8 :观察src里面文件的变化

// 整个导出default任务



// 1 导入gulp这个第三方模块
const gulp = require('gulp')
const cssmin = require('gulp-cssmin');// 压缩css的包
const autoprefixer = require('gulp-autoprefixer');//给css属性加前缀 
const uglify = require('gulp-uglify');// 压缩js的模块
const babel = require('gulp-babel');//es6转es5
const htmlmin = require('gulp-htmlmin');// 压缩html的模块
const del = require('del');// 删除文件夹的模块
const sass = require('gulp-sass');//编译sass文件的
// 任务1 :移动images
function imgHandler(){
    return gulp.src('./img/**')  
    .pipe(gulp.dest('./dist/img'))
}

// 任务2 :移动lib
function libHandler(){
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
// 移动3 :json
function jsonHandler(){
    return gulp.src('./data/**')  
    .pipe(gulp.dest('./dist/data'))
}
// 任务3 :压缩并移动src/css/*.css 去 dist/css
function cssHandler(){
    return gulp.src('./css/*.css')  //找到文件
    .pipe(autoprefixer()) //加前缀
    .pipe(cssmin())  //压缩
    .pipe(gulp.dest('./dist/css'))  //移动
}

// 任务4 :编译并压缩并移动src/sass/*.scss 去 dist/css
function sassHandler(){
    return gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 任务5 :压缩并移动src/css/*.js  去 dist/js
function jsHandler(){
    return gulp.src('./js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    })) // 把es6转es5
    .pipe(uglify())   // 压缩
    .pipe(gulp.dest('./dist/js'))   // 移动
}


// 任务6 :压缩并移动src/pages/*.html  去 dist/pages
function htmlHandler(){
    return gulp.src('./*.html') 
    .pipe(htmlmin({
        collapseWhitespace:true,  // 压缩所有空格，变成一行
        removeAttributeQuotes:true, //去除html属性值的引号
        minifyCSS:true, // 把html文件里面的style标签里面的压缩
        minifyJS:true,  // 把html文件里面的script标签里面的压缩
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true // 移除注释
    })) //压缩
    .pipe(gulp.dest('./dist/')) //移动
}

// 任务7 删除dist文件夹
function delHandler(){
    return del(['./dist'])
}

// 任务8 :观察src里面文件的变化
function watchHanlder(){
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/lib/**',libHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/sass/*.scss',sassHandler)
}

// 整合任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(htmlHandler,jsHandler,cssHandler,imgHandler,libHandler,sassHandler,jsonHandler),
    // serverHandler,
    watchHanlder
)