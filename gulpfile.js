var gulp  = require('gulp');
var shell = require('gulp-shell');

//노드 스크립트 파일이 변경되면 자동으로 실행
gulp.task('watch', ()=> {
	gulp.watch('tests/*.js',(file)=>{
		console.log('===%s====',file.path.replace(__dirname,''));
		gulp.src(file.path, {read: false})
			.pipe(shell([
				'node <%= file.path %>'
			]));
	});
});

gulp.task('default', ['watch']);