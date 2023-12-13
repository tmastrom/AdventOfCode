// --- Day 7: Camel Cards ---

import { sumArray } from "../utils/utility"

const cardMap = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    'J': 1,
}

export function solve(lines: string[]) {
    const typedHands = lines.map(line => {
        const [hand, bid] = line.split(' ')
        const handType = getType(hand)
        return {hand, handType: handType, bid: parseInt(bid, 10)}
    })
    typedHands.sort(compare)
    console.log(typedHands)

    const winnings = typedHands.map((hand, index) => hand.bid * (index + 1))
    return sumArray(winnings)
}


function compare(a: {hand: string; handType: number; bid:number }, b: {hand: string; handType: number; bid:number }) {
    if (a.handType < b.handType) return -1
    if (a.handType > b.handType) return 1
    if (a.handType === b.handType) {
        // compare the cards in order
        const cardsA = a.hand.split('')
        const cardsB = b.hand.split('')

        for(let i = 0; i < cardsA.length; i++) {
            if (cardMap[cardsA[i]] < cardMap[cardsB[i]]) return -1
            if (cardMap[cardsA[i]] > cardMap[cardsB[i]]) return 1
        }
    }
}

function getType(hand: string) {
    const cards = hand.split('')
    const jokers = cards.filter(card => card === 'J').length

    const isFive = cards.every(card => card === cards[0])
    const isFour = cards.some(card => cards.filter(c => c === card).length === 4)
    const isThree = cards.some(card => cards.filter(c => c === card).length === 3)
    const isTwoPair = new Set(cards).size === 3
    const isPair = cards.some(card => cards.filter(c => c === card).length === 2)
    const isHighCard = cards.some(card => cards.filter(c => c === card).length === 1)
    const isFullHouse = isThree && isPair
    const isThreeOfAKind = isThree && !isPair

    if (isFive) return 7
    if (isFour) {
        if (jokers === 1) return 7
        return 6
    }
    if (isFullHouse){
        // with one joker it is four of a kind
        // with two jokers it is five of a kind
        if (jokers === 1) return 6
        if (jokers === 2) return 7
        return 5 + jokers
    }
    if (isThreeOfAKind) {
        // with one joker it is four of a kind
        // with two jokers it is five of a kind
        if ( jokers == 1 ) return 6
        if ( jokers == 2 ) return 7
        return 4
    }
    if (isTwoPair) {
        // with one joker it is full house
        // with two jokers it is four of a kind
        if (jokers === 1) return 5
        if (jokers === 2) return 6
        return 3
    }
    if (isPair) {
        // with one joker it is three of a kind
        if (jokers === 1) return 4
        // with two jokers it is four of a kind
        if (jokers === 2) return 6
        // with three jokers it is five of a kind
        if (jokers === 3) return 7
        return 2
    }
    if (isHighCard) {
        if (jokers === 1) return 2
        if (jokers === 2) return 4
        return 1
    }

    return 0
}

