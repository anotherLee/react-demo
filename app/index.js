import _ from 'lodash'
import $ from 'jquery'

function component () {
  var $element = $('<div></div>')
  $element.html(_.join(['hello', 'webpack'], ' '))
  return $element
}

$('body').append(component())

console.log('你好啊')
console.log('试试npm run build')

console.log('watch')

console.log('试试dev-server')
