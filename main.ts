function 関数テスト () {
    あ += 1
}
basic.showIcon(IconNames.Heart)
let a = 0
let あ = 0
basic.forever(function () {
    a += 1
    basic.pause(1000)
    led.plotBarGraph(
    a / あ,
    50
    )
})
basic.forever(function () {
    関数テスト()
    basic.pause(2000)
})
