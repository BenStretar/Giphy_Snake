import React, { Component } from 'react'

class HowToPlay extends Component {
    render() {
        return (
            <>
                <h1>This is the How to Play page</h1>
                <div>
                    {/* just a screen shot of the game board?
                    or draw it out?
                    or just have text on how to play? */}

                    <div className="">
                        <ul>
                            <li>Use the Arrow Keys on your keyboard to move the blue square around the board.</li>
                            <li>Avoid the red rectangles. If they hit you your game will end.</li>
                            <li>Collect as many gifs (items) as you can</li>
                            <li>Top left of the screen shows your time and below that the amount of gifs that you have picked up</li>
                            <li>note: you don't have to pick up this items if you don't want to</li>
                            <li>the longer you survive the faster the enemies will move</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default HowToPlay;

