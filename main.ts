radio.setGroup(13)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -300) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowNorth)
    } else if (input.acceleration(Dimension.Y) > 300) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.ArrowSouth)
    } else if (input.acceleration(Dimension.X) < -300) {
        radio.sendNumber(3)
        basic.showString("L")
    } else if (input.acceleration(Dimension.X) > 300) {
        radio.sendNumber(4)
        basic.showString("R")
    } else {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
    }
})
