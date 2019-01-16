import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Enrique Peña Nieto',
        img: 'img/250x180/epn.jpg',
        clicked: false
    },
    {
        name: 'Andres Manuel',
        img: 'img/250x180/amlo.jpg',
        clicked: false
    },
    {
        name: 'Margarita Zavala',
        img: 'img/250x180/zavala.jpeg',
        clicked: false
    },
    {
        name: 'Felipe Calderón',
        img: 'img/250x180/fch.jpg',
        clicked: false
    },
    {
        name: 'Luis Videgaray',
        img: 'img/250x180/vide.jpg',
        clicked: false
    },
    {
        name: 'Ernesto Zedilli',
        img: 'img/250x180/zedillo.jpg',
        clicked: false
    },
    {
        name: 'Carlos Salinas',
        img: 'img/250x180/salinas.jpg',
        clicked: false
    },
    {
        name: 'José Antonio Meade',
        img: 'img/250x180/meade.jpg',
        clicked: false
    },
    {
        name: 'Rosario Robles',
        img: 'img/250x180/rosario.jpg',
        clicked: false
    },
    {
        name: 'Claudia Shenbaum',
        img: 'img/250x180/shemb.jpg',
        clicked: false
    },
    {
        name: 'Vicente Fox',
        img: 'img/250x180/fox.jpg',
        clicked: false
    },
    {
        name: 'Cuauhtémoc Cárdenas',
        img: 'img/250x180/cardenas.jpg',
        clicked: false
    },
    {
        name: 'Jaime Rodriguéz',
        img: 'img/250x180/bronco.jpg',
        clicked: false
    },
    {
        name: 'Marcelo Ebrad',
        img: 'img/250x180/ebrad.jpg',
        clicked: false
    },
    {
        name: 'Ricardo Anaya',
        img: 'img/250x180/anaya.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every politician of Mexico. Once you click a politician the grid will shuffle.
                        <br/>Try not to click the same politician twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}