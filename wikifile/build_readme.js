// run with node 8.1.3
var glob = require('glob')
var path = require('path')
var fs = require('fs')
var _ = require('lodash')

function read_md_title_and_introduce(path) {
  var title = ''
  var intro = ''
  var file = fs.readFileSync(path).toString();
  var firstline = file.split('\n')[0];
  title = firstline.split('#')[1].trim()
  idx0 = file.indexOf('\n')
  idx1 = file.indexOf('##')
  var intro_block = file.substring(idx0, idx1)
  if (intro_block) intro = intro_block.trim()
  return { title, intro }
}


if (require.main == module) {
  var readme_file_path = path.normalize(__dirname + '/README.md')
  var readme_file_str = '# WIKI\n'

  glob(__dirname + '/**/*.md', { ignore: ["**/navigation.md", "**/README.md"] }, function (err, files) {
    var tree = {}
    files = files || []
    paths = files.map(f => path.relative(__dirname, f).replace(/\\/g, '/'))
    var [top_level_md, second_level_md, third_level_md] = _.map([1, 2, 3], len => _.filter(paths, path => path.split('/').length == len))
    readme_file_str += "\n"
    _.forEach(top_level_md, md => readme_file_str += `* [${read_md_title_and_introduce(__dirname + '/' + md).title}](${md})\n`)
    var sg = _.groupBy(second_level_md, v => v.split('/')[0])
    var tg = _.groupBy(third_level_md, v => v.split('/')[0])
    _.forEach(tg, (path_array, second_path) => {
      readme_file_str += `\n## ${second_path}\n`
      if (sg[second_path]) {
        readme_file_str += '\n'
        _.forEach(sg[second_path], md => readme_file_str += `* [${read_md_title_and_introduce(__dirname + '/' + md).title}](${md})\n`)
      } var ti = _.groupBy(tg[second_path], v => v.split('/')[1])
      _.forEach(ti, (path_array, third_path) => {
        readme_file_str += `\n### ${third_path}\n\n`
        _.forEach(path_array, md => readme_file_str += `* [${read_md_title_and_introduce(__dirname + '/' + md).title}](${md})\n`)
      })

    })

    fs.writeFileSync(readme_file_path, readme_file_str)
    console.log("README file generated!")
    process.exit()
  })

}