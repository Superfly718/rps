function showscoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        `)
    PA += 1
    Rounds += 1
    showscoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Ties += 1
    Rounds += 1
    showscoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # # .
        # . . . #
        # # # # #
        `)
    PB += 1
    Rounds += 1
    showscoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Ready player's! Begin!")
    basic.pause(2000)
    showscoreboard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
reset()
