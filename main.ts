basic.showIcon(IconNames.Heart)
let a = 0
let あ = 0
basic.forever(function () {
    a += 1
    basic.pause(1000)
    led.plotBarGraph(
    a,
    50
    )
    あ += 1
})
