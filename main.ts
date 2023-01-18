let liga_luz = false
input.onSound(DetectedSound.Loud, function () {
    liga_luz = !(liga_luz)
    if (liga_luz) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
