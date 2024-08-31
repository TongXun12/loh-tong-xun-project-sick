// 显示心跳+康复
input.onButtonPressed(Button.A, function () {
    images.createBigImage(`
        . . . . . . . . # .
        . . . # . . . # . #
        . . # . # . # . . .
        . # . . . # . . . .
        # . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . # . . . #
        # . . . # . # . # .
        . # . # . . . # . .
        . . # . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . # . . . # . .
        # . # . # . # . # .
        . # . . . # . . . #
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . # . . . . . # . .
        # . # . . . # . # .
        . . . # . # . . . #
        . . . . # . . . . .
        `).scrollImage(1, 200)
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    edubitMotors.setServoPosition(ServoChannel.S1, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 0)
    edubitMotors.setServoPosition(ServoChannel.S1, 0)
})
// 生病
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
edubitRgbBit.setPixelColor(0, 0x00ffff)
basic.pause(100)
edubitRgbBit.setPixelColor(1, 0x00ffff)
basic.pause(100)
edubitRgbBit.setPixelColor(2, 0x00ffff)
basic.pause(100)
edubitRgbBit.setPixelColor(3, 0x00ffff)
basic.pause(100)
edubitRgbBit.clear()
basic.pause(100)
edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
basic.pause(100)
edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
basic.pause(100)
edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
basic.pause(100)
edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
basic.pause(100)
basic.showIcon(IconNames.Sad)
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    basic.pause(4000)
})
