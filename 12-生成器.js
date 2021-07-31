function one () {
  setTimeout(() => [
    console.log(111)
  ], 1000)
}
function two () {
  setTimeout(() => {
    console.log(222)
  }, 2000)
}
function three () {
  setTimeout(() => {
    console.log(333)
  }, 3000)
}

function * gen () {
  yield one()
  yield two()
  yield three()
}

// 调用生成器函数
const iterator = gen()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
