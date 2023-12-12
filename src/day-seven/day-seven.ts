// --- Day 7: Camel Cards ---

import { sumArray } from "../utils/utility"

const cardMap = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
}

export function solve(lines: string[]) {

    const typedHands = lines.map(line => {
        const [hand, bid] = line.split(' ')
        const handType = getType(hand)
        return {hand, handType: handType, bid: parseInt(bid, 10)}
    })
    typedHands.sort(compare)

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

    const isFive = cards.every(card => card === cards[0])
    const isFour = cards.some(card => cards.filter(c => c === card).length === 4)
    const isThree = cards.some(card => cards.filter(c => c === card).length === 3)
    const isTwoPair = new Set(cards).size === 3
    const isPair = cards.some(card => cards.filter(c => c === card).length === 2)
    const isHighCard = cards.some(card => cards.filter(c => c === card).length === 1)
    const isFullHouse = isThree && isPair
    const isThreeOfAKind = isThree && !isPair

    if (isFive) return 7
    if (isFour) return 6
    if (isFullHouse) return 5
    if (isThreeOfAKind) return 4
    if (isTwoPair) return 3
    if (isPair) return 2
    if (isHighCard) return 1

    return 0
}

