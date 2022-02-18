let countKey = 0;

function userCard(num) {
    let cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        get key() {
            if (num === undefined) {
                num = ++countKey;
            }
            if (num >= 1 && num <= 3) {
                return num;
            } else {
                return -1;
            }
        }
    };
    let cardInfo = {
        getCardOptions: function () {
            return cardOptions;
        },
        putCredits: function (amount) {
            cardOptions.balance += amount;
            cardOptions.historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: getDate(),
            });
        },
        takeCredits: function (amount) {
            if (amount <= cardOptions.transactionLimit && amount <= cardOptions.balance) {
                cardOptions.balance -= amount;
                cardOptions.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime: getDate(),
                })
            } else {
                console.error(`Not enough money!`);
            }
        },
        setTransactionLimit: function (limit) {
            cardOptions.transactionLimit = limit;
            cardOptions.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: getDate(),
            })
        },
        transferCredits: function (amount, card) {
            let transferAmount = amount * 1.005;
            if (cardOptions.balance + cardOptions.transactionLimit >= transferAmount) {
                card.balance += amount;
                cardOptions.balance -= transferAmount;
                if (cardOptions.balance < 0) {
                    cardOptions.transactionLimit += cardOptions.balance;
                    cardOptions.balance = 0;
                }
                cardOptions.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: transferAmount,
                    operationTime: getDate(),
                });
                if (card.historyLogs === undefined) {
                    card.historyLogs = [];
                }
                card.historyLogs.push({
                    operationType: 'Transfer credits from card',
                    credits: amount,
                    operationTime: getDate(),
                });
            }
        }
    };
    return cardInfo;
}

function digits(num) {
    if (num < 10) {
        return ('0' + num);
    } else {
        return num;
    }
}

function getDate() {
    let day = digits(new Date().getUTCDay());
    let month = digits(new Date().getUTCMonth() + 1);
    let hour = digits(new Date().getUTCHours());
    let minute = digits(new Date().getUTCMinutes());
    let second = digits(new Date().getUTCSeconds());
    return `${day}/${month}/${new Date().getUTCFullYear()}, ${hour}:${minute}:${second}`;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];

        countKey = 0;
    }

    addCard() {
        if (this.card.length <= 3) {
            let card = userCard();
            this.card.push(card);
        } else {
            console.error(`???`);
        }
    }

    getCardByKey(key)
    {
        this.card.find(item => item.getCardOptions().key === key);
        return this.card.find(item => item.getCardOptions().key === key);
    }
}
let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card2.putCredits(300);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
