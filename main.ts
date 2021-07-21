radio.setGroup(13)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowNorth)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.Sword)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(3)
        basic.showString("L")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(4)
        basic.showString("R")
    } else {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
    }
})
