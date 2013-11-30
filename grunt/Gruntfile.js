module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: "expanded"
				},
				files: [{
					"css/styles/style1.css": "css/sass/style1.scss",
					"css/styles/style2.css": "css/sass/style2.scss"
				}]
			}
		},

		concat: {
			js: {
				src: "js/scripts/*.js",
				dest: "js/app.js"
			},
			css: {
				src: "css/styles/*.css",
				dest: "css/app.css"
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			js: {
				files: ["js/scripts/*.js"],
				tasks: ["concat:js"]
			},
			css: {
				files: ["css/**/*.scss"],
				tasks: ["sass", "concat:css"]
			}
		}
	});

	grunt.registerTask("dev", ["sass", "concat", "watch"]);
};