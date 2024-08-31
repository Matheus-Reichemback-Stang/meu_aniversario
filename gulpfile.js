// Faz as Funções Gerais
const gulp = require('gulp');
// Minifica o HTML
const htmlmin = require('gulp-htmlmin');
// Compila e Minifica o SASS
const sass = require('gulp-sass')(require('sass'));
// Cria um Mapa de rota
const sourcemaps = require('gulp-sourcemaps');
// Minifica o JavaScript
const uglify = require('gulp-uglify');
// Ofusca o JavaScript

// .pipe(obfuscate())
// Minifica e Ofusca o JavaScript
function compileJs(){
    return gulp.src('./src/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

// Cria mapa do SASS e Minifica o CSS
function compileSass(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

// Minifica o HTML
function compileHtml(){
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist/'));
}

// npm run build
exports.default = gulp.parallel(compileHtml, compileSass, compileJs);

// npm run dev
exports.watch = function(){
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.parallel(compileHtml))
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compileSass))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(compileJs))
}