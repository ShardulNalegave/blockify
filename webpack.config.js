
const path = require("path")

module.exports = {
	entry: "./dist/main.js",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "public")
	}	
}