
const path = require("path")

module.exports = {
	entry: "./dist/test/main.js",
	mode: "development",
	output: {
		filename: "main.js",
		path: path.join(__dirname, "public")
	}	
}