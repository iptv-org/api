const csv = require('csvtojson')
const path = require('path')
const glob = require('glob')
const fs = require('fs')

const DATABASE_DIR = './database'
const OUTPUT_DIR = './.gh-pages'

fs.exists(OUTPUT_DIR, function (exists) {
	if (!exists) {
		fs.mkdirSync(OUTPUT_DIR)
	}
})

glob(`${DATABASE_DIR}/*.csv`, async function (err, files) {
	for (const inputFile of files) {
		const inputFilename = path.parse(inputFile).name
		const outputFile = `${OUTPUT_DIR}/${inputFilename}.json`

		const json = await csv().fromFile(inputFile)
		fs.writeFileSync(path.resolve(outputFile), JSON.stringify(json, null, 2))
	}
})
