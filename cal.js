var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
    // 解析 url 参数
    let params = url.parse(req.url, true).query
    let number1 = parseFloat(params.num1)
    let number2 = parseFloat(params.num2)
    let symbol = params.symbol1
    let result = 0
    console.log('symbol:',symbol)
    if (number1 && number2 && symbol) {
        if (symbol == "+") {
            result = number1 + number2
        } else if (symbol == "-") {
            result = number1 - number2
        } else if (symbol == "*") {
            result = number1 * number2
        } else if (symbol == "/") {
            result = number1 / number2
        } else {
            console.log("请输入正确的符号")
        }
    }
    res.write(result.toString())
    res.end()
}).listen(3000, "localhost")
